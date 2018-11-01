;(function (ApliaSiteObject, Repo) {
    $.extend(Repo, {
        /**
         * @title
         * MobileMenu
         *
         *
         * @version 2.0.0
         * @author Aplia AS
         *
         * @dependencies
         * jquery
         * jquery.cookie
         *
         */
        MobileMenu: {

            TEMPLATE_UL: '<ul>',

            TEMPLATE_LI_HAS_PARENT: '<li class="back"><a class=" js-previous" href="/"><span class="previous"><i class="fa fa-chevron-circle-left"></i> Forrige nivå</span> &nbsp;</a><a class=" js-top" href="/"><span class="previous"><i class="fa fa-chevron-circle-up"></i> Toppnivå</span> &nbsp;</a></li>',

            TEMPLATE_LI: '<li><a></a></li>',

            TEMPLATE_LI_A_NEXT: ' <span class="next"><i class="fa fa-chevron-circle-right"></i></span>',


            /**
             * Collection of events that tells that a CSS3 transition has ended.
             */
            ANIMATION_END_EVENTS: 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',

            /**
             * Should return full URL to the API that fetches mobile menu
             * @param nodeId The node passed as a parameter
             * @returns {string} Full URL to JSON API
             * @constructor
             */
            AJAX_MODULE_API: function (nodeId) {
                if (typeof window.ApliaSiteAPI !== 'undefined') {
                    return window.ApliaSiteAPI.AJAX_MODULE_API(nodeId);
                } else {
                    console.log("window.ApliaSiteAPI is not defined, do you have the latest head.tpl?");
                    return "/mobilemenu/tree/" + nodeId;
                }
            },

            /**
             * Cached menu objects.
             */
            menuCache: {},


            /**
             * When menu items are clicked, ajax requests are sent, we need to wait before sending new requests. This array keeps track of clicked node ids.
             */
            ajaxClickQueue: [],


            /**
             * Fetches Node API tree from cache or API call.
             * Uses cacheTraverse to cache result from AJAX call.
             *
             * @param nodeId
             * @param callee
             */
            fetchLevel: function (nodeId, callee) {
                var that = this;

                if (typeof this.menuCache[nodeId] !== 'undefined') {
                    callee(that.menuCache[nodeId]);
                } else {
                    if ($.inArray(nodeId, that.ajaxClickQueue) !== -1) {
                        return;
                    }
                    that.ajaxClickQueue.push(nodeId);
                    $.get(this.AJAX_MODULE_API(nodeId)).done(function (data) {
                        nodeId = data.current_node_id;
                        that.cacheTraverse(data);
                        callee(that.menuCache[nodeId]);
                        that.ajaxClickQueue = jQuery.grep(that.ajaxClickQueue, function(value) {
                            return value != nodeId;
                        });
                    });
                }

            },

            /**
             * Caches result from API in menuCache variable. Traverses recursive.
             * Task: to limit API calls.
             *
             * @param nodeObject
             */
            cacheTraverse: function (nodeObject) {
                var that = this;
                that.menuCache[nodeObject.node_id] = nodeObject;
                if (nodeObject.children) {
                    $.each(nodeObject.children, function(index, child) {
                        // ONLY if recursive fetching is enabled.. hard on server.
                        if (child.tree) {
                            that.cacheTraverse(child.tree);
                        }
                    });
                }
            },


            /**
             * Traverses DOM, manipulating it to a tree structure based on a nodeobject we want to view.
             * This is the main logic behind this mobile menu. Tends to do a lot of DOM manipulation.
             *
             * If we have the following tree already loaded.
             *
             * - ROOT DIV
             *     - A (nodeid: #1)
             *         - B (nodeid: #2)
             *         - C (nodeid: #3)
             *         - D (nodeid: #4)
             *     - E (nodeid: #5)
             *
             * And we ask to add a nodeObject ("F"), where the parent nodeid is #5 Then this function will
             * traverse and check if we find a parent. Since "#5"/("E") already is in the tree, "F" will be added below
             * "E".
             *
             * The tree now is:
             *
             * - ROOT DIV
             *     - A
             *         - B
             *         - C
             *         - D
             *     - E
             *         - F
             *
             *
             * @param nodeObject Object returned from the API.
             */
            traverseAdd: function (nodeObject) {
                var that = this,
                    $ul,
                    $parentNode,
                    $superLi,
                    $found = $('#mobilemenu ul[data-node_id="'+nodeObject.node_id+'"]');

                // If we don't find the UL we want in DOM, lets add it. The process is quite expensive.
                if (! $found.length) {

                    // Create a new UL for this nodeobject.
                    $ul = $(that.TEMPLATE_UL);
                    $ul.attr('data-node_id', nodeObject.node_id);

                    // If the NODE has a PARENT we must have previous links.
                    if (nodeObject.has_parent_node) {
                        $superLi = $(that.TEMPLATE_LI_HAS_PARENT);
                        $superLi.find('.js-previous').attr('data-node_id', nodeObject.parent.node_id);
                        $ul.append($superLi);
                    // Else, we must place custom panels on the top.
                    } else {
                        $('#mobilemenu-custom-panels li[data-placement="top"]').appendTo($ul);
                    }

                    // Check if we find a LI that is the parent of this UL... If so append the UL to it.
                    $parentNode = $('#mobilemenu li[data-node_id="'+nodeObject.node_id+'"]');
                    if ($parentNode.length) {
                        $parentNode.append($ul);
                    // Thus, if there is no parent LI for this UL, we will add it to the root.
                    } else {
                        $('#mobilemenu > .mobilemenu-showhide').append($ul);
                    }


                    var extraItemsTop = $('.mobilemenu-prepend[data-node_id="'+nodeObject.node_id+'"]');
                    if (extraItemsTop.length) {
                        $ul.append(extraItemsTop.html());
                    }


                    // Now, loop all children to build LI's to add to the UL.
                    $.each(nodeObject.children, function(index, child) {
                        var $existingChildUl,
                            $li = $(that.TEMPLATE_LI);
                            $li.attr('data-node_id', child.node_id);
                            $li.find('a').attr('href', child.url).text(child.name);


                        // If the child has children, we must add a "NEXT" level link.
                        if (child.has_children) {
                            $li.find('a').append(' <span class="next" data-node_id="'+child.node_id+'"><i class="fa fa-chevron-circle-right"></i></span>');

                            $existingChildUl = $('#mobilemenu ul[data-node_id="'+child.node_id+'"]');

                            // If there is a UL that should be below this one (we might be going upwards the tree)
                            // then add the exsiting UL we found to THIS new LI.
                            if ( $existingChildUl.length) {
                                $existingChildUl.appendTo($li);
                            }
                        }
                        // Append the LI to the new UL.
                        $ul.append($li);

                    });

                    var extraItems = $('.mobilemenu-append[data-node_id="'+nodeObject.node_id+'"]');
                    if (extraItems.length) {
                        $ul.append(extraItems.html());
                    }


                    // If this NODE does not have a parent node, add bottom placement custom panels.
                    if (!nodeObject.has_parent_node) {
                        $('#mobilemenu-custom-panels li[data-placement="bottom"]').appendTo($ul);
                    }

                } else {
                    // It's already in DOM.
                    $ul = $found;
                }

                // Remove all .current classes from ul siblings:
                $('#mobilemenu ul').removeClass('current');

                // Add current to correct UL.
                $ul.addClass('current');
            },


            /**
             * Shows a nodeId in the menu. Uses fetchLevel cacheTraverse and traverseAdd
             *
             * @param nodeId
             */
            buldDomForNodeId: function (nodeId) {
                var that = this;
                this.fetchLevel(nodeId, function (currentNodeObject) {
                    that.traverseAdd(currentNodeObject, that.menuCache);
                });
            },

            /**
             * Module initialization
             *
             * @param options
             */
            init: function (options) {
                var that = this,
                    menuClosing = false;

                options = $.extend({
                    autoSyncMenuDomLoad: true
                }, options || {})



                // When animation of the nav#mobilemenu is done.
                $("nav#mobilemenu").on(this.ANIMATION_END_EVENTS, function() {
                    // Only run this if the menu is being hided.
                    if (!$("nav#mobilemenu").hasClass('show') && menuClosing) {
                        $('nav#mobilemenu').hide({
                            duration: 0,
                            done: function () {
                                $('html, body').css('overflow-x','auto');
                                $('html, body').css('max-width', '100%');
                                menuClosing = false;
                            }
                        });
                    }
                });




                // When we toggle the mobile menu.
                $('div#mobilemenu-control a').on('click', function(e) {
                    e.preventDefault();


                    /* Settes når meny vises, fjernes når den skjules */
                    if ($('nav#mobilemenu').hasClass('show')) {
                        menuClosing = true;
                        $('div#mobilemenu-control').removeClass('show');
                        $('nav#mobilemenu').removeClass('show');
                    } else {
                        $('html, body').css('overflow-x','hidden');
                        $('html, body').css('max-width', '100%');
                        $('nav#mobilemenu').show({
                            duration: 0,
                            done: function () {
                                $('div#mobilemenu-control').addClass('show');
                                $('nav#mobilemenu').addClass('show');
                            }
                        });
                    }


                    that.buldDomForNodeId($("#mobilemenu").data('current_nodeid'));

                    return false;
                });


                // When we go to a previous section in the mobile menu.
                $(document).on('click', 'nav#mobilemenu a.js-previous', function(e)
                {
                    e.preventDefault();
                    e.stopPropagation();
                    that.buldDomForNodeId($(this).data('node_id'));

                    // Scroll to the top of the page to avoid user not seing the menu (the menu can have many items
                    // at first, and when going to the previous it might only have one item, and menu will not be
                    // visible. So we scroll window to top of the screen on every click to avoid confusion.
                    window.scrollTo(0,0);
                    return false;
                });

                // When we go to a previous section in the mobile menu.
                $(document).on('click', 'nav#mobilemenu a.js-top', function(e)
                {
                    e.preventDefault();
                    e.stopPropagation();
                    that.buldDomForNodeId($("#mobilemenu").data('root_nodeid'));

                    // Scroll to the top of the page to avoid user not seing the menu (the menu can have many items
                    // at first, and when going to the previous it might only have one item, and menu will not be
                    // visible. So we scroll window to top of the screen on every click to avoid confusion.
                    window.scrollTo(0,0);
                    return false;
                });

                // When we go to the sub item.
                $(document).on('click', 'nav#mobilemenu span.next', function(e)
                {
                    e.preventDefault();
                    e.stopPropagation();

                    that.buldDomForNodeId($(this).data('node_id'));

                    // Scroll top.
                    window.scrollTo(0,0);
                    return false;
                });


                // Autosync
                // For performance, we can autosync the menu with AJAX once jQuery finds that the menu opener button
                // is visible. This means that the menu will be ready when a user opens the menu.
                if (options.autoSyncMenuDomLoad) {
                    function checkAutoSync() {
                        // Only do autosync if the MENU ICON FOR MOBILE is VISIBLE. No need to do autosync on e.g.
                        // desktop modes. Instead we just check for visibility and fire sync.
                        if ($('div#mobilemenu-control a').is(':visible')) {
                            $(window).off("resize",checkAutoSync);
                            that.buldDomForNodeId($("#mobilemenu").data('current_nodeid'));
                        }
                    }
                    $(window).resize(function () {
                        if (!$('div#mobilemenu-control a').is(':visible')) {
                            $('div#mobilemenu-control').removeClass('show');
                            $('nav#mobilemenu').removeClass('show');
                            $("nav#mobilemenu").css('display', 'none');
                        }
                    });

                    $(window).resize(checkAutoSync);
                    checkAutoSync();
                }

            }
        }
    });
})(window.ApliaSiteObject = window.ApliaSiteObject || {}, window.ApliaSiteObject.Components = window.ApliaSiteObject.Components || {});

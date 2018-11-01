;
(function (ApliaSiteObject, Repo) {
    $.extend(Repo, {
        /**
         * EqualHeightBlockViews will calculate block columns and set them to equal hight, based on the context.
         */
        EqualHeightBlockViews: {
            /**
             * Set to "true" to temporary disable equal height plugin, but remember to enable it again with setting this to "false".
             */
            ignoreScaling: false,

            blocks: [],
            context: 'l',
            setAppropriateSizes: function () {
                var ctx = this.context;


                $.each(this.blocks, function () {
                    var $columns = this;

                    var ctxVal = 0; //
                    var colCount = 0; // Amount of columns in this virtual row.
                    var virtualRow = $();
                    var lastAppliedVirtualRow;
                    var makeEqualHeight = function (minHeight, maxHeight) {
                        var tallest = minHeight ? minHeight : 0;
                        this.each(function () {
                            var $contentViewBlock = $(this).children('.content-view-block');
                            var contentViewBlockHeight = $contentViewBlock.height();
                            if (contentViewBlockHeight > tallest) {
                                tallest = contentViewBlockHeight;
                            }
                        });
                        if ((maxHeight) && tallest > maxHeight) {
                            tallest = maxHeight;
                        }
                        return this.each(function () {
                            // no-no: $(this).height(tallest);
                            $(this).children('.content-view-block').height(tallest);
                        });
                    };

                    $columns.each(function (index) {
                        var val = $(this).data(ctx);

                        $(this).children('.content-view-block').css("height", "auto");
                        if (ctxVal + val > 12) {
                            if (virtualRow.length > 1) { // Apply makeEqualHeight ONLY if > 1 row.
                                makeEqualHeight.apply(virtualRow);
                            }
                            lastAppliedVirtualRow = index;
                            ctxVal = val;
                            colCount = 1;
                            virtualRow = $();
                            virtualRow = virtualRow.add($(this));
                        } else {
                            ctxVal += val;
                            virtualRow = virtualRow.add($(this));
                            colCount++;
                        }
                    });

                    // Add the last.
                    if (virtualRow.length) {
                        if (virtualRow.length > 1) { // Apply makeEqualHeight ONLY if > 1 row.
                            makeEqualHeight.apply(virtualRow);
                        }
                    }


                });

            },
            init: function (options) {
                var that = this;


                $.each(ApliaSiteObject.config.mediaQueryContextState, function (ctx, def) {
                    var resizeHandler = function () {
                        // We can ignore the scaling temporary.
                        if (that.ignoreScaling)return true;

                        that.blocks = [];
                        var $blocks = $('.class-frontpage-block > .content-view-children > .row');
                        $blocks.each(function () {
                            var $columns = $(this).children('.col');
                            that.blocks.push($columns);
                        });

                        if (that.blocks.length) {

                            that.context = ctx;
                            that.setAppropriateSizes();
                        }
                    };
                    enquire.register(def.query, {
                        match: function () {
                            resizeHandler();
                            $(window).resize(resizeHandler); // resize...
                        },
                        unmatch: function () {
                            $(window).off("resize", resizeHandler); // remove that resize... throw it in the garbage can.
                        }
                    });
                });

            }
        }
    });
})(window.ApliaSiteObject = window.ApliaSiteObject || {}, window.ApliaSiteObject.Components = window.ApliaSiteObject.Components || {});
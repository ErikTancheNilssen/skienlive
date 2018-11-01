;(function (ApliaSiteObject, Repo) {
    $.extend(Repo, {
        /**
         * Resizes the padding-top on BODY tag, based on screen-size.
         * If small screens padding will be ajusted dynamically.
         * If screen is above small it will not resize the padding.
         *
         * Should only be included if the toolbar is active.
         */
        WebsiteToolbarResize: {
            init: function (options) {


                var ezwtContainer = $('#ezwt');
                if (ezwtContainer.length) {
                    options = $.extend(options, {
                        pagebg: 'body'
                    });

                    var $pagebg = $(options.pagebg);

                    var resizeHandler = function () {
                        var ezwtContainerHeight = ezwtContainer.height();
                        $pagebg.css('padding-top', ezwtContainerHeight + 'px');
                    };
                    enquire.register(ApliaSiteObject.config.mediaQueryContextState.s.query, {
                        match: function () {
                            resizeHandler();
                            $(window).resize(resizeHandler); // resize...
                        },
                        unmatch: function () {
                            $pagebg.css('padding-top',ezwtContainer.height() + 'px');
                            $(window).off("resize", resizeHandler); // Remove.
                        }
                    });

                }
            }
        }
    });
})(window.ApliaSiteObject = window.ApliaSiteObject || {}, window.ApliaSiteObject.Components = window.ApliaSiteObject.Components || {});
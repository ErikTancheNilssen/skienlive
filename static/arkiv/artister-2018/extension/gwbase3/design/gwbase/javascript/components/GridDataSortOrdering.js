;
(function (ApliaSiteObject, Repo) {
    $.extend(Repo, {
        /**
         * GridDataSortOrdering
         */
        GridDataSortOrdering: {
            context: 'l',
            sortBlocks: function () {
                var that = this;
                var $blocks = $('.class-frontpage-block > .content-view-children > .row');
                $blocks.each(function () {
                    var $row = $(this);

                    if (!$row.data('disablefrontendsorting')) {

                        var $columns = $row.children('.col');
                        $columns.sort(function (a, b) {
                            return +$(a).data('order_' + that.context) - +$(b).data('order_' + that.context);
                        }).appendTo($row);
                    }

                });
            },
            init: function (options) {
                var that = this;


                $.each(ApliaSiteObject.config.mediaQueryContextState, function (ctx, def) {
                    enquire.register(def.query, {
                        match: function () {
                            that.context = ctx;
                            that.sortBlocks();
                        }
                    });
                });
            }
        }
    });
})(window.ApliaSiteObject = window.ApliaSiteObject || {}, window.ApliaSiteObject.Components = window.ApliaSiteObject.Components || {});


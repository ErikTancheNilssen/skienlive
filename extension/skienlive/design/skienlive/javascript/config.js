;(function (ApliaSiteObject) {

    /**
     * Simple configuration for sites.
     * Override this file for new sites.
     * Components have a "com" attribute and "args" is optional, you can override components settings with the "args"
     * attribute.
     */


    ApliaSiteObject.config = {


        /**
         * What components to load. Available components can be seen in site.js.
         * @param Repo References ApliaSiteObject.Components
         * @returns {Array} Components to load.
         */
        documentComponents: function (Repo) {
            return [
                {com: Repo.Menu},
                {com: Repo.Resize},
                {com: Repo.IOS},
                {com: Repo.ReplaceEmailLinks},
                {com: Repo.GridDataSortOrdering},
                {com: Repo.FieldsetOpener},
                {
                    com: Repo.MobileMenu,
                    args: {
                        autoSyncMenuDomLoad: true
                    }
                }
            ];
        },

        /**
         * Window components are loaded AFTER all images are loaded..
         * Load components that deals with manipulation of heights / widths here.
         * @param Repo
         * @returns {Array}
         */
        windowComponents: function (Repo) {
            return [
                {com: Repo.EqualHeightBlockViews}
            ];
        },


        /**
         * large / medium / small setup, ajust to conform to the CSS settings for this.
         */
        mediaQueryContextState: {
            l: {
                query: '(min-width: 800px)'
            },
            m: {
                query: '(min-width: 600px) and (max-width: 800px)'
            },
            s: {
                query: '(max-width: 600px)'
            }
        }
    };

})(window.ApliaSiteObject = window.ApliaSiteObject || {});
;(function (ApliaSiteObject) {

    ApliaSiteObject.initializedComponents = [];

    $.extend(ApliaSiteObject, {
        /**
         * Task of the ini function is to initialize an array of components.
         * @param components
         */
        init: function (components) {
            var that = this;
            /* All components must have a init function.*/
            $.each(components, function (index, component) {
                if (typeof component.com === 'undefined') {
                    console.error("Component "+index+" does not have a 'com' (Component) assigned to it and is undefined. ");
                } else if (typeof component.com.init === 'undefined') {
                    console.error("Component "+index+" does not have a 'init' method, undefined. ");
                } else {
                    that.initializedComponents.push(component.com);
                    component.com.init.apply(component.com, [component.args]);
                    component.com.initialized = true;
                }
            });
        }
    });

})(window.ApliaSiteObject = window.ApliaSiteObject || {});
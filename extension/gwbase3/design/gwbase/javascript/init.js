/**
 * Inititalize all the components.
 * Components can also be initialized inline html with:
 *      <script>ApliaSiteObject.init([{com: ApliaSiteObject.Components.ComponentName}}])</script>
 */
$(document).ready(function () {
    var ComponentRepo = ApliaSiteObject.Components;

    var components = ApliaSiteObject.config.documentComponents(ComponentRepo);

    if (typeof ApliaSiteObject.siteConfig !== 'undefined') {
        components = components.concat(ApliaSiteObject.siteConfig.documentComponents(ComponentRepo));
    }

    window.ApliaSiteObject.init(components);
});

$(window).load(function () {
    var ComponentRepo = ApliaSiteObject.Components;
    var components = ApliaSiteObject.config.windowComponents(ComponentRepo);


    if (typeof ApliaSiteObject.siteConfig !== 'undefined') {
        components = components.concat(ApliaSiteObject.siteConfig.windowComponents(ComponentRepo));
    }

    window.ApliaSiteObject.init(components);
})




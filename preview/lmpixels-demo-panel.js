var demoPanel = (function($) {
    "use strict";
    var demoPanel = $("#lm_demo_panel"),
        demoPanelSwitcher = $("#lm_demo_panel_switcher");
    $(window).on("click", function() {
        $("#lm_demo_panel.active").removeClass("active");
    });
    demoPanelSwitcher.on("click", function(event) {
        event.stopPropagation();
        demoPanel.toggleClass("active");
    });
    demoPanel.on("click", function(event) {
        event.stopPropagation();
    });
    $('#t_style').on("click", "a", function() {
        var page = $('#page'),
            selector = $(this).data("id");
        $('.t-style-switcher').removeClass("current-t-style");
        page.removeClass(function(index, className) {
            return (className.match(/(^|\s)template-style\S+/g) || []).join(' ');
        });
        $(this).addClass('current-t-style');
        page.addClass(selector);
    });
    $('#main_color').on("click", "a", function() {
        var head = $('head'),
            selector = $(this).data("id");
        $('.main-color-switcher').removeClass("current-main-color");
        $('#main_color a').removeClass('current-main-color');
        $(this).addClass('current-main-color');
        $('link[data-id="custom"]').remove();
        head.append('<link rel="stylesheet" href="css/main-' + selector + '.css" type="text/css" data-id="custom">');
        demoPanel.removeClass(function(index, className) {
            return (className.match(/(^|\s)panel-color\S+/g) || []).join(' ');
        });
        demoPanel.addClass("panel-color-" + selector);
    });
    $('#header_position').on("click", "a", function() {
        var page = $('#page'),
            selector = $(this).data("id");
        $('.layout-switcher').removeClass("current-layout");
        page.removeClass(function(index, className) {
            return (className.match(/(^|\s)layout-menu\S+/g) || []).join(' ');
        });
        $(this).addClass('current-layout');
        page.addClass(selector);
    });
    $('#header_color').on("click", "a", function() {
        var header = $('#site_header'),
            selector = $(this).data("id");
        $('.h-color-switcher').removeClass("current-h-color");
        header.removeClass(function(index, className) {
            return (className.match(/(^|\s)header-color\S+/g) || []).join(' ');
        });
        $('#header_color a').removeClass('current-h-color');
        $(this).addClass('current-h-color');
        header.addClass(selector);
    });
})(jQuery);
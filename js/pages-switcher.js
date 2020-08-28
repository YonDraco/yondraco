var PageTransitions = function(a, e) {
    "use strict";
    var t = "home",
        p = a(".subpages"),
        o = !1,
        r = !0,
        g = !1,
        n = {
            WebkitAnimation: "webkitAnimationEnd",
            OAnimation: "oAnimationEnd",
            msAnimation: "MSAnimationEnd",
            animation: "animationend"
        }[Modernizr.prefixed("animation")],
        s = Modernizr.cssanimations;

    function i(e) {
        if (!e) return !1;
        var t = a(e);
        t = t[0], (t = a(t.parentNode)) && (a("ul.site-main-menu li").removeClass("active"), t.addClass("active"))
    }

    function m() {
        var e = a("#page-ajax-loaded");

        function t() {
            e.removeClass("rotateOutDownRight closed"), e.show()
        }
        var p = a(".ajax-page-load").each(function() {
            if (p = a(this).attr("href"), location.hash == location.hash.split("/")[0] + "/" + p.substr(0, p.length - 5)) {
                var o = a(this).attr("href");
                return t(), e.load(o), !1
            }
        });
        a(document).on("click", ".site-main-menu, #ajax-page-close-button", function(t) {
            t.preventDefault(), a("#page-ajax-loaded").addClass("rotateOutDownRight closed"), setTimeout(function() {
                a("#page-ajax-loaded.closed").html(""), e.hide()
            }, 500), location.hash = location.hash.split("/")[0]
        }).on("click", ".ajax-page-load", function() {
            var e = location.hash.split("/")[0] + "/" + a(this).attr("href").substr(0, a(this).attr("href").length - 5);
            return location.hash = e, t(), !1
        })
    }

    function c(e, t) {
        if (!e.attr("data-animation")) {
            var i = parseInt(Math.floor(67 * Math.random()));
            e.data("animation", i)
        }
        var m, c, d, h = e.data("animation").toString();
        if (-1 != h.indexOf("-")) {
            var u = h.split("-");
            d = parseInt(u[Math.floor(Math.random() * u.length)])
        } else d = parseInt(h);
        if (d > 67) return alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67"), !1;
        switch (d) {
            case 1:
                m = "pt-page-moveFromRight", c = "pt-page-moveToLeft";
                break;
            case 2:
                m = "pt-page-moveFromLeft", c = "pt-page-moveToRight";
                break;
            case 3:
                m = "pt-page-moveFromBottom", c = "pt-page-moveToTop";
                break;
            case 4:
                m = "pt-page-moveFromTop", c = "pt-page-moveToBottom";
                break;
            case 5:
                m = "pt-page-moveFromRight pt-page-ontop", c = "pt-page-fade";
                break;
            case 6:
                m = "pt-page-moveFromLeft pt-page-ontop", c = "pt-page-fade";
                break;
            case 7:
                m = "pt-page-moveFromBottom pt-page-ontop", c = "pt-page-fade";
                break;
            case 8:
                m = "pt-page-moveFromTop pt-page-ontop", c = "pt-page-fade";
                break;
            case 9:
                m = "pt-page-moveFromRightFade", c = "pt-page-moveToLeftFade";
                break;
            case 10:
                m = "pt-page-moveFromLeftFade", c = "pt-page-moveToRightFade";
                break;
            case 11:
                m = "pt-page-moveFromBottomFade", c = "pt-page-moveToTopFade";
                break;
            case 12:
                m = "pt-page-moveFromTopFade", c = "pt-page-moveToBottomFade";
                break;
            case 13:
                m = "pt-page-moveFromRight", c = "pt-page-moveToLeftEasing pt-page-ontop";
                break;
            case 14:
                m = "pt-page-moveFromLeft", c = "pt-page-moveToRightEasing pt-page-ontop";
                break;
            case 15:
                m = "pt-page-moveFromBottom", c = "pt-page-moveToTopEasing pt-page-ontop";
                break;
            case 16:
                m = "pt-page-moveFromTop", c = "pt-page-moveToBottomEasing pt-page-ontop";
                break;
            case 17:
                m = "pt-page-moveFromRight pt-page-ontop", c = "pt-page-scaleDown";
                break;
            case 18:
                m = "pt-page-moveFromLeft pt-page-ontop", c = "pt-page-scaleDown";
                break;
            case 19:
                m = "pt-page-moveFromBottom pt-page-ontop", c = "pt-page-scaleDown";
                break;
            case 20:
                m = "pt-page-moveFromTop pt-page-ontop", c = "pt-page-scaleDown";
                break;
            case 21:
                m = "pt-page-scaleUpDown pt-page-delay300", c = "pt-page-scaleDown";
                break;
            case 22:
                m = "pt-page-scaleUp pt-page-delay300", c = "pt-page-scaleDownUp";
                break;
            case 23:
                m = "pt-page-scaleUp", c = "pt-page-moveToLeft pt-page-ontop";
                break;
            case 24:
                m = "pt-page-scaleUp", c = "pt-page-moveToRight pt-page-ontop";
                break;
            case 25:
                m = "pt-page-scaleUp", c = "pt-page-moveToTop pt-page-ontop";
                break;
            case 26:
                m = "pt-page-scaleUp", c = "pt-page-moveToBottom pt-page-ontop";
                break;
            case 27:
                m = "pt-page-scaleUpCenter pt-page-delay400", c = "pt-page-scaleDownCenter";
                break;
            case 28:
                m = "pt-page-moveFromRight pt-page-delay200 pt-page-ontop", c = "pt-page-rotateRightSideFirst";
                break;
            case 29:
                m = "pt-page-moveFromLeft pt-page-delay200 pt-page-ontop", c = "pt-page-rotateLeftSideFirst";
                break;
            case 30:
                m = "pt-page-moveFromTop pt-page-delay200 pt-page-ontop", c = "pt-page-rotateTopSideFirst";
                break;
            case 31:
                m = "pt-page-moveFromBottom pt-page-delay200 pt-page-ontop", c = "pt-page-rotateBottomSideFirst";
                break;
            case 32:
                m = "pt-page-flipInLeft pt-page-delay500", c = "pt-page-flipOutRight";
                break;
            case 33:
                m = "pt-page-flipInRight pt-page-delay500", c = "pt-page-flipOutLeft";
                break;
            case 34:
                m = "pt-page-flipInBottom pt-page-delay500", c = "pt-page-flipOutTop";
                break;
            case 35:
                m = "pt-page-flipInTop pt-page-delay500", c = "pt-page-flipOutBottom";
                break;
            case 36:
                m = "pt-page-scaleUp", c = "pt-page-rotateFall pt-page-ontop";
                break;
            case 37:
                m = "pt-page-rotateInNewspaper pt-page-delay500", c = "pt-page-rotateOutNewspaper";
                break;
            case 38:
                m = "pt-page-moveFromRight", c = "pt-page-rotatePushLeft";
                break;
            case 39:
                m = "pt-page-moveFromLeft", c = "pt-page-rotatePushRight";
                break;
            case 40:
                m = "pt-page-moveFromBottom", c = "pt-page-rotatePushTop";
                break;
            case 41:
                m = "pt-page-moveFromTop", c = "pt-page-rotatePushBottom";
                break;
            case 42:
                m = "pt-page-rotatePullRight pt-page-delay180", c = "pt-page-rotatePushLeft";
                break;
            case 43:
                m = "pt-page-rotatePullLeft pt-page-delay180", c = "pt-page-rotatePushRight";
                break;
            case 44:
                m = "pt-page-rotatePullBottom pt-page-delay180", c = "pt-page-rotatePushTop";
                break;
            case 45:
                m = "pt-page-rotatePullTop pt-page-delay180", c = "pt-page-rotatePushBottom";
                break;
            case 46:
                m = "pt-page-moveFromRightFade", c = "pt-page-rotateFoldLeft";
                break;
            case 47:
                m = "pt-page-moveFromLeftFade", c = "pt-page-rotateFoldRight";
                break;
            case 48:
                m = "pt-page-moveFromBottomFade", c = "pt-page-rotateFoldTop";
                break;
            case 49:
                m = "pt-page-moveFromTopFade", c = "pt-page-rotateFoldBottom";
                break;
            case 50:
                m = "pt-page-rotateUnfoldLeft", c = "pt-page-moveToRightFade";
                break;
            case 51:
                m = "pt-page-rotateUnfoldRight", c = "pt-page-moveToLeftFade";
                break;
            case 52:
                m = "pt-page-rotateUnfoldTop", c = "pt-page-moveToBottomFade";
                break;
            case 53:
                m = "pt-page-rotateUnfoldBottom", c = "pt-page-moveToTopFade";
                break;
            case 54:
                m = "pt-page-rotateRoomLeftIn", c = "pt-page-rotateRoomLeftOut pt-page-ontop";
                break;
            case 55:
                m = "pt-page-rotateRoomRightIn", c = "pt-page-rotateRoomRightOut pt-page-ontop";
                break;
            case 56:
                m = "pt-page-rotateRoomTopIn", c = "pt-page-rotateRoomTopOut pt-page-ontop";
                break;
            case 57:
                m = "pt-page-rotateRoomBottomIn", c = "pt-page-rotateRoomBottomOut pt-page-ontop";
                break;
            case 58:
                m = "pt-page-rotateCubeLeftIn", c = "pt-page-rotateCubeLeftOut pt-page-ontop";
                break;
            case 59:
                m = "pt-page-rotateCubeRightIn", c = "pt-page-rotateCubeRightOut pt-page-ontop";
                break;
            case 60:
                m = "pt-page-rotateCubeTopIn", c = "pt-page-rotateCubeTopOut pt-page-ontop";
                break;
            case 61:
                m = "pt-page-rotateCubeBottomIn", c = "pt-page-rotateCubeBottomOut pt-page-ontop";
                break;
            case 62:
                m = "pt-page-rotateCarouselLeftIn", c = "pt-page-rotateCarouselLeftOut pt-page-ontop";
                break;
            case 63:
                m = "pt-page-rotateCarouselRightIn", c = "pt-page-rotateCarouselRightOut pt-page-ontop";
                break;
            case 64:
                m = "pt-page-rotateCarouselTopIn", c = "pt-page-rotateCarouselTopOut pt-page-ontop";
                break;
            case 65:
                m = "pt-page-rotateCarouselBottomIn", c = "pt-page-rotateCarouselBottomOut pt-page-ontop";
                break;
            case 66:
                m = "pt-page-rotateSidesIn pt-page-delay200", c = "pt-page-rotateSidesOut";
                break;
            case 67:
                m = "pt-page-rotateSlideIn", c = "pt-page-rotateSlideOut"
        }
        var f, b = p,
            v = b.data("current");
        t = e.attr("href").split("#")[1];
        f = v;
        var k = a('section[data-id="' + v + '"]');
        if (f != (v = t)) {
            o = !0, b.data("current", v);
            var F = a("section[data-id=" + v + "]").addClass("pt-page-current");
            k.addClass(c).on(n, function() {
                k.off(n), r = !0, g && (l(b, F, k), r = !1)
            }), F.addClass(m).on(n, function() {
                F.off(n), g = !0, r && (l(b, F, k), g = !1, o = !1)
            })
        } else o = !1;
        s || l(k, F)
    }

    function l(a, e, t) {
        var p, o;
        p = e, (o = t).attr("class", o.data("originalClassList")), p.attr("class", p.data("originalClassList") + " pt-page-current")
    }
    return {
        init: function(e) {
            a(".pt-page").each(function() {
                var e = a(this);
                e.data("originalClassList", e.attr("class"))
            }), p.each(function() {
                "" === location.hash && a("section[data-id=" + g + "]").addClass("pt-page-current")
            }), a(".pt-trigger").on("click", function(e) {
                if (e.preventDefault(), o) return !1;
                var t = a(this);
                i(t), c(t), location.hash = a(this).attr("href")
            }), window.onhashchange = function(e) {
                if (location.hash) {
                    if (o) return !1;
                    var t = a(r + ' a[href*="' + location.hash.split("/")[0] + '"]');
                    i(t), c(t), m()
                }
            };
            var r = e.menu,
                g = "" === location.hash ? location.hash = t : location.hash;
            location.hash = g;
            var n = a(r + ' a[href*="' + location.hash.split("/")[0] + '"]');
            i(n), c(n), p.append('<div id="page-ajax-loaded" class="page-ajax-loaded animated rotateInDownRight"></div>'), m()
        }
    }
}(jQuery);
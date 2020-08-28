(function($) {
    "use strict";

    function portfolio_init() {
        var portfolio_grid = $('#portfolio_grid'),
            portfolio_filter = $('#portfolio_filters');
        if (portfolio_grid) {
            portfolio_grid.shuffle({
                speed: 450,
                itemSelector: 'figure'
            });
            $('.site-main-menu').on("click", "a", function(e) {
                portfolio_grid.shuffle('update');
            });
            portfolio_filter.on("click", ".filter", function(e) {
                portfolio_grid.shuffle('update');
                e.preventDefault();
                $('#portfolio_filters .filter').parent().removeClass('active');
                $(this).parent().addClass('active');
                portfolio_grid.shuffle('shuffle', $(this).attr('data-group'));
            });
        }
    }
    $(function() {
        $('#contact-form').validator();
        $('#contact-form').on('submit', function(e) {
            if (!e.isDefaultPrevented()) {
                var url = "contact_form/contact_form.php";
                $.ajax({
                    type: "POST",
                    url: url,
                    data: $(this).serialize(),
                    success: function(data) {
                        var messageAlert = 'alert-' + data.type;
                        var messageText = data.message;
                        var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                        if (messageAlert && messageText) {
                            $('#contact-form').find('.messages').html(alertBox);
                            $('#contact-form')[0].reset();
                        }
                    }
                });
                return false;
            }
        });
    });

    function mobileMenuHide() {
        var windowWidth = $(window).width();
        if (windowWidth < 1024) {
            $('#site_header').addClass('mobile-menu-hide');
        }
    }

    function customScroll() {
        var windowWidth = $(window).width();
        if (windowWidth > 991) {
            $(".pt-page").mCustomScrollbar({
                scrollInertia: 8
            });
            $("#site_header").mCustomScrollbar({
                scrollInertia: 8
            });
        } else {
            $(".pt-page").mCustomScrollbar('destroy');
            $("#site_header").mCustomScrollbar('destroy');
        }
    }
    $(window).on('load', function() {
        $(".preloader").fadeOut("slow");
        var ptPage = $('.subpages');
        if (ptPage[0]) {
            PageTransitions.init({
                menu: 'ul.site-main-menu',
            });
        }
        customScroll();
    }).on('resize', function() {
        mobileMenuHide();
        customScroll();
    });
    $(document).on('ready', function() {
        demoPanel;
        var $portfolio_container = $("#portfolio_grid");
        $portfolio_container.imagesLoaded(function() {
            setTimeout(function() {
                portfolio_init(this);
            }, 500);
        });
        $(' #portfolio_grid > figure > a ').each(function() {
            $(this).hoverdir();
        });
        $('.menu-toggle').on("click", function(event) {
            $('#site_header').toggleClass('mobile-menu-hide');
        });
        $('.site-main-menu').on("click", "a", function(e) {
            mobileMenuHide();
        });
        $(".testimonials.owl-carousel").owlCarousel({
            nav: true,
            items: 3,
            loop: false,
            navText: false,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }
        });
        $('.text-rotation').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            margin: 10,
            items: 1,
            autoplay: true,
            autoplayHoverPause: false,
            autoplayTimeout: 3800,
            animateOut: 'zoomOut',
            animateIn: 'zoomIn'
        });
        $('.lightbox').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            image: {
                titleSrc: 'title',
                gallery: {
                    enabled: true
                },
            },
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '<div class="mfp-title mfp-bottom-iframe-title"></div>' +
                    '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: '//www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }
                },
                srcAction: 'iframe_src',
            },
            callbacks: {
                markupParse: function(template, values, item) {
                    values.title = item.el.attr('title');
                }
            },
        });
        $('.ajax-page-load-link').magnificPopup({
            type: 'ajax',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            },
        });
        $('.tilt-effect').tilt({});
    });
})(jQuery);
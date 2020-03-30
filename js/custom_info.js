
/*!
 * Kovid19 v1.0.0 by Softnio.
**/
jQuery(function () {
	"use strict";

    var $win = $(window), $doc = $(document), $body = $('body'), 
    $navbar = $('.nk-navbar'),
    $navbar_toggle = $('.toggle'), 
    $main_navbar = $('.nk-navbar-menu'),
    _has_fixed = "has-fixed",
    _nav_overlay = "navbar-overlay",
    _menu_open = "menu-open",
    _mobile_menu = "mobile-menu";

    function sticky_navbar(){
        var $is_sticky = $('.is-sticky');
        if ($is_sticky.length > 0 ) {
            var navm = $is_sticky.offset();
            function sticky(){
                var _top = $(window).scrollTop();
                if(_top > navm.top){
                    if(!$is_sticky.hasClass(_has_fixed)) {
                        $is_sticky.addClass(_has_fixed);
                    }
                } else {
                    if($is_sticky.hasClass(_has_fixed)) {
                        $is_sticky.removeClass(_has_fixed);
                    }
                }
            }
            sticky()
            $(window).on('scroll', function(){
                sticky()
            });
        }
    }
    sticky_navbar();

    function onepage_scroll(){
        var _scroll_tigger = '.scrollto';
        $('a'+ _scroll_tigger +'[href*="#"]:not([href="#"])').on("click", function() {
            var _offset = !$navbar.hasClass(_has_fixed) ? $navbar.innerHeight() - 32 : $navbar.innerHeight() - 2;
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var toHash = this.hash, toHashN = (this.hash.slice(1)) ? $('[name=' + this.hash.slice(1) + ']') : false;
                var $toHash = toHash.length ? $(toHash) : toHashN;
                if ($toHash.length) {
                    $navbar_toggle.removeClass('active');
                    $main_navbar.removeClass(_menu_open);
                    $('.' + _nav_overlay).remove();
                    $body.removeClass('noscroll');
                    $('html, body').delay(150).animate({
                        scrollTop: ($toHash.offset().top - _offset)
                    }, 1000); 
                    return false;
                }
            }
        });
    }
    onepage_scroll();

    function menu_spy(){
        var _navbar_id = $main_navbar.attr('id');
        $body.scrollspy({ 
            target: '#' + _navbar_id,
            offset: $navbar.innerHeight(),
        });
    }
    menu_spy();
    
    function navigation_menu(){
        if($navbar_toggle.length > 0 ){
            $navbar_toggle.on('click', function(e){
                var $self = $(this), _self_toggle = ($self.data('menu-toggle'));
                    $self.toggleClass('active');
                    $('#' + _self_toggle).toggleClass(_menu_open);
                    $('#' + _self_toggle).after('<div class=' + _nav_overlay +'></div>');
                    if(!$main_navbar.hasClass(_menu_open)){
                        $('.' + _nav_overlay).remove();
                    }
                    $body.toggleClass('noscroll');
                e.preventDefault();
            });
        }
        
        $doc.on('click', 'body', function(e){
            if (!$navbar_toggle.is(e.target) && $navbar_toggle.has(e.target).length===0 && !$main_navbar.is(e.target) && $main_navbar.has(e.target).length===0 && $win.width() < 992)  {
                $navbar_toggle.removeClass('active');
                $main_navbar.removeClass(_menu_open);
                $('.' + _nav_overlay).remove();
                $body.removeClass('noscroll');
            }
        });

        function mobile_nav(){
            if($win.width() < 992){
                $main_navbar.delay(500).addClass(_mobile_menu);
            }else{
                $main_navbar.delay(500).removeClass(_mobile_menu);
                $main_navbar.removeClass(_menu_open);
            }
        }
        mobile_nav();
        $win.on('resize', function(){
            mobile_nav();
        });
    }
    navigation_menu()
	
}()); 

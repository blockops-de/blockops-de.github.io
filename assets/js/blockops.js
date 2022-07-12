jQuery(function($){
  $(document).ready(function(){

    // function for headertransform
    var header = $('header#navigation'),
    headerHeight = $(header).outerHeight(),
    opener = $('section#about'),
    breakpoint = $(header).offset().top + headerHeight;
    var lastScrollTop = 0;
    $(window).scroll(function(){
      var st = $(this).scrollTop();
      if (st > lastScrollTop){
        if(st >= breakpoint) {
          $(header).addClass('scrolled');
        }
      } else {
        if(st < breakpoint) {
          $(header).removeClass('scrolled');
        }
      }
      lastScrollTop = st;
    });

    // open and close fullscreen menu
    var trigger = $('.menutrigger'),
        menu = $('#menu');
    $(trigger).on('click', function() {
      if(!$(menu).hasClass('clicked')) {
        $(menu).addClass('clicked');
        if(!$('header').hasClass('scrolled')){
          $('header').addClass('adbg');
        }
      } else {
        $(menu).removeClass('clicked');
        if(!$('header').hasClass('scrolled')){
          $('header').removeClass('adbg');
        }
      }
    });

    // scrollerfunction for menu and anchorbutton
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        $(this).not('.btn').addClass('active');
        $('.scroll').not($(this)).removeClass('active');
        var target = this.hash;
        $target = $(target);
        var headerHeight = $('header#navigation').outerHeight(),
            target = this.hash,
            offset = $target.offset().top,
            scrollPos = $target.offset().top - headerHeight;
        $('#menu').removeClass('clicked');
        $('header').removeClass('adbg');
        $('html, body').animate({
            'scrollTop':  $target.offset().top - headerHeight
        }, 600, 'swing', function () {
            $('#menutrigger').prop('checked', false);
        });
    });

  });
});

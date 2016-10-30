$(document).ready(function(){

  // MenuToggle function to show and hide Navigation
  (function menuToggle() {
    var button = $('.menu'),
     page = $('main'),
     menuHeight = $('nav').innerHeight();

    $(button).on('click', function(el){
      el.preventDefault();
      (page).toggleClass('slideDown');

      if ( page.hasClass('slideDown') ) {
        $(page).css('top', menuHeight );
      } else {
        $(page).css('top', '0' );
      }

    });

  })();

});

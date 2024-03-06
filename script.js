$(document).ready(function() {
    $(window).scroll(function() {
      var windowHeight = $(window).height();
      var scrollPos = $(window).scrollTop();
      var revealPos = $('.image-row').offset().top;
  
      if (revealPos < (scrollPos + windowHeight)) {
        $('.image-row img').each(function(index) {
          var $img = $(this);
          setTimeout(function() {
            $img.css({
              'opacity': '1',
              'transform': 'translateY(0)'
            });
          }, 200 * index); // Delai de 200ms entre chaque image pour un effet progressif
        });
      }
    });
  });
  
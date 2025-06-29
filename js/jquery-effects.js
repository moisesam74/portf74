$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 600);
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#voltarTopo').fadeIn();
    } else {
      $('#voltarTopo').fadeOut();
    }
  });

  $('#voltarTopo').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });
});

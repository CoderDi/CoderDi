/*
 Third party
 */
//= ../../bower_components/jquery/dist/jquery.min.js

/*
    Custom
 */
//= partials/helper.js

$(document).ready(function() {
  
  $("#back-top").hide();
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('#back-top').fadeIn();
        } else {
          $('#back-top').fadeOut();
        }
      });
      $('#back-top a').click(function () {
        $('body,html').animate({scrollTop: 0}, 600);
        return false;
      });
    });
  
	$('.menu-blind').click(function() {
    $('.menu-blind__block').toggleClass('menu-blind__block-visible');
		$(this).toggleClass('menu-blind-visible');
		$('body').toggleClass('body-hidden');
	});
  
  $('.header__titles').click(function() {
    $('.header__titles').toggleClass('visible');
  });
  
  $('.portfolio__description_switch-comp').click(function() {
    $(this).parents('.portfolio__item').find('.portfolio__item_slide').removeClass('portfolio-visible');
    $(this).parents('.portfolio__item').find('.portfolio__item_slide1').addClass('portfolio-visible');
  });
  
  $('.portfolio__description_switch-ipad').click(function() {
    $(this).parents('.portfolio__item').find('.portfolio__item_slide').removeClass('portfolio-visible');
    $(this).parents('.portfolio__item').find('.portfolio__item_slide2').addClass('portfolio-visible');
  });
  
  $('.portfolio__description_switch-iphone').click(function() {
    $(this).parents('.portfolio__item').find('.portfolio__item_slide').removeClass('portfolio-visible');
    $(this).parents('.portfolio__item').find('.portfolio__item_slide3').addClass('portfolio-visible');
  });
  
	
  
});



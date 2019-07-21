$(document).ready(function () {
  $(".butter").click(function(){
    $(this).toggleClass("butter-hover");
    $(".menu").toggleClass("menu-open");
  });

  $(".slide-arrow").click(function(){
    $.fn.fullpage.moveSectionDown();
  });

  $(".screen__btn").click(function(){
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
    var then = $(this).parents(".screen-part");
    $(then).css("width","100%");
    $(this).parents(".screen").find(".screen-left").css("left","-50%");
    $(".slide-arrow").addClass("slide-arrow--hide");
    setTimeout(function(){
      $(then).addClass("screen-open");
      $(then).find(".screen-content").addClass("screen-content--hide");
    }, 500);
  });

  $(".screen-part__close").click(function(){
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
    var then = $(this).parents(".screen-part");
    $(then).removeClass("screen-open");
    setTimeout(function(){
      $(then).css("width","50%");
      $(then).parents(".screen").find(".screen-left").css("left","0");
      $(then).find(".screen-content").removeClass("screen-content--hide");
      $(".slide-arrow").removeClass("slide-arrow--hide");
    }, 500);
    
  });


  $('#fullpage').fullpage({
    
  });


  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top});
    return false;
  });
  
  
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });



});
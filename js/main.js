$(document).ready(function () {
  var activeScreen = 1;

  $(".butter").click(function(){
    $(this).toggleClass("butter-hover");
    $(".menu").toggleClass("menu-open");
  });

  $(".slide-arrow").click(function(){
    if ((activeScreen + 1) > $(".screen").length) return;
    $("#screen" + activeScreen).css("top","-50%");
    activeScreen++;
    $("#screen" + activeScreen).css("top","0");
    
    $(".slide-arrow").removeClass("slide-arrow--right");
  });

  document.onkeydown = checkKey;
  function checkKey(e) {
      e = e || window.event;
      if (e.keyCode == '38') {
        if (activeScreen == 1) return;
        $("#screen" + activeScreen).css("top","100%");
        activeScreen--;
        $("#screen" + activeScreen).css("top","0");
      }
      else if (e.keyCode == '40') {
        if ((activeScreen + 1) > $(".screen").length) return;
        $("#screen" + activeScreen).css("top","-50%");
        activeScreen++;
        $("#screen" + activeScreen).css("top","0");
      }
  }

  $(".screen__btn").click(function(){
    var then = $(this).parents(".screen-part");
    $(then).css("width","100%");
    $(this).parents(".screen").find(".screen-left").css("left","-50%");
    $(then).find(".screen_block-hide").css("max-height", $(then).find(".screen_block-hide").outerHeight());
    setTimeout(function(){
      $(then).addClass("screen-open");
    $(".slide-arrow").addClass("slide-arrow--right");
    }, 500);
    
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
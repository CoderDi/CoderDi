$(document).ready(function () {
  $(".js-watch-item").click(function(){
    $("html").addClass("no-scroll");
    $("#header").addClass("no-scroll");
    $(".js-popup-title").text($(this).parents(".item").find(".item__title").text());
    $(".popup").addClass("active");
  });
  $(".js-close").click(function(){
    $("html").removeClass("no-scroll");
    $("#header").removeClass("no-scroll");
    $(".popup").removeClass("active");
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
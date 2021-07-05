/*jQuery Masked Input Plugin*/
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(x){var a,e=navigator.userAgent,S=/iphone/i.test(e),i=/chrome/i.test(e),j=/android/i.test(e);x.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},x.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,v){var n,k,_,b,y,$,R;if(!t&&0<this.length){var e=x(this[0]).data(x.mask.dataName);return e?e():void 0}return v=x.extend({autoclear:x.mask.autoclear,placeholder:x.mask.placeholder,completed:null},v),n=x.mask.definitions,k=[],_=$=t.length,b=null,x.each(t.split(""),function(e,t){"?"==t?($--,_=e):n[t]?(k.push(new RegExp(n[t])),null===b&&(b=k.length-1),e<_&&(y=k.length-1)):k.push(null)}),this.trigger("unmask").each(function(){function o(){if(v.completed){for(var e=b;e<=y;e++)if(k[e]&&m[e]===c(e))return;v.completed.call(g)}}function c(e){return v.placeholder.charAt(e<v.placeholder.length?e:0)}function s(e){for(;++e<$&&!k[e];);return e}function l(e,t){var n,a;if(!(e<0)){for(n=e,a=s(t);n<$;n++)if(k[n]){if(!(a<$&&k[n].test(m[a])))break;m[n]=m[a],m[a]=c(a),a=s(a)}f(),g.caret(Math.max(b,e))}}function r(){h(),g.val()!=p&&g.change()}function u(e,t){for(var n=e;n<t&&n<$;n++)k[n]&&(m[n]=c(n))}function f(){g.val(m.join(""))}function h(e){for(var t,n=g.val(),a=-1,i=0,r=0;i<$;i++)if(k[i]){for(m[i]=c(i);r++<n.length;)if(t=n.charAt(r-1),k[i].test(t)){m[i]=t,a=i;break}if(r>n.length){u(i+1,$);break}}else m[i]===n.charAt(r)&&r++,i<_&&(a=i);return e?f():a+1<_?v.autoclear||m.join("")===d?(g.val()&&g.val(""),u(0,$)):f():(f(),g.val(g.val().substring(0,a+1))),_?i:b}var g=x(this),m=x.map(t.split(""),function(e,t){return"?"!=e?n[e]?c(t):e:void 0}),d=m.join(""),p=g.val();g.data(x.mask.dataName,function(){return x.map(m,function(e,t){return k[t]&&e!=c(t)?e:null}).join("")}),g.one("unmask",function(){g.off(".mask").removeData(x.mask.dataName)}).on("focus.mask",function(){var e;g.prop("readonly")||(clearTimeout(a),p=g.val(),e=h(),a=setTimeout(function(){g.get(0)===document.activeElement&&(f(),e==t.replace("?","").length?g.caret(0,e):g.caret(e))},10))}).on("blur.mask",r).on("keydown.mask",function(e){var t,n,a,i;g.prop("readonly")||(i=e.which||e.keyCode,R=g.val(),8===i||46===i||S&&127===i?(n=(t=g.caret()).begin,(a=t.end)-n==0&&(n=46!==i?function(e){for(;0<=--e&&!k[e];);return e}(n):a=s(n-1),a=46===i?s(a):a),u(n,a),l(n,a-1),e.preventDefault()):13===i?r.call(this,e):27===i&&(g.val(p),g.caret(0,h()),e.preventDefault()))}).on("keypress.mask",function(e){var t,n,a,i,r;g.prop("readonly")||(i=e.which||e.keyCode,r=g.caret(),e.ctrlKey||e.altKey||e.metaKey||i<32||!i||13===i||(r.end-r.begin!=0&&(u(r.begin,r.end),l(r.begin,r.end-1)),(t=s(r.begin-1))<$&&(n=String.fromCharCode(i),k[t].test(n))&&(function(e){for(var t,n,a=e,i=c(e);a<$;a++)if(k[a]){if(t=s(a),n=m[a],m[a]=i,!(t<$&&k[t].test(n)))break;i=n}}(t),m[t]=n,f(),a=s(t),j?setTimeout(function(){x.proxy(x.fn.caret,g,a)()},0):g.caret(a),r.begin<=y&&o()),e.preventDefault()))}).on("input.mask paste.mask",function(){g.prop("readonly")||setTimeout(function(){var e=h(!0);g.caret(e),o()},0)}),i&&j&&g.off("input.mask").on("input.mask",function(){var e=g.val(),t=g.caret();if(R&&R.length&&R.length>e.length){for(h(!0);0<t.begin&&!k[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<b&&!k[t.begin];)t.begin++;g.caret(t.begin,t.begin)}else{for(h(!0);t.begin<$&&!k[t.begin];)t.begin++;g.caret(t.begin,t.begin)}o()}),h()})}})}),$.fn.setCursorPosition=function(e){var t;$(this).get(0).setSelectionRange?$(this).get(0).setSelectionRange(e,e):$(this).get(0).createTextRange&&((t=$(this).get(0).createTextRange()).collapse(!0),t.moveEnd("character",e),t.moveStart("character",e),t.select())},$('input[type="tel"]').click(function(){"+7 (___) ___-__-__"==$(this).val()&&$(this).setCursorPosition(4)}),$('input[type="tel"]').keyup(function(){"+7 (8__) ___-__-__"==$(this).val()&&($(this).val($(this).val().replace("8","_")),$(this).mask("+7 (999) 999-99-99"),$(this).attr("placeholder","+7 (___) ___-__-__"),$(this).setCursorPosition(4))});


//E-mail Ajax Send
$("form").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: th.serialize()
  }).done(function() {
    
    $(".popup").removeClass("active");
    $("#popup-success").addClass("active");
    
    
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });  
  return false;
});

var files; // переменная. будет содержать данные файлов

  // заполняем переменную данными, при изменении значения поля file 
$('input[type=file]').on('change', function(element){
    if (element.target.value) {
      $(this).addClass('loaded')
    } else {
      $(this).removeClass('loaded');
    }

    $(this).nextAll(".file-text").html(this.files[0].name);
    
    var then = this;
    files = this.files;
    
    if ((this.files[0].size > (100 * 1024 * 1024))) {
      alert("Файл слишком большой! Максимальный размер файла должен быть 20Мб.");
      this.value = "";
      $(this).removeClass('loaded');
      return;
    };

    // ничего не делаем если files пустой
    if( typeof files == 'undefined' ) {
      console.log(0);
      return;
    }

    // создадим объект данных формы
    var data = new FormData();

    // заполняем объект данных файлами в подходящем для отправки формате
    $.each( files, function( key, value ){
      data.append( key, value );
    });

    // добавим переменную для идентификации запроса
    data.append( 'my_file_upload', 1 );

    // AJAX запрос
    $.ajax({
      url         : './submit.php',
      type        : 'POST', // важно!
      data        : data,
      cache       : false,
      dataType    : 'json',
      // отключаем обработку передаваемых данных, пусть передаются как есть
      processData : false,
      // отключаем установку заголовка типа запроса. Так jQuery скажет серверу что это строковой запрос
      contentType : false, 
      // функция успешного ответа сервера
      success     : function( respond, status, jqXHR ){

		
        if( typeof respond.error === 'undefined' ){
          // выведем пути загруженных файлов в блок '.ajax-reply'
          var files_path = respond.files;
          var html = '';
          $.each( files_path, function( key, val ){
            html += val + "<br>";
          } )

          // $('.ajax-reply').html( html );
          $(then).parents("form").find(".fileInputNames").val(html);
        }
        // ошибка
        else {
          console.log('ОШИБКА: ' + respond.error );
        }
      },
      // функция ошибки ответа сервера
      error: function( jqXHR, status, errorThrown ){
        console.log( 'ОШИБКА AJAX запроса: ' + status, jqXHR );
      }

    });
  });
  

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

  $(".js-getreview").on("click", function(){
    $("#popupReview").addClass("active");
  });
  $(".js-popup-close").on("click", function(){
    $(".popup2").removeClass("active");
  });


  $(".service").hover(function(){
    $(this).find(".service__text").slideToggle(200)
  });

  $('.js-reviews-slider').slick({
    adaptiveHeight: true,
    infinite: false,
    fade: true
  });
  $('.js-reviews-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var i = $('.review__photo[data-review=' + (nextSlide + 1) + ']').attr("data-photo");
    $('.review__photo[data-review=' + (nextSlide + 1) + ']').attr("data-photo", 6);
    $(".review__photo.active").attr("data-photo", i).removeClass("active");
    $('.review__photo[data-photo=6]').addClass("active");
  });

  $(".review__photo").on("click", function(){
    $('.js-reviews-slider').slick("slickGoTo", parseInt($(this).attr("data-review"))-1);
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
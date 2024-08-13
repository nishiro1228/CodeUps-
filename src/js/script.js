jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    // ハンバーガーメニュー
    $(".js-hamburger").click(function () {
        $(this).toggleClass("is-active");
        $(".js-drawer").fadeToggle();
    });
  
    // ページトップへ戻る
    $('.js-page-top').on("click", function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
    });
  
    // ドロワーナビのaタグをクリックで閉じる
    $(".js-drawer a[href]").on("click", function () {
        $(".js-hamburger").removeClass("is-active");
        $(".js-drawer").fadeOut();
    });
  
    // resizeイベント
    $(window).on('resize', function() {
        if (window.matchMedia("(min-width: 768px)").matches) {
            $(".js-hamburger").removeClass("is-active");
            $(".js-drawer").fadeOut();
        }
    });
  
    const swiper = new Swiper(".js-swiper1", {
      slidesPerView: 'auto', // または適切な数値を指定
      spaceBetween: 20, // または適切な間隔を指定
      loop: true,
      effect: "fade",
      speed: 3000,
      allowTouchMove: false,
    //   autoplay: {
    //     delay: 3000,
    //   },
    });
  
    const campaign_slideLength = document.querySelectorAll('.js-campaign-swiper .swiper-slide').length;
    $(window).resize(function () {
      campaign_arrow();
    });
    campaign_arrow();
  
    function campaign_arrow() {
      if (window.matchMedia('(max-width: 767px)').matches || campaign_slideLength <= 3) {
          $('.js-campaign-arrow').hide();
      } else {
          $('.js-campaign-arrow').show();
      }
    }
  
    // Swiper
    var campaign_swiper = new Swiper(".js-campaign-swiper", {
        loop: true,
        speed: 2000,
        slidesPerView: 1.5,
        spaceBetween: 20,
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3.5,
                spaceBetween: 40
            }
        },
        // autoplay: {
        //     delay: 3000,
        //   },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
  
    //要素の取得とスピードの設定
var box = $('.colorbox'),
speed = 700;  

//.colorboxの付いた全ての要素に対して下記の処理を行う
// box.each(function(){
// $(this).append('<div class="color"></div>')
// var color = $(this).find($('.color')),
// image = $(this).find('img');
// var counter = 0;

// image.css('opacity','0');
// color.css('width','0%');
// //inviewを使って背景色が画面に現れたら処理をする
// color.on('inview', function(){
//     if(counter == 0){
//      $(this).delay(200).animate({'width':'100%'},speed,function(){
//                image.css('opacity','1');
//                $(this).css({'left':'0' , 'right':'auto'});
//                $(this).animate({'width':'0%'},speed);
//             })
//         counter = 1;
//       }
//  });
// });
  
  });
  

  !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});
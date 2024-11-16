jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    // ハンバーガーメニュー
$(function () {
    $(".js-hamburger").click(function () {
        $(this).toggleClass("is-active__hamburger");
        $(".js-drawer").fadeToggle();

        // ハンバーガーメニューが開いたらヘッダーの背景色を緑に変更
        if ($(this).hasClass("is-active__hamburger")) {
            $("header").addClass("header-green");
        } else {
            $("header").removeClass("header-green");
        }

        // ドロワーが開いたときにスクロールをチェック
        checkDrawerHeight();
    });

    // ドロワーナビのaタグをクリックで閉じる
    $(".js-drawer a[href]").on("click", function () {
        $(".js-hamburger").removeClass("is-active__hamburger");
        $(".js-drawer").fadeOut();

        // ヘッダーの背景色を元に戻す
        $("header").removeClass("header-green");
    });

    // resizeイベント
    $(window).on('resize', function() {
        if (window.matchMedia("(min-width: 768px)").matches) {
            $(".js-hamburger").removeClass("is-active__hamburger");
            $(".js-drawer").fadeOut();

            // ヘッダーの背景色を元に戻す
            $("header").removeClass("header-green");
        }

        // リサイズ時に高さを再チェック
        checkDrawerHeight();
    });

    // ドロワーメニューのスクロールを無効化
function checkDrawerHeight() {
    if ($(".js-drawer").is(":visible")) {
        $(".js-drawer").css({
            "max-height": "100vh",
            "overflow-y": "hidden"  // スクロール無効化
        });
    }
}

    // ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
    $(".js-hamburger").click(function () {
  
      // 現在のbodyタグのoverflowスタイルを確認
      if ($("body").css("overflow") === "hidden") {
  
        // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
        $("body").css({ height: "", overflow: "" });
  
      } else {
  
        // そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
        $("body").css({ height: "100%", overflow: "hidden" });
  
      }
    });
});
    
    // ページトップへ戻る
    var pageTopBtn = $('.js-page-top');

    // スクロールイベントの監視
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 200) { // 200px以上スクロールしたら表示
        pageTopBtn.addClass('visible');
      } else {
        pageTopBtn.removeClass('visible');
      }
    });
  
    // ページトップへ戻る処理
    pageTopBtn.on('click', function () {
      $('body,html').animate({ scrollTop: 0 }, 500); // 500ミリ秒でスクロールトップ
      return false;
    });

    // タブ
    jQuery(function ($) {
      $('.js-tab-menu').on('click', function () {
          $('.js-tab-menu').removeClass('is-active__tab');
          $('.js-tab-content').removeClass('is-active__tab');
          $(this).addClass('is-active__tab');
          var number = $(this).data("number");
          $('#' + number).addClass('is-active__tab');
      });
  });

//   Informationタブ
$(document).ready(function () {
    // タブのボタンとコンテンツを取得
    const $tabButtons = $(".js-information-tab-menu");
    const $tabContents = $(".js-information-tab-content");
  
    // タブをアクティブ化する関数
    const activateTab = (tabName) => {
      $tabButtons.removeClass("is-active__information-tab");
      $tabContents.removeClass("is-active__information-tab");
  
      const $targetButton = $tabButtons.filter((_, btn) => $(`#${tabName}`).is($tabContents.eq($tabButtons.index(btn))));
      const $targetContent = $(`#${tabName}`);
  
      if ($targetButton.length && $targetContent.length) {
        $targetButton.addClass("is-active__information-tab");
        $targetContent.addClass("is-active__information-tab");
      }
    };
  
    // ページ読み込み時にURLのクエリパラメータを確認してタブを表示
    const tabParam = new URLSearchParams(window.location.search).get("tab");
    if (tabParam) {
      activateTab(tabParam);
    }
  
    // タブクリック時の処理
    $tabButtons.on("click", function () {
      const tabIndex = $tabButtons.index(this);
      $tabButtons.removeClass("is-active__information-tab");
      $tabContents.removeClass("is-active__information-tab");
  
      $(this).addClass("is-active__information-tab");
      $tabContents.eq(tabIndex).addClass("is-active__information-tab");
    });
  });



  // モーダル
  $(function () {
    const open = $(".js-modal-open"),
        close = $(".js-modal-close"),
        modals = $(".js-modal");
  
    // 開くボタンをクリックしたらモーダルを表示し、スクロールを無効にする
    open.on("click", function () {
        var target = $(this).data("target"); // モーダルのターゲットIDを取得
        var targetModal = document.getElementById(target); // ターゲットのモーダルを取得
        $(targetModal).addClass("is-open__about"); // モーダルを表示
        $("body").addClass("no-scroll"); // スクロールを無効にする
    });
  
    // 閉じるボタンをクリックしたらモーダルを閉じ、スクロールを有効に戻す
    close.on("click", function () {
        var target = $(this).data("target"); // モーダルのターゲットIDを取得
        var targetModal = document.getElementById(target); // ターゲットのモーダルを取得
        $(targetModal).removeClass("is-open__about"); // モーダルを閉じる
        $("body").removeClass("no-scroll"); // スクロールを有効にする
    });
  
    // モーダルの背景部分をクリックしたらモーダルを閉じ、スクロールを有効に戻す
    modals.on("click", function (e) {
        if (e.target === this) { // モーダルの背景部分をクリックした場合のみ
            $(this).removeClass("is-open__about"); // モーダルを閉じる
            $("body").removeClass("no-scroll"); // スクロールを有効にする
        }
    });
  });


jQuery(function ($) {
    $('.accordion__header:nth-child(1)').addClass('active-faq');
$('.accordion__content:nth-child(2)').css('display', 'block');
$('.accordion__header').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('active-faq');
});

    $('.js-faq-question').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('is-open__a');
    });
});


    const swiper = new Swiper(".js-mv-swiper", {
        slidesPerView: 'auto', // または適切な数値を指定
        spaceBetween: 20, // または適切な間隔を指定
        loop: true,
        effect: "fade",
        speed: 3000,
        allowTouchMove: false,
      autoplay: {
        delay: 3000,
      },
    });
  
    // Swiper
    var campaign_swiper = new Swiper(".js-campaign-swiper", {
        loop: true,
        speed: 1200, // スライドの移動速度を1.2秒に設定
        slidesPerView: "auto",
        spaceBetween: 20,
        breakpoints: {
            768: {
                spaceBetween: 40
            }
        },
        autoplay: {
            delay: 2500, // 自動再生の遅延時間を2.5秒に設定
            disableOnInteraction: false, // ユーザーの操作後も自動再生を継続
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
  
    //要素の取得とスピードの設定
var box = $('.colorbox'),
speed = 700;  

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
$(this).append('<div class="color"></div>')
var color = $(this).find($('.color')),
image = $(this).find('img');
var counter = 0;

image.css('opacity','0');
color.css('width','0%');
//inviewを使って背景色が画面に現れたら処理をする
color.on('inview', function(){
    if(counter == 0){
     $(this).delay(200).animate({'width':'100%'},speed,function(){
               image.css('opacity','1');
               $(this).css({'left':'0' , 'right':'auto'});
               $(this).animate({'width':'0%'},speed);
            })
        counter = 1;
      }
 });
});

  
  });
  

  !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});
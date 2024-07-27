
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
 // ハンバーガーメニュー
 $(function () {
  $(".js-hamburger").click(function () {
      $(this).toggleClass("is-active");
      $(".js-drawer").fadeToggle();
  });

  // ページトップへ戻る
   $('.js-page-top').on("click",function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
   });

  // ドロワーナビのaタグをクリックで閉じる
  $(".js-drawer a[href]").on("click", function () {
      $(".js-hamburger").removeClass(".is-active");
      $(".js-drawer").fadeOut();
  });

  // resizeイベント
  $(window).on('resize', function() {
      if (window.matchMedia("(min-width: 768px)").matches) {
          $(".js-hamburger").removeClass(".is-active");
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
    autoplay: {
      delay: 3000,
    },
  });
});

const campaign_slideLength = document.querySelectorAll('.js-campaign-swiper .swiper-slide').length
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
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            768: {
                slidesPerView: 3.5,
                spaceBetween: 40
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});


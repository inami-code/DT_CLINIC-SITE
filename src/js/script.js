
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // ------------------------------------
  // # ハンバーガーメニュー
  // ------------------------------------
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass("is-active")) {
      $(".js-hamburger").removeClass("is-active");
      $(".header").removeClass("is-active");
      $(".js-sp-nav").fadeOut(300);
    } else {
      $(".js-hamburger").addClass("is-active");
      $(".header").addClass("is-active");
      $(".js-sp-nav").fadeIn(300);
    }
  });

  // ------------------------------------
  // # swiper
  // ------------------------------------
  const swiper = new Swiper('.js-mv-swiper', {
    // Optional parameters
    loop: true,
    speed: 1500, //スライドの速度
    effect: 'fade',
    autoplay: {
      delay: 3000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// ------------------------------------
// # トップへ戻るボタン
// ------------------------------------
let topBtn = $(".to-top");
topBtn.hide();

// ボタンの表示設定
$(window).scroll(function () {
  if ($(this).scrollTop() > 70) {
    // 指定px以上のスクロールでボタンを表示
    topBtn.fadeIn();
  } else {
    // 画面が指定pxより上ならボタンを非表示
    topBtn.fadeOut();
  }
});

topBtn.click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    300,
    "linear"
  );
  return false;
});


});

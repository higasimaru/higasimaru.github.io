// PhotoSwipe
initPhotoSwipeFromDOM('.js-my-gallery');


$(function () {

  function rotation() {

    // Contactアイコン常時回転用関数
    $(this).rotate({
      angle: 0,
      animateTo: 360,
      callback: rotation,
      easing: function(x, t, b, c, d) {
        return c * (t/d) + b
      }
    })
  }

  //Worksのリンクを有効化
  //スライド（Swiper）内に記載のリンクを有効にするため下記の記述が必要 (;´･ω･)ｳｰﾝ･･･
  $(".works-url").on("click", "a", function (e) {
    e.stopPropagation();
  });


  //ページトップへもどる
  $('#js-page-top').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  //ページ内スクロール
  var $nav = $(".gnav");
  var offset = $nav.offset();
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  $('.contact-image').rotate({
    bind: {
      mouseover: function() {
        $(this).rotate({
          animateTo: 360
        });
      },
      mouseleave: function() {
        $(this).rotate({
          animateTo: 0
        });
      }
    }
  });

});

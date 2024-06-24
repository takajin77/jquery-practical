$(function () {
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });
  // about worksスクロール時に表示させる
    $(window).scroll(function () {
      // aboutはスクロールしたら表示
      $('#about').css('opacity', '1');
      // worksはある程度スクロールしたら表示
      if ($(this).scrollTop() > 500) {
        $('#works').css('opacity', '1');
      }
    });

  // worksにマウスカーソルを合わせると不透明にする
  $('.translucent').on('mouseover', function () {
    $(this).animate({ opacity: 0.5, }, 500);
  });
  $('.translucent').on('mouseout', function () {
    $(this).animate({ opacity: 1, }, 500);
  });

  // topボタンアニメーション
  // 画面を下げると表示する
  // 初期をdisplay:noneで非表示にしたいからdivで囲って親要素で表示非表示
  // fadeInを使うとdisplayがblockになって、flex要素が崩れた
  let pagetop = $('.to-top-page');
  let pagetopbtn=$('.topBtn')
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
      return false;
    }
  });
  // 子要素でボタンアニメーション
  pagetopbtn.mouseover(function () {
  $(this).animate({ opacity: 0.5, }, 500);
  });
  pagetopbtn.mouseout(function (){
  $(this).animate({ opacity: 1, }, 100);
  });
  pagetopbtn.click(function () {
    $('body, html').animate({ scrollTop: 0, }, 500);
  });

  // about、worksを押された時のアニメーション
  $('a[href^="#"]').click(function() {
    const speed = 500; // スクロール速度(ミリ秒)
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed,'swing');
    return false;
    });


  // モーダルで拡大表示
  $('.worksImg').on('click',function () {
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    $('body,html').css('overflow-y', 'hidden');
    return false
  });

  // 閉じるボタンクリックでモーダルを閉じる
  $('.close-btn').click(function() {
    $('.modal').fadeOut();
    $('body,html').css('overflow-y', 'visible');
    return false
  });


});


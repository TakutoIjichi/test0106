'use strict';

{

  // ハンバーガーメニュー

  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');


  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  })


  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  })

  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  })




  // アコーディオン

  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear')
    });
  });


  // スワイパー

  // 1. 変数mqlにMediaQueryListを格納
  const mql = window.matchMedia('(min-width: 800px)');
  
  // 2. メディアクエリに応じて実行したい処理を関数として定義
  const handleMediaQuery = function(mql) {
    if (mql.matches) {
      // 800px以上の場合の処理
      const swiper = new Swiper(".swiper", {
        slidesPerView: 5,
        loop: true,
        speed: 300,
        autoplay: {
          delay: 5000,
        },
      });      
    } else {
      // 800px未満の場合の処理
      const swiper = new Swiper(".swiper", {
        slidesPerView: 2,
        loop: true,
        speed: 300,
        autoplay: {
          delay: 5000,
        },
      });
  }
};

// 3. イベントリスナーを追加（メディアクエリの条件一致を監視）
mql.addListener(handleMediaQuery);

// 4. 初回チェックのため関数を一度実行
handleMediaQuery(mql);

  // お問い合わせ

  const consent_chk = document.querySelector(`#consent-chk`);
const submit_btn = document.querySelector(`input[type=submit]`);

consent_chk.addEventListener('change', () => {
  
  if (consent_chk.checked === true) {
    submit_btn.disabled = false;
  } else {
    submit_btn.disabled = true;
  }

});

}


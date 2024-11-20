//定数と変数の宣言
const btn_scroll=document.querySelector('#pagetop');
let scroll=0; //ページのスクロール量を保存する変数
const bg=document.querySelector('#bg');
const sec_01=document.querySelector("#sec_01");
const sec_01_y=sec_01.getBoundingClientRect().top;
const sec_02=document.querySelector("#sec_02"); // 見出し2番目
const sec_02_y=sec_02.getBoundingClientRect().top;
const sec_03=document.querySelector("#sec_03");
const sec_03_y=sec_03.getBoundingClientRect().top;
const sec_04=document.querySelector("#sec_04");
const sec_04_y=sec_04.getBoundingClientRect().top;

//ページトップボタンが押されたときの処理
btn_scroll.addEventListener('click',()=>{
    window.scroll({ 
        top: 0, 
        behavior: "smooth"
      });
});

// 画面がスクロールされたときの処理
document.addEventListener('scroll',()=>{
  scroll=window.scrollY; // スクロールするとscrollの量が増える（今の位置がわかる）
  console.log(scroll);
  if(scroll<1000){
    console.log("1000px以内だよ");
    bg.removeAttribute('class');
    bg.classList.add('bg_01');
  }
  if(scroll>1000){
    console.log("1000px以上だよ");
    bg.removeAttribute('class');
    bg.classList.add('bg_02');
  }
  if(scroll>2000){
    console.log("2000px以上だよ");
    bg.removeAttribute('class');
    bg.classList.add('bg_03');
  }
  if(scroll>3000){
    console.log("3000px以上だよ");
    bg.removeAttribute('class');
    bg.classList.add('bg_04');
  }
});
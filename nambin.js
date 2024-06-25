//ABOUT_SKU부분 슬라이더
document.addEventListener("DOMContentLoaded", ()=> {
    const ABOUT_SKU_img = document.querySelectorAll(".ABOUT_SKU_slide"); //이미지 슬라이드 부분
    let now_img = 0; //현재 이미지를 나타내주는 것

    const prevBtn = document.querySelector('.prev.slick-arrow'); //이전 버튼
    const stopBtn = document.querySelector('.stop.on'); //정지 버튼
    const nextBtn = document.querySelector('.next.slick-arrow'); //다음 버튼
    let stopimg; //이미지 정지를 위함

    function show(v){
        ABOUT_SKU_img.forEach((slide,i) =>{
            if(i === v) {slide.classList.add('active');
            // document.getElementById('ABOUT_SKU상황').innerText = `0${now_img+1}/06`
            // / 기준으로 서로 다른 색을 적용하기 위함
            document.getElementById('ABOUT_SKU상황').setAttribute('data-before', `0${now_img+1}`);
            document.getElementById('ABOUT_SKU상황').setAttribute('data-after', '/06');
           
        }else slide.classList.remove('active');
        })
    }

    if (prevBtn) {
              prevBtn.addEventListener('click', () => {
                now_img = (now_img - 1 + ABOUT_SKU_img.length) % ABOUT_SKU_img.length;
                show(now_img);
              })
            }
          
            if (stopBtn) {
              stopBtn.addEventListener('click', () => {
                clearInterval(stopimg);
                console.log('클릭됨')
              });
            }
          
            if (nextBtn) {
              nextBtn.addEventListener('click', () => {
              now_img = (now_img + 1 + ABOUT_SKU_img.length) % ABOUT_SKU_img.length;
              show(now_img)
              });
            }

    function next(){
        now_img = (now_img + 1) % ABOUT_SKU_img.length;
        show(now_img);
    }

    show(now_img)
    stopimg = setInterval(next,3000);
})


// 사이드 버튼 부분
document.addEventListener('DOMContentLoaded' , function() {
  const side_btn = document.querySelector('.side_btn'); // OPEN 버튼
  const close_btn = document.querySelector('.close_btn'); // CLOSE 버튼
  const click_side = document.querySelector('.click_side'); //오픈 후 div

  side_btn.addEventListener('click' , function(){
    console.log('오픈버튼 클릭됨');
    click_side.style.display='flex';
    close_btn.style.display='block';
    side_btn.style.display="none";
  });

  close_btn.addEventListener('click' , function(){
    console.log('닫는버튼 클릭됨');
    click_side.style.display='none';
    close_btn.style.display='none';
    side_btn.style.display='block';
  })
})
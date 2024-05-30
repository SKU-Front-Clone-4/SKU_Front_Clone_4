//첫번째 이미지 이미지 슬라이드 되는 부분

//DOMContentLoaded 이게 페이지가 로드되면 addEventListener가 발생하는 뜻
// document.addEventListener('DOMContentLoaded', () =>{
//     //모든 슬라이드(이미지) -> s
//     const s = document.querySelectorAll('.slide');
//     //현재 슬라이드는 기본적으로 0
//     let now_slide =0;
// })


//ABOUT_SKU부분 슬라이더
document.addEventListener("DOMContentLoaded", ()=> {
    const ABOUT_SKU_img = document.querySelectorAll(".ABOUT_SKU_slide");
    let now_img = 0;

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

    function next(){
        now_img = (now_img + 1) % ABOUT_SKU_img.length;
        show(now_img);
    }

    show(now_img)
    setInterval(next,3000);
})
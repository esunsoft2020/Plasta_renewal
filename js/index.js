let num=1;
function changeImage(){
    setTimeout(show ,2000);
}
function show(){
    let img1;
    let img2;
    switch(num){
        case 1:
            img1 = "./image/eun/top/top1_1.png";
            img2 = "./image/eun/top/top1_2.png";
            break;
        case 2:
            img1 = "./image/eun/top/top2_1.png";
            img2 = "./image/eun/top/top2_2.png";
            break;
    }
    num++;
    if(num>=3) num=1;
    // unfade(document.getElementById("leftImage"));
    document.getElementById("leftImage").src = img1;
    document.getElementById("rightImage").src = img2;
    
}

// fade 효과 적용 필요
function unfade(element) {
    let op = 0.7;  // initial opacity
    element.style.display = 'block';
    let timer = setTimeout(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + 100 + ")";
        op += op * 0.1;
    }, 2000);
}

function clickClose(){
  let pop = document.getElementById('pop');
  pop.style.display = "none";
  document.getElementById('video').src = "";

}



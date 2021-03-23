let num=1;
function changeImage(){
    setTimeout(show ,2000);
};

function show(){
    let img1;
    let img2;

    switch(num){
        case 1:
            img1 = "./image/top/top1_1.png";
            img2 = "./image/top/top1_2.png";
            break;
        case 2:
            img1 = "./image/top/top2_1.png";
            img2 = "./image/top/top2_2.png";
            break;
    }
    num++;
    if(num==3) num=1;
    document.getElementById('leftImage').src = img1;
    document.getElementById('rightImage').src = img2;
};  
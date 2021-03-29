function clickCart(){
    alert("상품을 장바구니에 담았습니다.");
}
function clickLike(){
    alert("회원 전용 서비스 입니다.");
}

let more = false;
function clickMore(){
    if(!more){
        document.getElementsByClassName("item2")[0].style.display="block";
        more=true;
    } else {
        alert("등록된 상품이 더 이상없습니다.");
    }
}

function clickLayout(e){

    if(innerWidth<800){
        if(e==document.getElementsByClassName("box1")[0]){
            alert("화면이 작아서 실행할 수 없습니다.");
        }else{
            alert("실행중입니다.")
        }
        
    }else {
        let box1 = document.getElementsByClassName("box1")[0];
        let box2 = document.getElementsByClassName("box2")[0];

        if(e==document.getElementsByClassName("box1")[0]){
            // box1 클릭
            box1.src = "./image/eun/classic/boxBlack.png";
            box2.src = "./image/eun/classic/menuGray.png"; 
       
            let items = document.getElementsByClassName("wrap");
            for(let i=0 ; i<items.length ; i++){
                items[i].style.width="10%";
            }
            
        }else{
            // box2 클릭
            box1.src = "./image/eun/classic/boxGray.png";
            box2.src = "./image/eun/classic/menuBlack.png"; 

            let items = document.getElementsByClassName("wrap");
            for(let i=0 ; i<items.length ; i++){
                items[i].style.width="24vw";
            }
        }

    }

}

// 상단바
let dropdown=false;

function ke_topba(){
    if(!dropdown){
        document.getElementById('abcd').style.marginBottom='140px';
        document.getElementById('ke_rl').style.display="block";
        dropdown=true;
    }else {
        document.getElementById('abcd').style.marginBottom='0px';
        document.getElementById('ke_rl').style.display="none";
        dropdown=false;
    }
}
function topba(){
    var e=document.getElementById('top').style.right='0';
}
function topbax(){
    var e=document.getElementById('top').style.right='-100%';
}
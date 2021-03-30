function topba(){
    var e=document.getElementById('top').style.right='0px';


}
function topbax(){
    var e=document.getElementById('top').style.right="-100%";


    }



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
    }}
// function selectAll(selectAll)  {
//     var cb1=document.getElementById('chk1_box');
//     var cb2=document.getElementById('chk2_box');

//     ch1.
//   }

//   function checkAll(){
//     if( $("#chkall_box").is(':checked') ){
//       $("input[name=checkbox]").prop("checked", true);
//     }else{
//       $("input[name=checkbox]").prop("checked", false);
//     }
// }
    var checkbox2=document.getElementById('chk2_box');
function checkAll(selectAll)  {
    const checkboxes = document.getElementsByName('chk');
    checkboxes.forEach((checkbox) => {checkbox.checked = selectAll.checked;})
  }
function success(){
    const checkboxes = document.getElementsByName('chk');
    // alert ('test');
    // if (){
    //     alert('true');
    //     }else{
    //       alert('false');
    //     } 

    open("./Sign_Up2.html");
}
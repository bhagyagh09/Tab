
function selectTab(evt,tabSelected) {
   //removeClass active
if(document.getElementsByClassName("active")){
   var removeAct = document.getElementsByClassName("active");
   console.log(removeAct);
   removeAct[0].className = removeAct[0].className.replace(" active","");
   console.log(removeAct[0]);
}
//Toggle content
if(tabSelected){
var tabContent = document.getElementsByClassName("tabContent"); 
   for(var i=0;i<tabContent.length;i++) {
    document.getElementsByClassName("tabContent")[i].style.display = "none";
   }
   document.getElementById(tabSelected).style.display = "block";
}
   console.log(evt.currentTarget.className += " active")  ;

}

function docLoaded() {
   document.getElementById("defaultTab").click();
}


var panel1Data = [
    {desc: "<p>Snowboarding</p>"},
    {desc: "<p>Fitness</p>"},
    {desc: "<p>Running</p>"},
    {desc: "<p>Cycling</p>"},
    {desc: "<p>Golf</p>"},
    {desc: "<p>Tennis</p>"},
    {desc: "<p>Bandminton</p>"},
 ] 

 function loadTextAboutMe(){
     var panelDisplay = document.getElementsByClassName("panel1");
         for (var i = 0; i < panel1Data.length; i++){
             panel= panel1Data[i].desc;
          panelDisplay.innerHTML+= panel;
        }
 }

 window.onload = function(){
    var panelDisplay = document.getElementsByClassName("panel1");
    for (var i = 0; i < panel1Data.length; i++){
        panel= panel1Data[i].desc;
     panelDisplay.innerHTML+= panel;
   }
};
let texts=document.getElementById("text");
texts.addEventListener('input',function()
{
 let areas=this.value;  
 let char=areas.length;   
 document.getElementById("char").innerHTML=char;
  
   areas=areas.trim();

// split function (String)

let word=areas.split(" ");
let space=word.filter(function( elm)
{
    return elm!="";

});
let count=space.length;
document.getElementById("word").innerHTML=count;


});
var gb =12;
console.log(gb);
var x = function(){
   var gb = 5;
   console.log("Inside x gb :  "+gb);

   y();
}
function y(){
    console.log("Inside y gb :  "+gb);
}
x();
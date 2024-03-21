// get elements

let count = 0;
var btn  = document.getElementById("cBtn");
var dBtn  = document.getElementById("cBtn2");
var rstBtn = document.getElementById("restBtn");
var display = document.querySelector("#display");




// counter button 
btn.addEventListener("click",function(){
    count = count +1;
    display.innerHTML = count;
    console.log(count);
  


})



// counter back button 
dBtn.addEventListener("click", function(){
    display.innerHTML = count;
    console.log(count);
    if(count > 0){
       count = count - 1; 
     }
     else{
        count = 0;
     }  
})


// reset button 
rstBtn.addEventListener("click", function(){
   count = 0;
    display.innerHTML = count;
    console.log(count);


  
});





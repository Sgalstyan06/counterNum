let result = document.querySelector(".result").innerHTML;

let decrease = document.querySelector(".LowerNumber");
let increase = document.querySelector(".IncreaseNumber");
decrease.addEventListener("click",function(){
  
   document.querySelector(".result").innerHTML = --result;
})

increase.addEventListener("click",function(){
   

   document.querySelector(".result").innerHTML = ++result;
})


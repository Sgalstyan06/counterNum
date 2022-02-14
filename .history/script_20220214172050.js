let result = document.querySelector(".result").innerHTML;
console.log(result);
//let res = result.innerHTML;
console.log(result);

let decrease = document.querySelector(".LowerNumber");
let increase = document.querySelector(".IncreaseNumber");
decrease.addEventListener("click",function(){
  
   document.querySelector(".result").innerHTML = --result;
})

increase.addEventListener("click",function(){
   

   document.querySelector(".result").innerHTML = ++result;
})


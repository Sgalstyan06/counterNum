let result = +document.querySelector(".result");
let decrease = document.querySelector(".LowerNumber");
let increase = document.querySelector(".IncreaseNumber");
decrease.addEventListener("click",function(){
   // result--;
   console.log(result)
    result.innerHTML = --result;
})

increase.addEventListener("click",function(){
   // result++;
    result.innerHTML = ++result;
})


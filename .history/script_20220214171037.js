let result = document.querySelector(".result");
re
let decrease = document.querySelector(".LowerNumber");
let increase = document.querySelector(".IncreaseNumber");
decrease.addEventListener("click",function(){
   // result--;
   console.log(result);
    result.innerHTML = --result;
})

increase.addEventListener("click",function(){
   // result++;
   console.log(result);

    result.innerHTML = ++result;
})


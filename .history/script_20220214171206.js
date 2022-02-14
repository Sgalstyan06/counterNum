let result = document.querySelector(".result");

result = 0;
let decrease = document.querySelector(".LowerNumber");
let increase = document.querySelector(".IncreaseNumber");
decrease.addEventListener("click",function(){
   // result--;
   console.log(result);
    result.innerHTML = 
    --result;
})

increase.addEventListener("click",function(){
   // result++;
   console.log(result);

    result.innerHTML = ++result;
})


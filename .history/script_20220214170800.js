let result = document.querySelector(".result");
let decrease = document.querySelector(".LowerNumber");
let increase = document.querySelector(".IncreaseNumber");
decrease.addEventListener("click",function(){
    result--;
    result.insertAdjacentHTML("afterbegin",result);
})

increase.addEventListener("click",function(){
    result++;
    result.innerHTML = ++result;
})


let result = document.querySelector(".result");
let decrease = document.querySelector(".LowerNumber");
let increase = document.querySelector(".IncreaseNumber");
decrease.addEventListener("click",function(){
    result--;
    result.insertAdjacentHTML("afterbegin",re);
})

increase.addEventListener("click",function(){
    
    result.insertAdjacentHTML("afterbegin",++result);
})


let result = document.querySelector(".result").innerHTML;

let decrease = document.querySelector(".LowerNumber");
let increase = document.querySelector(".IncreaseNumber");
decrease.addEventListener("click", function () {
  document.querySelector(".result").innerHTML = --result;
});

increase.addEventListener("click", function () {
  document.querySelector(".result").innerHTML = ++result;
});

let inp1 = document.querySelector(".input1");
let inp2 = document.querySelector(".input2");
let resultSum = document.querySelector(".resultOfSum");

let sumBtn = document.querySelector(".sum");
 sumBtn.addEventListener("click",function(){
    let arg1 = +inp1.value;
    let arg2 = +inp2.value
    resultSum.value = arg1 + arg2;
   console.log(inp1.value);
   
})


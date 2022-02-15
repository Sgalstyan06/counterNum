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

sumBtn.addEventListener("click", function () {
  let arg1 = +inp1.value;
  let arg2 = +inp2.value;
  function sum(a) {
    return function (b) {
      return a + b;
    }
  }  
  resultSum.value = sum(arg1)(arg2);
});

let setIntervalId;
let date = 1;
let showt = 0;
function fntime(){ 
  showTime.innerHTML=date ;
 showt =  document.querySelector(".showTime").innerHTML;
  date = Number(showt)+1;
  
}
let showTime = document.querySelector(".showTime");
let starttimer = document.querySelector(".starttime");
let endttimer = document.querySelector(".endtime");


starttimer.addEventListener("click",function(){
  setIntervalId =  setInterval(fntime,1000);
  
})
endttimer.addEventListener("click",function(){
  clearInterval(setIntervalId);
  showTime.innerHTML = 0;
  date = 0;
})



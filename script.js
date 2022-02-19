function Sum() {
  let res = 0;
  this.getUp = function () {
    return ++res;
   
  };
  this.getDown = function () {
    return --res;
    
  };
}

let chaenResNumber = new Sum();

let result = document.querySelector(".result");

let decrease = document.querySelector(".LowerNumber");
let increase = document.querySelector(".IncreaseNumber");

decrease.addEventListener("click", function () {
  result.innerHTML = chaenResNumber.getDown();
});

increase.addEventListener("click", function () {
  result.innerHTML = chaenResNumber.getUp();
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
    };
  }
  resultSum.value = sum(arg1)(arg2);
});

let setIntervalId;
let date = 1;
let showt = 0;
function fntime() {
  showTime.innerHTML = date;
  showt = document.querySelector(".showTime").innerHTML;
  date = Number(showt) + 1;
}
let showTime = document.querySelector(".showTime");
let starttimer = document.querySelector(".starttime");
let endttimer = document.querySelector(".endtime");

starttimer.addEventListener("click", function () {
  setIntervalId = setInterval(fntime, 1000);
});
endttimer.addEventListener("click", function () {
  clearInterval(setIntervalId);
  showTime.innerHTML = 0;
  date = 0;
});

let febonaci = document.querySelector(".febonacci");
let febbtn = document.querySelector(".febbtn");
let a = 1;
let fib1 = 1;
let fib2 = 1;
let fibres = 1;
febbtn.addEventListener("click", function () {
  //fibonachi with recursion
  function rec(a) {
    if (a === 1 || a === 2) return 1;
    return rec(a - 2) + rec(a - 1);
  }
  febonaci.innerHTML += rec(fibres) + ", ";
  fibres++;

  //simply method febonacci
  //  if(a===1 || a===2){
  //   febonaci.innerHTML += fibres+", ";
  //  }else {
  //    fibres = fib1 + fib2;
  //    febonaci.innerHTML += fibres +",  ";
  //    fib1 = fib2;
  //    fib2 = fibres;
  //  }
  //  a++;
});

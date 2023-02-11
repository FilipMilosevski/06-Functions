// let arr = ["filip","martin","stefan"]
// arr.forEach(e => console.log("HI",e))


// let spread = ["so","much","fun"]
// let message = ["javascript","is",...spread,"and","very","powerful"]
// console.log(message);


//////////////////////////6.4
// let resarr = []
// for (let i = 0; i <10; i++) {
//   let arg1 = i*5;
//   let arg2 = i*i;
//   let res = add(arg1,arg2);
//   resarr.push(res)
// }

// function add(par1,par2) {
//   return par1+par2;

// }

// console.log(resarr);




// function local() {
//   if (true) {
//     var x = "local"
//   console.log(x);
//   }
// }
// console.log(local());


// (function () {console.log("F   I   L   I   P")})();


//////////////////////////6.5
// let f = "1000";
// console.log(f);
// (function ()   {
//   let f = "Local 1000"
// })();

// let res = (function () {
//   let f = "Return local 1000";
//   return f;
// })()

// console.log(res);
// console.log(f);

// (function (par1) {
//   f=par1;
//   ///let f = par1;
// })("Global 1000")
// console.log(f);



// function logrecursive(nr) {
//   console.log("Started function:",nr);
//   if (nr>0) {
//    logrecursive(nr-1); 
//   } else {
//       console.log("Done with recursion");
//   }
//     console.log("Ended Recursion:",nr);
// }
// logrecursive(5)




//////////////////////////6.6
// function factorial(num) {
//   if (num===0) {
//     return 1;
//   }
//   return num * factorial(--num)
// }

// console.log(factorial(5))




// function factorial(n) {
//   if (n===0){
//     return 1;
//   }
//   return n*factorial(--n)
// }
// console.log(factorial(5));

// function factorial(n) {
//   if (n===0) {
//     return 1;
//   }  
//   return n*factorial(--n)
// }
// console.log(factorial(5));


//////////////////////// 6.7

// let start = 10;
// function countdown(countdownvalue) {
//   console.log(countdownvalue);
//   if(countdownvalue<1){
//     return;
//   }
//   else {
//     countdown(--countdownvalue)
//     // countdown(countdownvalue-1)

//   }
// }
// countdown(start)





///// i do 10




//////////////////////6.8


// let fm = function () {
//   console.log("filip");
// }
// fm()

// [1,2,3].forEach(element => {
//   console.log(element);
// });





//////////
// let filip = function (proba) {
// console.log(proba);}
// filip("TEST")

// filip("test")


// function pro(proba) {
//   console.log(proba);
// }
// console.log("FILIP");


// function flex(pr) {
//   pr("f i l i p")
//   console.log("TEST");
// }
// flex(filip)
/////////////// 



// let logname = function () {
//   console.log("MY name is FILIP");
// }
// setTimeout(logname,1000)


// setInterval(()=>console.log())

//////////////////////////////////////



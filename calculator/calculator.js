
// let num1 = 10;
// let num2 = 5;
// let operator = "+";
// function calculator(n1,n2,op) {
//   let res;
//   console.log(n1);
//   console.log(n2);
//   console.log(op);

//   switch (op) {
//     case "-":
//       res=n1-n2;
//       break;
//     case "+":
//       res=n1+n2;
//       break;
//     case "*":
//       res=n1*n2;
//       break;
//     case "/":
//       res=n1/n2;
//       break;
//     default:
//       res=n1+n2;
//       break;
//   }
//   return res;
// }
// let res = calculator(5,3,"+")
// console.log(res);


/////////////////////moj primer 
// function calculator() {
//   let n1 = parseInt(prompt("Enter the first number"));
//   let n2 = parseInt(prompt("Enter the second number"));
//   let op = prompt("Enter a operator: +,-,/,*");
//   console.log(n1);
//   console.log(n2);
//   console.log(op);
//   switch (op) {
//     case "-":
//       console.log(n1 - n2);
//       break;
//     case "+":
//       console.log(n1 + n2);
//       break;
//     case "*":
//       console.log(n1 * n2);
//       break;
//     case "/":
//       console.log(n1 / n2);
//       break;
//     default:
//       console.log(n1 + n2);
//       break;
//   }
// }
// calculator();


// let num1 =11;
// let num2 = 2;
// let operator="-";

// function calculator (n1,n2,op){
//   let res;
//   console.log(n1);
//   console.log(n2);
//   console.log(op);
//   switch (op) {
//     case "-":
//       res=n1-n2;
//       break;
//     case "+":
//       res=n1+n2;
//       break; 
//     case "*":
//       res=n1*n2;
//       break;
//     case "/":
//       res=n1/n2;
//       break;     
//     default:
//       res=n1+n2;
//       break;
//   }

//   return res;
// }
// let res = calculator(num1,num2,operator)
// console.log(res);



// function calculator() {
//   let n1 = parseInt(prompt("Enter the first number"));
//   let n2 = parseInt(prompt("Enter the second number"));
//   let op = prompt("Enter a operator: +,-,/,*");
//   switch (op) {
//     case "-":
//       console.log(n1 - n2);
//       break;
//     case "+":
//       console.log(n1 + n2);
//       break;
//     case "*":
//       console.log(n1 * n2);
//       break;
//     case "/":
//       console.log(n1 / n2);
//       break;
//     default:
//       console.log(n1 + n2);
//       break;
//   }
// }
// calculator();


///////////////
//  function calculator() {
//   let n1 = parseInt(prompt("ENTER FIRST NUMBER"))
//   let n2 = parseInt(prompt("ENTER SECOND NUMBER"))
//   let op = prompt("YOU CAN USE + , - , / OR *")
//   console.log(n1);
//   console.log(n2);
//   console.log(op);
//   switch (op) {
//     case "+":
//       console.log(n1+n2);
//       break;
//     case "-":
//       console.log(n1-n2);
//       break;
//     case "/":
//       console.log(n1/n2);
//       break;
//     case "*":
//       console.log(n1*n2);
//       break;
  
//     default:
//       console.log(n1+n2);
//       break;
//   }


//  }

//  calculator()



// function prv(n1,n2) {
//   let res = n1+n2;
//   return res; 
// }
// let res1 = prv(10,0)
// console.log(res1);
// let res11 = console.log(prv(10,1));
// console.log(prv(10,2));


// let vtor = function (n1,n2) {
//   let res = n1+n2;
//   return res;
// }
// let res2 = vtor(20,0)
// console.log(res2);
// let res22 = console.log(vtor(20,1));
// console.log(vtor(20,2));


// let tret = (n1,n2) => n1+n2;
// console.log(tret(30,1));


// [1,2,3,4,5].forEach(element => {
//   console.log(element);
// });


// let r = () => {console.log("TEST");}
// r()

// let add = (x,y) => {console.log(x+y)}
// add(50,1)


console.log(Math.floor(Math.random()*3+1));
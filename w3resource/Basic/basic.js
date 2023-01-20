// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
/// alt + z za dobar format

// let datum = new Date();
// console.log(datum);


// let denovi = ["Nedela","Ponedelnik","Vtornik","Sreda","Cetvrtok","Petok","Sabota"]
// console.log(new Date().getDay());

// console.log(`Today is: ${denovi[2]}`);


// let indexzaden = new Date().getDay();
// console.log(`Denes e : ${denovi[indexzaden]}`);


// let datum = new Date();
// console.log(datum);

// let saat = datum.getHours()
// let minuti = datum.getMinutes()
// let sekundi = datum.getSeconds();
// console.log(`Momentalnoto vreme e : ${saat}:${minuti}:${sekundi}`);

// let saatnov;
// let ampm;
// if (saat>12) {
//   saatnov = saat - 12;
//   ampm = "PM"
// } else {
//   saatnov = saat
//   ampm = "AM"
// }
// console.log(`Momentalnoto vreme e :  ${saatnov} ${ampm}:${minuti}:${sekundi}`);



///   2. Write a Javascript function that reverse a number.
//  example x = 32243;
// expected output : 34223

// let x = 32243; 
// let stringofx = x.toString()   ///broj vo string
// let arrayofx = stringofx.split("")   /// brojot koj e vo string da se podelat broevite

// console.log(arrayofx);

// let revarr = arrayofx.reverse()
// console.log(revarr);

// let joinarr = revarr.join("")
// console.log(joinarr);
// console.log(typeof joinarr);
// let revx = parseInt(joinarr)
// console.log(revx);
// console.log(typeof revx);



// function reversenumber(x) {
//   let stringofx = x.toString()   ///broj vo string
//   let arrayofx = stringofx.split("")
//   let revarr = arrayofx.reverse() 
//   let joinarr = revarr.join("")
//   return parseInt(joinarr)


// }
// console.log(reversenumber(322423));
// console.log(reversenumber(345652));
// console.log(reversenumber(123456));

                                     ///// VO EDNA LINIJA
// function ReverseNumber2(x) {
//   let y = x.toString().split("").reverse().join("");
//   return parseInt(y);
// }
// console.log(ReverseNumber2(1234));



///// CONDITIONAL STATEMENTS AND LOOPS  3. Write a Javascript program that accept 
/// tho integers and display the larger.
// let a = 5;
// let b =3;
// if (a>b) {
//   console.log(a + " is larger than "+b);
// } else if (b>a) {
//   console.log(b + " is larger than "+a);
// } else {
//   console.log("The numbers are equal.");
// }



/////   4. Write a Javascript conditional statement to find the sign of product
/// of three products
/// sample numbers : 3, -7 , 2
/// output : the sign is -

// let a =3;
// let b = -7;
// let c = 2;
// let product = a+b+c;
// if (product>0) {
//   console.log("The sign is +");
// } else {
//   console.log("The sign is -");
// }



////////////////////////////////?????????????
// var x,y,chr;
// for(x=1; x <=6; x++)
// {
//    for (y=1; y < x; y++)
//      {
//     chr=chr+("*");        
//       }
//  console.log(chr);
//  chr='';    
// }






////////////////////////////////////MATH  5. Write a Javascript function to calculate
/// the sum of values in an array.
// function sum(arr) {
//   let sumofarr=0;
//   for (const element of arr) {
//     if(!isNaN(element)){
//       sumofarr+=element;
//     }
//   }

//   return sumofarr;
// }
// console.log(sum([1,2,3]));
// console.log(sum([100,-200,3]));
// console.log(sum([1,2,'a',3]));





function draw() 
{
  var canvas = document.getElementById('canvas');
  if (canvas.getContext)
  {
    var context = canvas.getContext('2d');
    context.beginPath();
   // Outer circle
    context.arc(75,75,50,0,Math.PI*2,true);
    context.moveTo(110,75);
    // Mouth 
    context.arc(75,75,35,0,Math.PI,false); 
    // Lefy and Right eye
    context.moveTo(55,65);
    context.arc(60,65,7,0,Math.PI*2,true); 
    context.arc(90,65,7,0,Math.PI*2,true);
    context.stroke();
  }
}



///////////////////  6. Write a Javascript function to check whether an "input" is an array or not.
///test data :
///console.log(is_array("w3resource"))
///console.log(is_array([1,2,3,4,5]))

// function is_array(arr) {
//   let isarr=false;
//   if (Array.isArray(arr)) {
//     isarr=true;
//   }
  

//   return isarr;
// }
// console.log(is_array('w3resource'));
// console.log(is_array([1,2,3,4,5]));

// let arr = [1,"f",new Date()];
// console.log(typeof arr === typeof[])
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof arr === typeof{name:"Filip"});





/////////////////////////////////////// 7. Write a Javascript function to convert string in
/// abbreviated form.
/// test date: console.log(abbrev_name("Robin Singh"))

// let fm = prompt("enter name")
// let fm = "Robin Singh"  
// let splitname = fm.split(" ")
// console.log(splitname);
// console.log(splitname[0]+ " " +splitname[1][0]+".");


// function abbrev_name(fullname) {
//   let abbrevname = "";
//   let splitname = fullname.split(" ")
//   abbrevname = splitname[0]+ " " +splitname[1][0]+"."


//   return abbrevname;
// }
// console.log(abbrev_name("Robin Sighn"));
// console.log(abbrev_name(prompt("ENTER A NAME")));




// https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php






// function fibonacci(n) {
//   let n1=0;
//   let n2=1;
//   let n3;
//   let count=2;
//   console.log(n1);
//   console.log(n2);
//   while (count<n) {
//     n3=n1+n2;
//     console.log(n3);
//     n1=n2;
//     n2=n3;
//     count++
//   }

// }
// let n1 = parseInt(prompt("ENTER A NUMBER: "))
// fibonacci(n1)




// function calculator() {
//   let n1= parseInt(prompt("ENTER A NUMBER"))
//   let n2= parseInt(prompt("ENTER A NUMBER"))
//   let op = prompt("ENTER OPERATOR")
//   console.log(n1);
//   console.log(op);
//   console.log(n2);
//   switch (op) {
//     case "+":
//       console.log(n1+n2);
//       break;
//     case "-":
//       console.log(n1-n2);
//       break;
//     case "*":
//       console.log(n1*n2);
//       break;
//     case "/":
//       console.log(n1/n2);
//       break;

  
//     default:
//       console.log(n1+n2);
//       break;
//   }
// }
// calculator()
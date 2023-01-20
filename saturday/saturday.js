//////////////////////////////1     
// function hi() {
//   console.log("HELLO WORLD 1");
// }
// hi()
// function hi1() {
//   let h = "HELLO WORLD 2";
//   console.log(h);
// }
// hi1()


//////////////////////////////2



////////////////////////////////3 broj na kvadrat
// function sqr (num) {
//   console.log(num*num);
// }
// sqr(8)



////////////////////////////////4 celsius to fahrenheit
// function celtofar (num) {
//   let far = 1.8;
//   console.log(num*far+32);
// }
// celtofar(40)

// function celtofar(num) {
//   let far = 1.8
//   console.log(num*far+32);
  
// } 
// celtofar(30)



//////////////////////////////5  povrsina na pravoagolnik
// function rectangle(a,b) {
//   return console.log("THE AREA OF RECTANGLE IS: "+ a*b);
// }
// console.log(rectangle(5,6));


//////////////////////////////6 perimetar 
// function circle(rad) {
//   return console.log(`Perimeter: ${2*Math.PI * rad}, Area: ${Math.PI *rad*rad}`)  
// }
// circle(4)



///////////////////////////////7 kamatna stapka
// function inter(principle,rate,time) {
//      let final = (principle*time*rate)/100;
//      return console.log(final)
// }
//      inter(2000,3,2)




///////////////////////8 random broj vo funkcija
// function ranum() {
//   let r = Math.floor(Math.random()*5)
//   console.log(r);
// }
// ranum()
// function getran(start,end) {
//   return Math.floor(Math.random()*end)+start;
// }
// console.log(getran(1,6));


// function ranum() {
//   let r = Math.floor(Math.random()*5)
//   console.log(r);
// }
// ranum()



// function genRandom(start, end) {
//    return Math.floor(Math.random() * end) + start;
// }

//  console.log(genRandom(1, 6));

;



/////////////////////9 printaj paren broj od arayot
// function printeven (arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       console.log(arr[i]);
//     }   
//   }
// }
// let arr1 = [13,23,12,45,22,48,66,100];
// printeven(arr1)





//////////////////////10 ostatok od brojot koj se deli
// function digitsum(num) {
//   let sum = 0;
//   while (num !=0) {
//     sum+= num != 0;
//     num=Math.floor(num/10)
//   }
//   return sum;
// }
// console.log(digitsum(43675));




//////////////////////////11 fibonachi
// function fibonacci(n) {
//   let n1=0;
//   let n2=1;
//   let count = 2;
//   let n3;
//   console.log(n1);
//   console.log(n2);
//   while (count<n) {
//     n3 = n1+n2;
//     console.log(n3);
//     n1=n2;
//     n2=n3;
//     count++
//   }
// }
// n1 = parseInt(prompt("ENTER A NUMBER"))
// fibonacci(n1)






////////////////////////////12


// let arr = ["Australia", "Germany", "Ghana"]
// function longest(arr) {
//   let long = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (long.length <element.length){
//       long = element;
//     }
//   } 
//   return long;
// }
// console.log(longest(arr));






///////////////////////13 broj pogolem pomal ili ednakov


// function greles(x,y,z) {
//   return (
//     (x >=20 && (x < y || x < z)) ||
//     (y >=20 && (y < x || y < z)) ||
//     (z >=20 && (z < y || z < x))
//   )
// }
// console.log(greles (23,45,10));
// console.log(greles (23,23,10));
// console.log(greles (21,66,75));




// function gre(x,y,z) {
//   if (x>=20 && (x<y || x<z)){
//     return true;
//   }
//   if (y>=20 && (y<x || y<z)){
//     return true;
//   }
//   if (z>=20 && (z<y || z<x)){
//     return true;
//   }
//   return false;
// }
// console.log(gre(20,30,60));


// function gre(x,y,z) {
//   if ((x>=20 && (x<y || x<z)) || (y>=20 && (y<x || y<z))|| (z>=20 && (z<y || z<x))){
  
//   console.log("USLOVOT E TOCEN");
// } else {
//   console.log("USLOVOT NE E IZVRSEN");
// }
// }
// gre(23,45,10)
// gre(23,23,10)
// gre(21,66,75)


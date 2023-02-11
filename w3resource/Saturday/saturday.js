/////1.Calculate age in year, month and days

// let dob = new Date("27 September 1994");
// //varijabla so datumot na ragjanje
// let dobYear = dob.getYear();
// //varijabla so koja se dava godinata na ragjanje
// let dobMonth = dob.getMonth();
// //varijabla so koja se dava mesecot na ragjanje
// let dobDate = dob.getDate();
// //varijabla so koja se dava denot na ragjanje
// let now = new Date();
// //varijabla so koja se dava momentalniot datum
// let currentYear = now.getYear();
// //varijabla so koja se dava momentalnata godina
// let currentMonth = now.getMonth();
// //varijabla so koja se dava momentalniot godinamesec
// let curentDate = now.getDate();
// //varijabla so koja se dava momentalniot den
// let age = currentYear - dobYear;
// //razlika pomegju momentalnata godina i godinata na ragjanje;
// let monthAge;
// let ageDate;
// //deklairaranje na varijabli so cel nivna ponatamoshna upotreba
// if (currentMonth >= dobMonth) {
//   monthAge = currentMonth - dobMonth;
// } else {
//   age--;
//   monthAge = 12 + currentMonth - dobMonth;
// }
// //(Objasnuvanje dokolku momentalniot mesec e pogolem ili
// //ednakov na mesecot na ragjanje premsetaj razlika pomegju niv
// //ili namalija vrednosta na age i vrednosta na month age kje bide 12 plus razlikata od momentalniot
// //mesec i mesecot na ragjanje koja bi bil vo sluchajot negativna vrednost)
// if (curentDate >= dobDate) {
//   ageDate = curentDate - dobDate;
// } else {
//   ageDate = 31 + curentDate - dobDate;
// }
// //(Objasnuvanje dokolku momentalniot datum e pogolem ili
// //ednakov na datumot na ragjanje premsetaj razlika pomegju niv
// //ili ageDate kje bide 31 plus razlikata od momentalniot
// //datum i datumot na ragjanje koja bi bil vo sluchajot negativna vrednost)
// console.log(
//   `You are ${age} years and ${monthAge} moths and ${ageDate} days old`
// );


// function getAge(date) {
//   let today = new Date();
//   let birthDate = new Date(date);
//   let age = today.getFullYear() - birthDate.getFullYear();
//   let month = today.getMonth() - birthDate.getMonth();
//   if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()));
//   age--;
//   return age;
// }
// console.log(getAge("2002 / 03 / 03"));




/////////////////////////////////////////// 2 Write a Javasrcipt to capitalize the first 
/// letter of each word of a given string.

// function capital_letter(str) {
// str = str.split(" ");
// for (let i = 0, x = str.length; i < x; i++) {
//   str[i] = str[i][0].toUpperCase() + str[i].substr(1);
 
// }
// return str.join(" ");
// }
// console.log(
// capital_letter( 'filip milosevski'));
// console.log(capital_letter("filip milosevski sport trcanje"));




/////////////////////////////////// 3. Create a Javscript code co check whether a string
/// starts with "JAVA"

// function start_spec_str(str) {
//   if (str.length <4) {
//     return false;
//   }
//   front = str.substring(0,4);
//   if (front.toUpperCase() == "JAVA") {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(start_spec_str("JavAscript"));




// function start(str) {
//   if (str.length <4) {
//     return false
//   }
//   front = str.substring(0,4)
//   if (front.toUpperCase()=="JAVA"){
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(start(prompt()));


/////////////////////////////////////// 4. Product positive or negative

// let a = 5;
// let b = 20;
// let c = 2;
// let product = a*b*c;
// if (product<0) {
//   console.log("Negative");
// } else {
//   console.log("Positive");
// }



///////////////////////////////////// 5. Prosecni vrednosti
// let students = [
//   ["David", 80],
//   ["Vinoth", 77],
//   ["Divya", 88],
//   ["Ishitha", 95],
//   ["Thomas", 68],
  
// ];
// //Davame array so iminija i vrenosti
// let Avgmarks = 0;
// //deklariame varijabla za Avgmarks so vrednost nula
// var avg;
// //deklariram varihabla avg za da ja iskoristime ponatamu
// for (let i = 0; i < students.length; i++) {
//   Avgmarks += students[i][1];
//   var avg = Avgmarks / students.length;
// }
// //for loop kade so Avgmarks += students[i][1] se sobiraat site vrednost od arajot
// console.log("Average grade: " + Avgmarks / students.length);
// //consol log kade se deli vkupnata brojka so brojot na studenti
// if (avg < 60) {
//   console.log("Grade : F");
// } else if (avg < 70) {
//   console.log("Grade : D");
// } else if (avg < 80) {
//   console.log("Grade : C");
// } else if (avg < 90) {
//   console.log("Grade : B");
// } else if (avg < 100) {
//   console.log("Grade : A");
// }


//////////////////////////////////////// 6. Reverse order na bukvi 

// function ReverseNumber3(x) {
//   let y = x.toString().split("").reverse().join("");
//   return parseInt(y);
// }
// console.log(ReverseNumber3(1234));

// function ReverseNumber2(x) {
//   let y = x.toString().split("").reverse().join("");
//   return (y);
// }
// console.log(ReverseNumber2("FILIP"));




///////////////////////////////////// 8. mnozenje na broj sam so sebe

// let exponent = function (a, n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return a * exponent(a, n - 1);
//   }
// };

// console.log(exponent(3,3));




////////////////////////////// 9. koja data e pogolema;



// let compare_dates = function(date1,date2){
//   if (date1>date2) return ("Date1 > Date2");
// else if (date1<date2) return ("Date2 > Date1");
// else return ("Date1 = Date2");
// }
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));






// let compare_dates = function(date1,date2){
//   if (date1>date2) return ("Date1 > Date2");
// else if (date1<date2) return ("Date2 > Date1");
// else return ("Date1 = Date2");
// }
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));



// let data1 = prompt("Enter a Date1");
// let data2 = prompt("Enter a second date");
// console.log(compare_dates(new Date(data1), new Date(data2)));

// let compare = function (date1, date2) {
//   if (date1>date2) return ("Date1 > Date2");
//   else if (date1<date2) return ("Date2 > Date1");
//   else return ("Date1 = Date2")
// }
// let d1 = prompt("Enter a first date")
// let d2 = prompt("Enter a second date")
// console.log(compare(new Date(d1), new Date(d2)));



///////////////////////////////////// 10. 

// let toppings = [
//   "Mushrooms",
//   "Tomatoes",
//   "Eggs",
//   "Chili",
//   "Lettuce",
//   "Avocado",
//   "Chilles",
//   "Bacon",
//   "Pickles",
//   "Onions",
//   "Cheese",
// ];
// toppings.forEach(element => console.log(element))
// console.log(toppings);
// console.log(toppings[0]);


// toppings.forEach(element => console.log(element))
// console.log(toppings);

// const toppings = [
//     "Mushrooms",
//     "Tomatoes",
//     "Eggs",
//     "Chili",
//     "Lettuce",
//     "Avocado",
//     "Chilles",
//     "Bacon",
//     "Pickles",
//     "Onions",
//     "Cheese",
//   ];
//   function logtoping(topping) {
//     console.log(topping);
//   }
//   toppings.forEach(logtoping);


// //11.forEach(), to iterate through the object and retrieve the  key and value of each property
  // const courses = {
  //   java: 10,
  //   javascript: 55,
  //   nodejs: 5,
  //   php: 15,
  // };
  // convert object to key's array
  // const keys = Object.keys(courses);
  // // print all keys
  // console.log(keys);
  // // [ 'java', 'javascript', 'nodejs', 'php' ]
  // // iterate over object
  // keys.forEach((key, index) => {
  //   console.log(`${key}: ${courses[key]}`);
  // });




//////////////////////////////////////   12 .
// const animals = {
//   tiger: 1,
//   cat: 2,
//   monkey: 3,
//   elephant: 4,
// };
// // iterate over object values
// Object.values(animals).forEach((val) => console.log(val));
// // 1
// // 2
// // 3
// // 4
// // iterate over object keys
// Object.keys(animals).forEach((key) => console.log(key));






// function start_spec_str(str) {
//   if (str.length <4) {
//     return false;
//   }
//   front = str.substring(0,4);
//   if (front.toUpperCase() == "JAVA") {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(start_spec_str("JavAscript"));




        
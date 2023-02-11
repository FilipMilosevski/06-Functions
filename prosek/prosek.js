/////////////////////////////////// 5. Prosecni vrednosti
let students = [
  ["David", 80],
  ["Vinoth", 77],
  ["Divya", 88],
  ["Ishitha", 95],
  ["Thomas", 68],
  
];
//Davame array so iminija i vrenosti
let Avgmarks = 0;
//deklariame varijabla za Avgmarks so vrednost nula
var avg;
//deklariram varihabla avg za da ja iskoristime ponatamu
for (let i = 0; i < students.length; i++) {
  Avgmarks += students[i][1];
  var avg = Avgmarks / students.length;
}
//for loop kade so Avgmarks += students[i][1] se sobiraat site vrednost od arajot
console.log("Average grade: " + Avgmarks / students.length);
//consol log kade se deli vkupnata brojka so brojot na studenti
if (avg < 60) {
  console.log("Grade : F");
} else if (avg < 70) {
  console.log("Grade : D");
} else if (avg < 80) {
  console.log("Grade : C");
} else if (avg < 90) {
  console.log("Grade : B"); 
} else if (avg < 100) {
  console.log("Grade : A");
}

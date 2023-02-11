// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
/// alt + z za dobar format

// let datum = new Date();
// console.log(datum);


let denovi = ["Nedela","Ponedelnik","Vtornik","Sreda","Cetvrtok","Petok","Sabota"]
console.log(new Date().getDay());

console.log(`Today is: ${denovi[2]}`);


let indexzaden = new Date().getDay();
console.log(`Denes e : ${denovi[indexzaden]}`);


let datum = new Date();
console.log(datum);

let saat = datum.getHours()
let minuti = datum.getMinutes()
let sekundi = datum.getSeconds();
console.log(`Momentalnoto vreme e : ${saat}:${minuti}:${sekundi}`);

let saatnov;
let ampm;
if (saat>12) {
  saatnov = saat - 12;
  ampm = "PM"
} else {
  saatnov = saat
  ampm = "AM"
}
console.log(`Momentalnoto vreme e :  ${saatnov} ${ampm}:${minuti}:${sekundi}`);

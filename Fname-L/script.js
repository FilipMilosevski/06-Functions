/////////////////////////////////////// 7. Write a Javascript function to convert string in
/// abbreviated form.
/// test date: console.log(abbrev_name("Robin Singh"))

// let fm = prompt("enter name")
let fm = "Robin Singh"  
let splitname = fm.split(" ")
// console.log(splitname);
console.log(splitname[0]+ " " +splitname[1][0]+".");


function abbrev_name(fullname) {
  let abbrevname = "";
  let splitname = fullname.split(" ")
  abbrevname = splitname[0]+ " " +splitname[1][0]+"."


  return abbrevname;
}
console.log(abbrev_name("Robin Sighn"));
// console.log(abbrev_name(prompt("ENTER A NAME")));

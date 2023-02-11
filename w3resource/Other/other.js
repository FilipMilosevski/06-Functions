// protect_email = function (user_email) {
//   var avg, splitted, part1, part2;
//   splitted = user_email.split("@");
//   part1 = splitted[0];
//   avg = part1.length / 2;
//   part1 = part1.substring(0, (part1.length - avg));
//   part2 = splitted[1];
//   return part1 + "...@" + part2;
// };

// console.log(protect_email("ficosssssssssssssss_milo@example.com"));


// //////////////////////////////////



// repeat = function repeat(str, count) {
//   if(typeof(count) == "undefined") {
//   count =1;
// }
// return count < 1 ? '' : new Array(count + 1).join(str);
//   }
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));





// repeat = function vezba(str, count) {
//   if(typeof(count) == "undefined") {
//   count =1;
// }
// return count < 1 ? '' : new Array(count + 1).join(str);
//   }
// console.log(vezba('*'));
// console.log(vezba('**',2));
// console.log(vezba('***',3));






// function remove_non_word (str) {
//   if ((str===null) || (str===''))
//      return false;
// else
//  str = str.toString();

// var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

// return str.replace(PATTERN, '');
// }
// console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
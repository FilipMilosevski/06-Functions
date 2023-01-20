function fizzbuzz(n) {
 if (n%3==0 && n%5==0) {
  console.log("Fizz&Buzz");
 } else if (n%3==0) {
  console.log("Buzz");
 } else if (n%5==0) {
  console.log("Fizz");
 }
}
fizzbuzz(15)


function fb(n) {
for (let i = 1; i <= 45; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz", i);
  } else if (i % 3 == 0) {
    console.log("Fizz", i);
  } else if (i % 5 == 0) {
    console.log("Buzz", i);
  }
} 
}
fb()
function fizzbuzz(n) {
  for (var n = 1; n <= 100; n++) {
  if (n % 3 === 0) {
    if (n % 5 === 0) {
      console.log("fizzbuzz");
    } else {
      console.log("fizz");
    }
  } else if (n % 5 === 0) {
   console.log("buzz");
  } else {
    console.log(n);
  }
}
};

fizzbuzz();
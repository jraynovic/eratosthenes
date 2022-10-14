function eratosthenes(n) {
  const array = []; // placeholder to create array true/false from 2 to n-1 
  const upperLimit = Math.sqrt(n);
  const primes = []; // hold the primes we want to return

  for (let i = 0; i < n; i++) {
    /*create an array of equal length to n-1 with the
        value true instead of false */
    array.push(true);
  }

  for (let i = 2; i <= upperLimit; i++) { // loop from 2 to sqrt of n
    if (array[i]) { // if that index is true
      for (var j = i * i; j < n; j += i) { //j = 2*2(4) next iter 4+2, 6+2, 8+2
        array[j] = false; // set all the multiples to false
      }
    }
  }

  for (let i = 2; i < n; i++) { // iterate from 2 to n-1
    if (array[i]) { // if true its prime
      primes.push(i); // push prime index
    }
  }

  return primes;
}

console.log(eratosthenes(25));

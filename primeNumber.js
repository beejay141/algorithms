const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;

  return num >= 2;
};

console.log(isPrime(13));

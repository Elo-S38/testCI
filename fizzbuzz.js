const fizzbuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    // Ajout de la condition pour 3 et 5
    return "Fizzbuzz";
  }
  if (number % 3 == 0) {
    return "Fizz";
  }
  if (number === 5) {
    return "Buzz";
  }
  return number;
};

module.exports = { fizzbuzz };

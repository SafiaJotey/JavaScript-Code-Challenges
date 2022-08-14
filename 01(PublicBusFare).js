// Problem 01:
// A large number of people will go for a picnic. The number of buses will depend on the number of people. Suppose we have buses and micros. Each bus has a capacity of 50 people and each microbus has a capacity of 11 people and each public bus ticket costs 250 rupees. Now you need to write a function called publicBusFare that will take a number (how many passengers) as a parameter. It will return you the total amount of public bus fare.

// Output Example:
// If 235 people go for picnic then we need 4 buses and 3 microbuses and rest people will go by public bus. The total public bus fare for these few people should be returned.

const publicBusFare = (number) => {
  const capacityOfBus = 50;
  const capacityOfMicro = 11;

  let totalFare;

  if ((number > capacityOfMicro) & (number < capacityOfBus)) {
    let remainder = Math.round(number % 11);
    totalFare = fareCalculation(remainder);
  } else if (number > capacityOfBus) {
    let remainder = Math.round(number % 50);
    if ((remainder > 11) & (remainder < 50)) {
      let remainder1 = Math.round(remainder % 11);
      totalFare = fareCalculation(remainder1);
    } else {
      totalFare = fareCalculation(remainder);
    }
  } else {
    totalFare = fareCalculation(remainder);
  }
  return totalFare;
};
const fareCalculation = (remainder) => {
  let fare;

  fare = remainder * 250;
  return fare;
};

console.log(publicBusFare(235));

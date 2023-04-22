// Calculating tip based on quality and total amount:

const tipCalculator = (quality='', total) =>  {
  if (quality === 'bad')  {
    return total * 0.05;
  } else if (quality === 'ok')  {
    return total * 0.15;
  } else if (quality === 'good')  {
    return total * 0.20;
  } else if (quality === 'excellent')  {
    return total * 0.30;
  } else 
    return total * 0.18;
};
// Testing code:
console.log(tipCalculator('good', 100)) //should return 20

console.log(tipCalculator('bad', 320)) // should return 16
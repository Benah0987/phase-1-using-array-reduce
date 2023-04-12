const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


//introduced a new var for the reducer to store its value
//added two parameter a callback functon and an accumulator
//the callback updates thr value of the accumulator
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => 
                 {
  return accumulator + currentValue;
}, 0);

console.log(`The total number of batteries is ${totalBatteries}.`);


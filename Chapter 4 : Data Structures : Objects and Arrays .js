/*Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers.As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior.Make sure it also works with negative step values*/


function range(start, end, count= start < end?1:-1) {
    let myArray = [];
    if (count > 0) {
      for (let i = start; i <= end; i += count){
        myArray.push(i);
      } 
    } else {
      for (let i = start; i >= end; i += count) 
      {
        myArray.push(i);
      }
    }
    return myArray;
  }
  console.log(range(1,55,1));
  console.log(range(10,2,-4));

  function sumofrange(myArray){
    let sum = 0;
    for(let value of myArray){
        sum+=value;
    }
    return sum
  
}
console.log(sumofrange(range(1,55)));

/* Looping a triangle
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######*/

for(shape="#"; shape.length<=7; shape=shape +"#"){
    console.log(shape);
}

/*FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).*/

for (num=1; num <=100; num = num+1){ 
   if(num%5==0 && num%3==0){
        let num = "fizzbuzz";
        console.log(num);
    }
   else  if (num%3==0){
        let num = "fizz";
        console.log(num); 
    }
    else if (num%5==0){
        let num = "buzz";
        console.log(num);
    }
    else{
        console.log(num);
    }
     
}



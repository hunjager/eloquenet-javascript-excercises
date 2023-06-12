/*Write a function
min that takes two arguments and returns their minimum.*/
function min(a,b){
    console.log(Math.min(a,b));
}



/*Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean. */
function isEven(num){
    if(num%2==0){
        console.log(true);
        console.log("The number " + num + " is even");
    }
    else{
        console.log(false);
        console.log("The number " + num + " is not even");

    }
}


//declaring a variable to the function to know the number is prime or not
var isPrime=function(n){
  var factors=0;
  for(var i=n-1;i>1;i--)
    if(n%i==0)
    {
      factors++;
      break;
    }
  return factors==0;
}
  
console.log(m.isPrime(98));//displays output to the console
console.log(m.isPrime(97));//displays output to the console

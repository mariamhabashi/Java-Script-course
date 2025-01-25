//                     Number( ) object
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 << Maximum number that js can deal with
console.log(Number.MAX_VALUE + 12324243243244);//1.7976931348623157e+308 the same as it's the maxium number js can handle
console.log(Number.MAX_SAFE_INTEGER);//maximum safe int js can deal with 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991
//Check the safety of a number
console.log(Number.isSafeInteger(9007199254740991));//true
console.log(Number.isSafeInteger(900719925474099133));//false 
//check the input is number or not
console.log(Number.isInteger(2));//true
console.log(Number.isInteger('2'));//false
//check the input is not a number (NaN) or it is
console.log(Number.isNaN('ahmed' + 5));//false >> concatinate >> ahmed5
console.log(Number.isNaN('ahmed' -4));//true
//###################################################
/*                     Math Object
Math.E >>>> Euler's number, the base of natural logarithms.
Math.abs(-ve number or +ve number) it returns +ve number
Math.sqrt(number) it returns the square root of the number
Math.pow(number,power) returns number**power
Math.round(number) returns a supplied numeric expression rounded to the nearest integer
Math.ceil(number) returns the greatest integer higher than its numeric argument
Math.floor(number) returns the greatest integer less than or equal to its numeric argument
Math.min(num1,num2,num3,...) returns the minimum number of all
Math.min(num1,num2,num3,...) returns the maximum number of all
*/
console.log(Math.abs(-2));//2
console.log(Math.sqrt(9));//3
console.log(Math.pow(2,3));//8 >> 2 power 3 >> 2**3
console.log(Math.round(10.5));//11 
console.log(Math.round(10.2));//10
console.log(Math.ceil(3.2));//4 
console.log(Math.floor(3.2));//3 
console.log(Math.max(13,4,43,32,6,22));//43
console.log(Math.min(12,45,-4,3,2));//-4


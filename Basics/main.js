/*               1) Data Types: 
String 
Number
Boolean
undefined
null
Object
*/
document.write("This is a String <br>")
//typeof >> to know the type of the variable
//Both will print number
document.write("The type of 10 is ",typeof 10 ,"<br>")
document.write ("The type of 10.2 is ",typeof 10.2 ,"<br>")
document.write ("The type of true is ",typeof true ,"<br>")
//_______________undefined_________________
let a=10;
document.write("The type of a is ",typeof a ,"<br>");
let b;
document.write("The type of b is ", typeof b ,"<br>") //Undefined as we intialize a variable without assigning it with a value
//_______________null_________________
document.write("The type of null is ", typeof null,"<br>"); //Consider it as a bug in js that it returns the type "object" not "null"

//#####################################################
/*                  2) Variable
variable name : can starts with $ or _ or letters

1.var: we can change it many times from data type to another or the same but different value 
>>>>>var x;
     x=10 //valid
>>>>>var x=10;
     var x=20; //valid

2.let: 
>>>>>let y;
     y=20 //valid
>>>>>let y=10;
     let y=20; //invalid "y has already been declared"

3.const: once you give it a value you will never be able to change it
>>>>>const v;
     v=20 //invalid "Missing initializer in const declaration"
*/
//_____________var___________________
var name1;
name1= "Mariam";
document.write(name1,"<br>");
name1="Roma"
document.write(name1);
var x=10;
//_____________let___________________
let y=20;
//_____________const_________________
const v=30;

//#####################################################
/*                    3) Concatinate
join things together 
+ >>> (not numbers >> 50 + 10 will print 60 ||||| "50"+10 will print 5010)
`` >>> more flexable
*/
//________________+_________________
let name="Mahmoud";
let age=26;
let spac=" ";
//console.log(name+spac+age); //Mahmoud 26 in the console

//_______________``_________________
console.log(`my name is ${name} and my age is ${age}`) //my name is Mahmoud and my age is 26

//#####################################################
/*                    4) Math Operations
+ , - , * , /
** >> power 
% >> modules
*/
let num1=5;
let num2 =4
console.log(num1+num2); //9
console.log("num"+4);//num4 >>> concatinate 
console.log(num1 - num2); //1
console.log(num1 * num2); //20
console.log(num1 / num2); // 5/4
console.log(num1 ** num2); // 5 power 4
console.log(num1 % num2); //1

//increment
let score=10;
/*score=score+1;
 or score+=1; will increase the score variable by 1 
 or score++
 */
console.log(score++);//will print score first then increment it >> will print 10 then it will be 11
console.log(++score);//will increment the score by 1 first then print it >> score=11 then print 11

//#####################################################
/*                    4) Convert String to Number
when you use any math operation except '+' the strings will automatically be converted to numbers.
*/
console.log('5'+'4'); //54 string+string = concatinate
console.log('5'-'4'); //1 (convert '5' and '4' to numbers 5 and 4 then print 5-4)
console.log('5'/'ahmed'); //NaN >>> Number
console.log(typeof NaN); //number
//What if I wanna use + ?
console.log( +'5' + +'4' );//9 >> put +before each string to convert it to number
console.log(-'5');//-5
console.log(+'ahmed');//NaN
console.log(+true);//1
console.log(+false);//0
console.log(+undefined);//NaN
console.log(+null);//0
//#####################################################
/*                    4) Convert string to number
1.we use Number('') to convert string to numbers
2.parseInt('') 
*/
console.log(typeof +'4');//number
console.log(typeof Number('4'));//number
//Here's a problem
console.log(+'4 ahmed');//NaN
console.log(Number('4 ahmed'))//NaN
//Solution:
console.log(parseInt('4 ahmed')) //4
console.log(parseFloat('3.4 ahmed')) //3.4
//#####################################################
/*                    4) Convert number to string
1.String()
2.variablename.toString()
number..toString() or (number).toString
*/
let M=100;
let N=100;
console.log(typeof M);//Number
console.log(typeof String(M));//string
console.log(typeof N.toString())//string
console.log(typeof 100..toString());//string
console.log(typeof (100).toString());//string
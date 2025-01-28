//Data Type [ARRAY]
/*
instead of 
let name1='ahmed';
let name2='ali';
let name3='mohamed';
we make one variable and store all these values >>array
*/
let names =['ahmed','ali','mazen','omar']; //index:0,1,2,3
console.log(names);//(4) ['ahmed', 'ali', 'mazen', 'omar']
console.log(names[0]);//ahmed
console.log(names.length);//4 >> num of elements
console.log(names.indexOf('mazen'));//2
console.log(typeof names); //object
let objects =[1,2,3,[6,4,5]];//0,1,2,3(the array)
console.log(objects);//[1, 2, 3, Array(3)]
console.log(objects[3]);//(3) [6, 4, 5]
//access nested array
let nesarr=[1,2,3,[4,5,6,[7,8,9]]];//0,1,2,3(0,1,2,3(0,1,2))
console.log(nesarr[3][3][1]);//8
//Change data in array
names[2]='amr'; //it will replace 'mazen' with 'amr'
console.log(names);//(4) ['ahmed', 'ali', 'amr', 'omar']
//#######################################################

/*add elements to an array
.push >>to the end of an array
.unshift >> to the begining of an array
*/

names.push('omran');
console.log(names);//(5) ['ahmed', 'ali', 'amr', 'omar', 'omran']
names.unshift('adel');
console.log(names);//(6) ['adel', 'ahmed', 'ali', 'amr', 'omar', 'omran']

/* delete elements from an array
.shift >>delete the first element in the array and it will return the deleted element
.pop >>delete the last element in the array
*/
names.shift();
console.log(names);//(5) ['ahmed', 'ali', 'amr', 'omar', 'omran']
names.pop();
console.log(names);//(4) ['ahmed', 'ali', 'amr', 'omar']
//#######################################################

/*                     splice - slice array
what if i want to delete elements in the array but not the first of the last ?? >> splice
splice(start: number, deleteCount?: number,add)
slice(start,end)
*/
//splice
names.splice(1,1);//delete 1 element start from index 1 >>ali
console.log(names);//(3) ['ahmed', 'amr', 'omar']
names.splice(0,1,'gamal','mona');//it will delete the element in index 0 and add 'gamal','mona' in the begining of an array
console.log(names);//(4) ['gamal', 'mona', 'amr', 'omar']
//slice
names.slice(0,3);
console.log(names);//(4) ['gamal', 'mona', 'amr', 'omar'] it doesn't affect the original array
console.log(names.slice(0,3));//(3) ['gamal', 'mona', 'amr']
//#######################################################

/*                         Search in array
names=['gamal', 'mona', 'amr'];
indexOf('')
lastIndexOf ('') بتبدأ بحث من الاخر للأول
includes('') >> returns true | false
*/
console.log(names.indexOf('mona'));//1
console.log(names.lastIndexOf('ali'));//-1 can't find it
console.log(names.includes('ali'));//false
//#######################################################

/*                       sort and reverse array
.sort()
.reverse()
*/
let arr = ['ahmed','ziad','salem','mazen'];
console.log(arr);//(4) ['ahmed', 'ziad', 'salem', 'mazen']
console.log(arr.reverse());//(4) ['mazen', 'salem', 'ziad', 'ahmed']
console.log(arr.sort());//(4) ['ahmed', 'mazen', 'salem', 'ziad'] sorted depends on the alphabets
//#######################################################

/*                        concat and join array
.concat()
.join('separator char') > convert array to string
*/
let arr1=['ahmed','ali','mazen'];
let arr2=['gamal','karem','omar'];
//arr1=arr1+arr2; //or arr1+=arr2
//console.log(arr1);//ahmed,ali,mazengamal,karem,omar >> string not object
//console.log(typeof arr1);//string
//concat 2 array
console.log(arr1.concat(arr2,'mona'));//(7) ['ahmed', 'ali', 'mazen', 'gamal', 'karem', 'omar', 'mona']
console.log(arr1.join());//ahmed,ali,mazen
console.log(typeof arr1.join());//string
console.log(arr2.join('-'));//gamal-karem-omar
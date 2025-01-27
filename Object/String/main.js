/*                          String
repeat
[]
.chatAt()
.indexOf('')
.lastIndexOf('')
.slice()
.split
*/
let name = 'Mariam';
console.log(name);
//The string is a sequence value >> بتتحفظ بشكل متسلسل 
console.log(name.repeat(2));//MariamMariam >> .repeat(n times) will repeat the string n times 
console.log(name.length);//6 >> number of chars >> with strings only > doesn't work with numbers
//name[0]=M
//name[1]=a
//name[2]=r
//name[3]=i
//name[4]=a
//name[5]=m
console.log(name[3]);//i
console.log(name.charAt(0));//M
/*The difference between  [] and charAt()
name[6];// undefined
name.charAt(6);//will print nothing
*/
console.log(name[6]);//undefined
console.log(name.charAt(6));//
console.log(name.indexOf('i'));//3 the index of 'i'
console.log(name.indexOf('a'));//1 the first 'a; in the string
console.log(name.indexOf('a',2));//4 the first 'a' starting from index 2 
let sentence='i love java script';
console.log(sentence.indexOf('java'));//7 the index of the first letter in the 'java'
console.log(sentence.lastIndexOf('i'));//15 it will start the search form the end of the string
console.log(sentence.slice(0,4));//i lo >> 0 to 3 (4 is excluded) >> it will print (4-0) characters
console.log(sentence.split());//['i love java script'] as an array
console.log(sentence.split(' '));//(4) ['i', 'love', 'java', 'script'] >>>split after each space 
console.log(sentence.split('a'));//(3) ['i love j', 'v', ' script']
console.log(sentence.split(' ',2))//(2) ['i', 'love']>>just split 2 times 
console.log(sentence.split(''));//(18) ['i', ' ', 'l', 'o', 'v', 'e', ' ', 'j', 'a', 'v', 'a', ' ', 's', 'c', 'r', 'i', 'p', 't']
//##########################################################
/*   
slice
substring
substr 
sentence='i love java script';
*/
console.log(sentence.slice());//i love java script
console.log(sentence.substring());//i love java script
console.log(sentence.substr());//i love java script
//slice(start,end) && substring(start,end)
console.log(sentence.slice(2,6));//love
console.log(sentence.substring(2,6));//love
//slice can take negative indexes , substring not
console.log(sentence.slice(-6,-4));//sc
console.log(sentence.substring(-6,-4));//won't print anything

//str(start,length)
console.log(sentence.substr(2,6));//love j >> start from index 2 print 6 letters  
//###########################################################
/*
                   Search in the string
sentence='i love java script';
*/
console.log(sentence.indexOf('a'));//8 >> the first 'a' in index 8
console.log(sentence.lastIndexOf('a'));//10 >> starting from the end of the string the index of first 'a' in index 10
console.log(sentence.indexOf('z'));//-1 >> can't find 'z' in the string
console.log(sentence.lastIndexOf('z'));//-1 >> can't find 'z' in the string
//.includes('')
console.log(sentence.includes('a'));//true >> your tring includes 'a'
console.log(sentence.includes('z'));//false
//.startsWith('',starting index)
console.log(sentence.startsWith('a'));//false >> is the string starts with 'a'? No
//.endsWith('',length)
console.log(sentence.endsWith('t'));//true
console.log(sentence.endsWith('e',6));// the first 6 chars end with e? >> i love >> true




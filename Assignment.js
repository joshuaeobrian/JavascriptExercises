
// Exercise 1 DONE!!!!!
// make work
/*The below function does not work. The variable twoPlusTwo gets 
set to undefined. Refactor the function to make it work.*/
function addNumbers(numberA, numberB) {
  return numberA + numberB;
}

var twoPlusTwo = addNumbers(2, 2);

console.log(twoPlusTwo);

// Exercise 2	DONE!!!!!
/*Write a function called yell that logs out an uppercase version of a 
string. Write a function called yell10 that uses your yell function to
log out an uppercase version of a string 10 times.
*/

function yell(word){
	console.log(word.toUpperCase());
}
function yell10(word, times){
	for (var i = 0; i < times; i++) {
		yell(word+i);
	}
}
yell("Hello");
yell10("hey you! ",10);

// Exercise 3   DONE!!!!!
/*Write a function called longest that returns
 the longest of two input strings or arrays.*/

 /*

     ========= Key =========
		1 = String
		2 = Array

 */
var characters = ["a","b","c","d","e","f","g","h",'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0];

function longest(item1, item2,compare){
  //print out of what its comparing
  console.log("\n"+compare +"\n\nItem 1: "+item1 +"\nItem 2: "+item2+"\n");
  console.log("\nItem 1 length: "+ item1.length+"\nItem 2 legnth: " + item2.length);
  console.log();
  //getting and comparing lengths
	if(item1.length > item2.length){
		console.log("Item 1 is largest.");
	}else if(item1.length < item2.length){
		console.log("Item 2 is largest.");
	}else if(item1.length === item2.length){
		console.log("Both Items are the same legnth.");
	}else{
		console.log("Could  not compare the two items");
	}
}
//Builds a String or array and return
function build(type,indx){
  var item;
  if(type==2){
    item = [];
  }
	for(var i = 0; i < indx;i++){
		if(type === 1){
			item += characters[Math.floor(Math.random()*characters.length)];
		}else if(type === 2){
			item.push(characters[Math.floor(Math.random()*characters.length)]);
		}else{
		  console.log("Could not find the type...");
		}
	}
	return item;
}
function randomNumber(){
  return Math.floor(Math.random()*26+1);
}
longest(build(1,randomNumber()),build(1,randomNumber()),"Comparing 2 Strings....");
console.log("\n=============================\n");
longest(build(2,randomNumber()),build(2,randomNumber()),"Comparing 2 Arrays....");
console.log("\n=============================\n");
longest(build(1,randomNumber()),build(2,randomNumber()),"Comparing 1 String and 1 Arrays....");
console.log("\n=============================\n");



// Exercise 4	DONE!!!!
/*. Write a function called isVowel that takes a character (i.e. a string of length 1) 
and returns true if it is a vowel, uppercase or lowercase.
 The function should return false if the character is not a vowel. */

var letters = ["a","b","c","d","e","f","g","h",'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var vowels = ['a','e','i','o','u'];
var vowelCount;
function isVowel(char){
  if(vowels.includes(char.toLowerCase())){
    return true;
  }else{
    return false;
  }
}
//Checks Strings
function checkString(string){
  vowelCount=0;
  for(var i = 0; i < string.length; i++){
    if(isVowel(string.charAt(i))){
      vowelCount += 1;
    }else{
      vowelCount = vowelCount;
    }
  }
  return vowelCount + "/" +string.length + " are vowels."
}
//checks Arrays
function checkArray(array){
  vowelCount = 0;
  for(var i = 0; i < array.length;i++ ){
     if(isVowel(array[i])){
      vowelCount += 1;
    }else{
      vowelCount = vowelCount;
    }
  }
  return vowelCount + "/" + array.length + " are vowels.";
}

console.log(checkString("ThE bird is the word saId the wAlrus"));
console.log(checkArray(letters));












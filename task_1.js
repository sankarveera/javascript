'use strict';
/* 
--- Given test string ---
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/
function toCamelCase(str){
	const reg = /-|_/g; // regex to match minus and underscore
	const testStr = str.replaceAll(reg, " ").split(" "); 
	let result="";
	let firstChar = "";
	testStr.forEach(function(val, i, testStr){
		if(typeof(testStr[i]) == "string"){
			let ab = testStr[i].charAt(0);
			firstChar = i != 0 ? ab.toUpperCase() : ab;
			const remainingStr = testStr[i].slice(1);
			result = result+firstChar+remainingStr; 
		}
	});
	return result;
}
const answer = toCamelCase("the-stealth-warrior");
console.log(answer);
  
  


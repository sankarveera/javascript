/* 
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way 
until a single-digit number is produced. The input will be a non-negative integer.

inputs:
-- postive number
-- zero and multiple zeros
Outputs:
-- sum of the given nos.

Steps to solve: 
# convert the number to string 
# split the string 
# find the method to loop or reduce the array
# log the result 

Test case : 

493193  // 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
132189  // 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
*/
const test = digitalRoot(132189);
console.log("test -------->", test);
function digitalRoot(num) {
    let givenNum = num.toString().split('');
    var  answer = givenNum.reduce(sum);
	if(answer.toString().length > 1)
		var answer = digitalRoot(answer);
    return answer;
}
function sum(total, value){
   return Number(total) + Number(value);
}

/* //using foreach loop  
const test = digitalRoot(493193);
console.log("test -------->", test);
function digitalRoot(number){
	var testArray = number.toString().split("");
	var result = 0; 
	testArray.forEach(e => {
		result = Number(result) + Number(e);
	});
	if(result.toString().length > 1)
		result = digitalRoot(Number(result));
	return result;
} */
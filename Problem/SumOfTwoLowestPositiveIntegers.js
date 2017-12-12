"use strict";

// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {  
	numbers.sort(function(a, b) {
		return a > b;
	});

	return numbers[0] + numbers[1];
};

alert( sumTwoSmallestNumbers([23, 4, 5, 66]) );
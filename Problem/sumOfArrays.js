"use strict";

// https://www.codewars.com/kata/array-plus-array/javascript
function arrayPlusArray(arr1, arr2) {
	return arr1.concat(arr2).reduce(function(a, b) {
		return a + b;
	});
}

console.log( arrayPlusArray( [1, 2, 3], [10, 20, 30] ) );
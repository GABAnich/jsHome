"use strict";

//  https://www.codewars.com/kata/find-the-unique-number-1/javascript

function findUniq(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
			return arr[i];
		}
	}
}

console.log( findUniq([ 1, 1, 1, 2, 1, 1 ]) ); // 2
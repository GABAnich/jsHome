"use strict";

// https://www.codewars.com/kata/tribonacci-sequence

function tribonacci(signature, n){
	if (n === 0) {
		return [];
	} else if (n === 1) {
		return [signature[0]];
	} else if (n === 2) {
		return [signature[0], signature[1]];
	} else if (n === 3) {
		return signature;
	}

	for (let i = 2; i < n - 1; ++i) {
		signature.push(signature[i - 2] + signature[i - 1] + signature[i]);
	}

	return signature;
}

console.log( tribonacci([3,2,1], 1) );
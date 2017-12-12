"use strict";

function longest(s1, s2) {
	var propArr = {};
	var str = [];

	for (var i = 0; i < s1.length; i++) {
		propArr[s1[i]] = 0;
	}

	for (var i = 0; i < s2.length; i++) {
		propArr[s2[i]] = 0;
	}

	for (var prop in propArr) {
		str.push(prop);
	}

	return str.sort().join('');
}

// https://www.codewars.com/kata/two-to-one/train/javascript
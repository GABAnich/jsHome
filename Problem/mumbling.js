"use strict";

// https://www.codewars.com/kata/mumbling/train/javascript

function accum(s) {
	return s.split('').map(function(elem, i) {
		return elem.toUpperCase() + elem.toLowerCase().repeat(i);
	}).join('-');
}
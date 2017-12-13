"use strict";

// https://www.codewars.com/kata/friend-or-foe

function friend(friends){
	return friends.filter(function(elem) {
		return elem.length === 4;
	});
}

console.log( friend(["Ryan", "Kieran", "Mark"]) );
"use strict";

// https://www.codewars.com/kata/5894134c8afa3618c9000146

function chessBoardCellColor(cell1, cell2) {
    return color(cell1) === color(cell2);
}

function color(cell) {
    // for exapml cell == A1
    var desk = {
        A: 0,
        B: 1,
        C: 0,
        D: 1,
        E: 0,
        F: 1,
        G: 0,
        H: 1
    };

    return ( desk[ cell[0] ] + +cell[1] ) % 2;
}
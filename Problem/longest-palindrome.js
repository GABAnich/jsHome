"use strict";

// https://www.codewars.com/kata/longest-palindrome/train/javascript

var longestPalindrome = function(str1){
    if ( isPalindrom(str1) ) {
        return str1.length;
    }

    var maxLength = 0,
    maxp = '';
    
    for(var i=0; i < str1.length; i++) 
    {
        var subs = str1.substr(i, str1.length);
        
        for(var j=subs.length; j>=0; j--)  {
            var sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1)
                continue;
            
            if (isPalindrom(sub_subs_str)) {
                if (sub_subs_str.length > maxLength)  {
                    maxLength = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }
    
    if (maxp.length === 0) {
        return 1;
    }
    return maxp.length;
}

function isPalindrom(s) {
    return s.split('').reverse().join('') === s;
}

console.log( longestPalindrome('qwerty') );

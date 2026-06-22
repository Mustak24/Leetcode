// Last updated: 6/22/2026, 12:50:45 PM
/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    let vowelCount = [];
    
    let temp = 0;
    for(let i=0; i<words.length; i++){
        vowelCount.push(isValidVowelStr(words[i]) ? ++temp : temp)
    }

    return queries.map(e => vowelCount[e[1]] - (e[0] && vowelCount[e[0]-1]));
};

function isValidVowelStr(str){
    return 'aeiou'.includes(str[0]) && 'aeiou'.includes(str[str.length-1]);
}
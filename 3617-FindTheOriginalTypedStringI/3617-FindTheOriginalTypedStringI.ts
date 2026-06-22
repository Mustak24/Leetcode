// Last updated: 6/22/2026, 12:48:51 PM
function possibleStringCount(word: string): number {
    let count = 1;
    for(let i=1; i<word.length; i++){
        if(word[i] == word[i-1]) count++;
    }
    return count;
};
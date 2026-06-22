// Last updated: 6/22/2026, 12:54:03 PM
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let len = ratings.length;
    let count = Array.from({length: len}, _ => 1);

    let temp = Array.from({length: len}, (_, i) => [i, ratings[i]]);

    temp.sort((a, b) => a[1] - b[1]);

    for(let [i, e] of temp){
        if((i < len-1 && ratings[i] < ratings[i+1]) && (i > 0 && ratings[i] < ratings[i-1])) continue;

        if((i < len-1 && ratings[i] > ratings[i+1])) {
            if(count[i] <= count[i+1])
                count[i] = count[i+1] + 1;
        }

        if((i > 0 && ratings[i] > ratings[i-1])) {
            if(count[i] <= count[i-1])
                count[i] = count[i-1] + 1;
        }
    }

    return count.reduce((a, b) => a + b)
};
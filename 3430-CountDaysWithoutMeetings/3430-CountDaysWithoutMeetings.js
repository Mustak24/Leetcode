// Last updated: 6/22/2026, 12:49:05 PM
/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);
    let res = meetings[0][0] - 1;

    let temp = meetings[0][1];
    for(let i=1; i<meetings.length; i++){
        if(temp >= meetings[i][0]) {
            if(temp < meetings[i][1]) temp = meetings[i][1];
        } else {
            res += meetings[i][0] - temp - 1;
            temp = meetings[i][1];
        }   
    }
    res += days - temp;

    return res;
};
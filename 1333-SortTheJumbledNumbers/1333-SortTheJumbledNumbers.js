// Last updated: 6/22/2026, 12:53:00 PM
/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    return nums.map((e)=>{

    let srtNum = e.toString()

    let keyNum = ''

    for(let i=0; i<srtNum.length; i++){

      keyNum += mapping[parseInt(srtNum[i])]

    }

    return [parseInt(srtNum), parseInt(keyNum)]

  }).sort((a,b)=>a[1]-b[1]).map((e)=>e[0])
};
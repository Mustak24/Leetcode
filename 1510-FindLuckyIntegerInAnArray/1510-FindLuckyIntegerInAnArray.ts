// Last updated: 6/22/2026, 12:52:34 PM
function findLucky(arr: number[]): number {
    const count = {};
    for(let num of arr){
        if(count[num]) count[num]+=1;
        else count[num] = 1;
    }

    let ans: number = -1
    for(let key in count){
        let num: number = Number(key)
        if(num === count[key] && ans < num) {
            ans = num;
        }
    }

    return ans;
};
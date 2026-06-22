// Last updated: 6/22/2026, 12:51:17 PM
function divideString(s: string, k: number, fill: string): string[] {
    let ans: string[] = [];
    let str: string = s[0];

    for(let i=1; i<s.length; i++){
        if(i % k === 0){
            ans.push(str);
            str = '';
        }
        str += s[i];
    }

    while(str.length !== k) str += fill;
    ans.push(str);

    return ans;
};
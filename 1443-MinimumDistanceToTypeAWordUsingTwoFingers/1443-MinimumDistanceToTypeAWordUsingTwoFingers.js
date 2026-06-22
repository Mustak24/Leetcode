// Last updated: 6/22/2026, 12:52:45 PM
/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
    const distance = (char1, char2) => {
        const index = (char) => {
            const n = char.charCodeAt(0) - 'A'.charCodeAt(0);
            return [n % 6, Math.floor(n / 6)];
        }
        
        const n1 = index(char1);
        const n2 = index(char2);
        return (Math.abs(n1[0] - n2[0]) + Math.abs(n1[1] - n2[1]));
    }

    const map = new Map();
    const add = (arr, index, val) => map.set([...arr].sort().join('-') + index, val);
    const get = (arr, index, val) => {
        const key = [...arr].sort().join('-') + index;
        if(!map.has(key)) return null;
        return map.get(key);
    }


    const ans = (arr, index) => {
        if(index === word.length) return 0;

        const cache = get(arr, index);
        if(cache !== null) return cache;

        if(arr.length === 2) {
            const d1 = distance(arr[0], word[index]);
            const d2 = distance(arr[1], word[index]);
            const cost = Math.min(d1, d2);
            const l = d1 + ans([word[index], arr[1]], index + 1);
            const r = d2 + ans([arr[0], word[index]], index + 1);
            const result = Math.min(l, r);
            add(arr, index, result);
            return result;
        }

        const l = ans([arr[0], word[index]], index + 1);
        const r = distance(arr[0], word[index]) + ans([word[index]], index + 1);
        
        const result = Math.min(l, r);
        return result;
    } 


    const result = ans([word[0]], 1);
    return result;
};
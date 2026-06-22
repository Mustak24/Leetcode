// Last updated: 6/22/2026, 12:53:35 PM
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    let sent = sentence.split(" ");
    let dic = dictionary;
    for(let j=0; j<dic.length; j++){
        for (let i = 0; i < dic.length; i++) {
            if(j==i || dic[i].length==dic[j].length) continue;
            else if (dic[j][0].includes(dic[i][0])) {
                if(dic[i].length<dic[j].length){
                    dic[j] = dic[i]
                }else {
                    dic[i] = dic[j]
                }
            }
        }
    }
    console.log(dic)
    let ans = [];
    for (let i = 0; i < sent.length; i++) {
        if (sentInDic(sent[i], dic)[0]) {
            ans.push([dic[sentInDic(sent[i], dic)[1]]]);
        } else {
            ans.push(sent[i]);
        }
    }
    return ans.join(' ');
};

function sentInDic(sent, dic) {
    let i = [false, null]

    for (j = 0; j < dic.length; j++) {
        if ((' ' + sent).includes(' ' + dic[j])) {
            i = [true, j];
        }

    }
    return i;
}


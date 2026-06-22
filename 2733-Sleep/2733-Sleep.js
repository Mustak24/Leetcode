// Last updated: 6/22/2026, 12:50:23 PM
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(millis)
        }, millis);
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
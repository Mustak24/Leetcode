// Last updated: 6/22/2026, 12:50:04 PM
/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let now = 0;
    let next = 1;
    while(true){
        yield now;
        [now, next] = [next, now+next];
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
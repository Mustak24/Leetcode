// Last updated: 8/3/2026, 10:39:33 PM
1
2var RandomizedSet = function() {
3    this.set = new Set();
4};
5
6/** 
7 * @param {number} val
8 * @return {boolean}
9 */
10RandomizedSet.prototype.insert = function(val) {
11    const has = this.set.has(val);
12    this.set.add(val);
13    return !has;
14};
15
16/** 
17 * @param {number} val
18 * @return {boolean}
19 */
20RandomizedSet.prototype.remove = function(val) {
21    const has = this.set.has(val);
22    this.set.delete(val);
23    return has;
24};
25
26/**
27 * @return {number}
28 */
29RandomizedSet.prototype.getRandom = function() {
30    return Array.from(this.set)[Math.floor(this.set.size * Math.random())]
31};
32
33/** 
34 * Your RandomizedSet object will be instantiated and called as such:
35 * var obj = new RandomizedSet()
36 * var param_1 = obj.insert(val)
37 * var param_2 = obj.remove(val)
38 * var param_3 = obj.getRandom()
39 */
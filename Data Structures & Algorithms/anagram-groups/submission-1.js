class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // Solution 1
    groupAnagrams(strs) {
        const res = {};
        
        for (let str of strs) {
            const count = new Array(26).fill(0); // creates a new arr with a max of 26, and fills it with 0
            for (let char of str) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1; // converts the letter into a zero-based index
            }
            const key = count.join(',');
            if (!res[key]) {
                res[key] = [];
            }
           
            res[key].push(str);
        }
        return Object.values(res);
    }
}

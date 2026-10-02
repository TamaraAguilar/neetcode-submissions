class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hash1 = new Map();
        const hash2 = new Map();

        for (let str of s) {
            if (!(hash1.has(str))) {
                hash1.set(str, 1);
            }
            else {
                hash1.set(str, (hash1.get(str) + 1));
            }
        }

        for (let str of t) {
           if (!(hash2.has(str))) {
                hash2.set(str, 1);
            }
            else {
                hash2.set(str, (hash2.get(str) + 1));
            }
        }

        if (hash1.size !== hash2.size) {
            return false;
        }

        for (let str of s) {
            if (hash1.get(str) !== hash2.get(str)) {
                return false;
            }
        }

        return true;
    }
}

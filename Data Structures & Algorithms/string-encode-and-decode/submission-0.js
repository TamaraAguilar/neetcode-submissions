class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        for (const word of strs) {
            // Must start with a num representing length followed by separator, then the str itself
            encodedStr += word.length + "#" + word;
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

       while (i < str.length) {
        let j = i;
        while (str[j] !== "#") {
            j++;
        }

        let length = parseInt(str.substring(i, j));
        i = j + 1;
        j = i + length;
        res.push(str.substring(i, j));
        i = j;
       }

        return res;
    }
}

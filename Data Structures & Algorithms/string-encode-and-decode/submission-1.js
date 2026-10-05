class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";

        for (let word of strs) {
            encodedStr += word.length + "#" + word;
        }

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            let length = parseInt(str.substring(i, j));

            i = j + 1; // We go to the first letter after "#"
            j = i + length; // We go to the final letter of the string
            res.push(str.substring(i, j));
            i = j;
            
        }

        return res;
    }
}

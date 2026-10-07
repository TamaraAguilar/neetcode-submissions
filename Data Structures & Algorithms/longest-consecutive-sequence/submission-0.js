class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Convert array into hash
        const numSet = new Set(nums);
        
        // Track the length of the longest consecutive sequence
        let longest = 0;

        for (let num of numSet) {
            // Check if num - 1 is not in the set -> start of a sequence
            if (!(numSet.has(num - 1))) {
                let length = 1;
                while (numSet.has(num + length)) {
                    length++;
                }

                // Update longest with maximum length found
                if (length > longest) {
                    longest = length;
                }
            }
        }
        
        return longest;
    }
}

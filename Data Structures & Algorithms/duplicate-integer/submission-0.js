class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = {};

        for(let i=0; i < nums.length; i++) {
            // If number is NOT in hash, then add it
            if(!(nums[i] in hash)) {
                hash[nums[i]] = 1;
            } else {
                // If it IS in hash, we return true
                return true;
            }
        }

        return false;
    }
}

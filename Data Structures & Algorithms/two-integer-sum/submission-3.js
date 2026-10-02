class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // Hash map
    twoSum(nums, target) {
        const hash = {};
        let diff;

        for(let i = 0; i < nums.length; i++) {
            diff = target - nums[i];

            if(diff in hash) {
                return [hash[diff], i];
            } else {
                hash[nums[i]] = i;
            }
        }

        return [];

    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const prefix = new Array(n);
        const sufix = new Array(n);
        const res = new Array(n);

        prefix[0] = 1;
        sufix[n - 1] = 1;
        for (let i = 1; i < n; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }

        for (let i = n - 2; i >= 0; i--) {
            sufix[i] = nums[i + 1] * sufix[i + 1];
        }

        for (let i = 0; i < n; i++) {
            res[i] = prefix[i] * sufix[i];
        }

        return res;
    }
}

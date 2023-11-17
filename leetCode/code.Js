/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    
    nums.sort((a, b) => a - b);

    let maxPairSum = 0;
    for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
        const pairSum = nums[i] + nums[j];
        maxPairSum = Math.max(maxPairSum, pairSum);
};
return maxPairSum;
};

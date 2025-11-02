/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let n=nums.length;
    
    let sum=Math.floor((n*(n+1))/2);
    let arrSum=0;

    for(let i=0;i<n;i++){
        arrSum+=nums[i]
    }

    return sum-arrSum
};
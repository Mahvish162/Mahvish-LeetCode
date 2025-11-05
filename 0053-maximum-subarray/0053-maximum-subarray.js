/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let n=nums.length
    let maxi=0;

    // BRUTE FORCE----------------------> TC->O(N3), SC-> O(1)

    // for(let i=0;i<n;i++){
    //     for(let j=i;j<n;j++){
    //         let sum=0;
    //         for(let k=i;k<=j;k++){
    //             sum=sum+nums[k];
    //         }
    //             maxi=Math.max(sum,maxi);
    //     }
    // }
    // return maxi;

    // BETTER ----------------------> TC->O(N2), SC-->O(1)

    // for(let i=0;i<n;i++){
    //     let sum=0;
    //     for(let j=i;j<n;j++){
    //         sum=sum+nums[j];
    //         maxi=Math.max(sum,maxi);
    //     }
    // }
    // return maxi;

    // MOST OPTIMAL APPROACH-----------------> KADANE'S ALGORITHM

    let currSum=0;
    let maxSum=Number.MIN_SAFE_INTEGER;

    for(let i=0;i<n;i++){
        currSum+=nums[i];
        maxSum=Math.max(currSum,maxSum)

        if(currSum<0)currSum=0;
    }
    return maxSum;
};
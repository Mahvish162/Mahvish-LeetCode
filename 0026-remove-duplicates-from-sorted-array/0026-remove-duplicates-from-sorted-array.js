/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n=nums.length;

    // OPTIMAL APPROACH

    let i=0;

    for(let j=1;j<n;j++){
        if(nums[i]!=nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1
};
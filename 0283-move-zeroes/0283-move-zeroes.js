/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n=nums.length;

    //brute force
    //store the non zero elements inside temp arr then shift temp arr elements into original array
    let temp=new Array(n).fill(0)

    let index=0;
    for(let i=0;i<n;i++){
        if(nums[i]!=0){
            temp[index]=nums[i]
            index++;
        }
    }
    // non zero elements shifted to temp array

    for(let i=0;i<n;i++){
        nums[i]=temp[i];
    }
    // temp array shifted to original array


};
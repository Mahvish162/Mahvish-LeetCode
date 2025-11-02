/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n=nums.length;

    //brute force
    //store the non zero elements inside temp arr then shift temp arr elements into original array
    // let temp=new Array(n).fill(0)

    // let index=0;
    // for(let i=0;i<n;i++){
    //     if(nums[i]!=0){
    //         temp[index]=nums[i]
    //         index++;
    //     }
    // }
    // // non zero elements shifted to temp array

    // for(let i=0;i<n;i++){
    //     nums[i]=temp[i];
    // }
    // temp array shifted to original array

    // Time Complexity: O(N), we can move all zeroes to end in linear time.
    // Space Complexity: O(N), additional space used for temporary array.


    // OPTIMAL APPROACH

    // find that point where first zero'th el starts 
    let j=-1;
    for(let i=0;i<n;i++){
        if(nums[i]==0){
            j=i;
            break;
        }
    }
    if(j==-1)return

    for(let i=j+1;i<n;i++){
        if(nums[i]!=0){
            [nums[j],nums[i]]=[nums[i],nums[j]];
            j++;
        }
    }
    


};
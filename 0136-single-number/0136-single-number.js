/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let n=nums.length;

    //Brute force
    // for(let i=0;i<n;i++){
    //     const a=nums[i];
    //     let count=0;
    //     for(let j=0;j<n;j++){
    //         if(a==nums[j]){
    //             count++;
    //         }
    //     }
    //     if(count==1){
    //         return a;
    //     }
    // }
    // return -1;

    // TC--------> O(n2)
    // SC--------> O(1)

    //BETTER APPROACH

    // let maxi=nums[0]
    // for(let i=0;i<n;i++){
    //     maxi=Math.max(maxi,nums[i])
    // }

    // let hash=new Array(maxi+1).fill(0)

    // for(let i=0;i<n;i++){
    //     hash[nums[i]]++;
    // }

    // for(let i=0;i<n;i++){
    //     if(hash[nums[i]]==1){
    //         return nums[i];
    //     }
    // }
    // return -1;

    // Time Complexity: O(N)+O(N)+O(N), where N = size of the array
    // Space Complexity: O(maxElement+1) where maxElement = the maximum element of the array.

    //OPTIMAL APPROACH
    let xorr=0

    for(let i=0;i<n;i++){
        xorr=xorr^nums[i]
    }
    return xorr
};

// Intuition:
// Two important properties of XOR are the following:

// XOR of two same numbers is always 0 i.e. a ^ a = 0. ←Property 1.
// XOR of a number with 0 will result in the number itself i.e. 0 ^ a = a.  ←Property 2

// Here all the numbers except the single number appear twice and so will form a pair. Now, if we perform XOR of all elements of the array, the XOR of each pair will result in 0 according to the XOR property 1. The result will be = 0 ^ (single number) = single number (according to property 2).

// So, if we perform the XOR of all the numbers of the array elements, we will be left with a single number.

// Approach:
// We will just perform the XOR of all elements of the array using a loop and the final XOR will be the answer.
// Dry run:

// Assume the given array is: [4,1,2,1,2]
// XOR of all elements = 4^1^2^1^2
//       = 4 ^ (1^1) ^ (2^2)
//       = 4 ^ 0 ^ 0 = 4^0 = 4
// Hence, 4 is the single element in the array.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let n=nums.length;
    let ans=[]


    //BRUTE FORCE
    // for(let i=0;i<n;i++){

    //     for(let j=i+1;j<n;j++){
    //         if(nums[i]+nums[j]==target){
    //             ans[0]=i
    //             ans[1]=j
    //         }
    //     }
    // }
    //     return ans;


    //OPTIMAL APPROACH
     let arr = nums.map((val, idx) => [val, idx]);

    // Step 2: Sort by value
    arr.sort((a, b) => a[0] - b[0]);

    // Step 3: Two pointer technique
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let sum = arr[left][0] + arr[right][0];

        if (sum === target) {
            // Step 4: Return original indices
            return [arr[left][1], arr[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return []; 
};

// nums = [2,7,11,15], target = 9
// arr = [[2,0], [7,1], [11,2], [15,3]]

// left = 0 → 2
// right = 3 → 15
// sum = 17 > 9 → move right--

// left = 0 → 2
// right = 2 → 11
// sum = 13 > 9 → move right--

// left = 0 → 2
// right = 1 → 7
// sum = 9 ✅ → return [0,1]

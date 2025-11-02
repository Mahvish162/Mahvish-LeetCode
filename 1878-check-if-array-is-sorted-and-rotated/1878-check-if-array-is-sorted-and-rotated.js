/**
 * @param {number[]} nums
 * @return {boolean}
 */

 /*
⚡ Correct Approach (Simple & Efficient)

Count how many times the order breaks — i.e. where nums[i] > nums[i+1].

If this happens more than once, then it’s not sorted and rotated.

If it happens 0 or 1 time, then it is sorted and rotated.
*/

var check = function(nums) {
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        // compare current element with next one (with circular rotation)
        if (nums[i] > nums[(i+1)%n]) {
            count++;
        }
    }

    // if order breaks more than once, it's not sorted+rotated
    return count <= 1;


};
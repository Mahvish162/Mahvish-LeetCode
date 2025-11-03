/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function binarySearch(nums,target){
     let n = nums.length; // size of the array
    let low = 0, high = n - 1;

    // Perform the steps:
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return true;
        else if (target > nums[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return false;
}

var searchMatrix = function(matrix, target) {


    //BRUTE FORCE

    const n=matrix.length;
    const m=matrix[0].length;   // length of first row, as we hv to traverse inside 1 row

    // for(let i=0;i<n;i++){
    //     for(let j=0;j<m;j++){
    //         if(matrix[i][j]==target){
    //             return true;
    //         }
    //     }
    //  return false;
    // }
    // Time Complexity: O(N X M), where N = given row number, M = given column number.


    //BETTER APPROACH

    // for(let i=0;i<n;i++){
    //    if(matrix[i][0]<=target && target<=matrix[i][m-1]){
    //        return  binarySearch(matrix[i],target)
    //    }
    // }
    // return false;

    // TC->O(N)+O(LOGm)
    // SC->O(1)

    //OPTIMAL APPROACH

    // apply binary search:
    let low = 0, high = n * m - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let row = Math.floor(mid / m);
        let col = mid % m;
        
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] < target) low = mid + 1;
        else high = mid - 1;
    }
    return false;
};
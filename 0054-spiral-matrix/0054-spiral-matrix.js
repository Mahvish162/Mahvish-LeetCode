/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
   let ans = [];

  // Determine the number of rows and columns
  let n = matrix.length; // no. of rows
  let m = matrix[0].length; // no. of columns

  // Initialize the pointers reqd for traversal.
  let top = 0, left = 0, bottom = n - 1, right = m - 1;

  // Loop until all elements are not traversed.
  while (top <= bottom && left <= right) {
    // For moving left to right
    for (let i = left; i <= right; i++)
      ans.push(matrix[top][i]);

    top++;

    // For moving top to bottom.
    for (let i = top; i <= bottom; i++)
      ans.push(matrix[i][right]);

    right--;

    // For moving right to left.
    if (top <= bottom) {
      for (let i = right; i >= left; i--)
       ans.push(matrix[bottom][i]);

      bottom--;
    }

    // For moving bottom to top.
    if (left <= right) {
      for (let i = bottom; i >= top; i--)
        ans.push(matrix[i][left]);

      left++;
    }
  }
  return ans;
};
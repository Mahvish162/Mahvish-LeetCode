/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    let n=nums.length

    //BRUTE FORCE->
    // TC-> O(N2)
    // SC->O(1)
    // We can also try sorting then finding the duplicate as a brute force which takes o(n logn) time complexity
    // for(let i=0;i<n;i++){
    //     let count=0;
    //     for(let j=0;j<n;j++){
    //         if(nums[i]==nums[j]){
    //             count++;
    //         }
    //     }
    //     if(count>=2){
    //         return nums[i];
    //         break;
    //     }
    // }  

    // BETTER ----------------> USING FREQUENCY ARRAY

    // let freq=new Array(n+1).fill(0)

    // for(let i=0;i<n;i++){
    //     if(freq[nums[i]]==0){
    //         freq[nums[i]]+=1;
    //     }
    //     else{
    //         return nums[i];
    //     }
    // }
    // return 0;

    // OPTIMAL APPROACH------> using hare and tortoise method

    let slow=nums[0];
    let fast=nums[0];

    do{
        slow=nums[slow]
        fast=nums[nums[fast]]
    }while(slow!=fast)

    fast=nums[0];
    while(fast!=slow){
        fast=nums[fast];
        slow=nums[slow];
    }
    return fast;





};
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //
    nums1.splice(m, nums1.length-m);
    nums2.splice(n, nums2.length-n);

    // Concat the 2 arrays and then sort
    const result = nums1.concat(nums2);
    console.log(result.sort());

};



var nums1 = [1,2,3,7,0,0,0,0,0], m = 4, nums2 = [2,5,6,1,0,0], n = 3;
merge(nums1, m, nums2, n);

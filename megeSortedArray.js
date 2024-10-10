var merge = function (nums1, m, nums2, n) {
  j = m;
  for (let i = 0; i < m + n; i++) {
    if (j < m + n) {
      nums1[j] = nums2[i];
      j++;
    }
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));




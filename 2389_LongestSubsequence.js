function maximumSubsequence(nums, queries) {
  const answer = [];

  // sort the nums array in non-descending order
  nums.sort((a, b) => a - b);

  for (const query of queries) {
    let left = 0;
    let right = nums.length - 1;

    // binary search for the maximum size of the subsequence
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      let sum = 0;
      for (let i = 0; i <= mid; i++) {
        sum += nums[i];
      }
      if (sum <= query) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    answer.push(left);
  }

  return answer;
}

const nums = [4, 5, 2, 1];
const queries = [3, 10, 21];

console.log(maximumSubsequence(nums, queries));

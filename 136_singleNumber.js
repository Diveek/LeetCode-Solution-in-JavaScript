//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

const singleNumber = (nums) => {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(result, nums[i]);
    result ^= nums[i];
  }

  console.log(result);
};
singleNumber([1, 2, 4, 2, 1]);

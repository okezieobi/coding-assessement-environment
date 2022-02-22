function twoSums(nums = [], target = 0) {
  // const result = [];
  // nums.forEach((value, index, array = []) => {
  //   const nextIndex = array
  //     .findIndex((val, ind) => val + value === target && ind !== index);
  //   if (nextIndex > 0) result.push(index, nextIndex);
  //   array.splice(index, nextIndex);
  // });
  // return result;

  return nums
    .map((value, index, array) => array
      .findIndex((val, ind) => val + value === target && index !== ind))
    .filter((val) => val !== -1);
}

console.log(twoSums([3, 2, 4], 6));

function twoSums(nums = [], target = 0) {
  // const result = [];
  // nums.forEach((value, index, array = []) => {
  //   const nextIndex = array
  //     .findIndex((val, ind) => val + value === target && ind !== index);
  //   if (nextIndex > 0) result.push(index, nextIndex);
  //   array.splice(index, nextIndex);
  // });
  // return result;

  // return nums
  //   .map((value, index, array) => array
  //     .findIndex((val, ind) => val + value === target && index !== ind))
  //   .filter((val) => val !== -1);

  // const result = [];
  // for (let index = 0; index < nums.length; index += 1) {
  //   for (let ind = 0; ind < nums.length; ind += 1) {
  //     if (nums[index] + nums[ind] === target && index !== ind) {
  //       if (result.length === 2) break;
  //       else result.push(index, ind);
  //     }
  //   }
  // }
  // return result;

  // const hash = {};
  // let result;
  // for (let index = 0; index < nums.length; index += 1) {
  //   const prop = nums[index];
  //   if (hash[prop]) result = [+hash[prop], index];
  //   else hash[target - prop] = `${index}`;
  // }
  // return result;

  const hash = {};
  let result;
  nums.forEach((value, index) => {
    if (hash[value]) result = [+hash[value], index];
    else hash[target - value] = `${index}`;
  });
  return result;
}

// eslint-disable-next-line no-console
console.log(twoSums([3, 2, 4], 6));

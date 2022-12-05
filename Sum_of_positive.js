function Sum_positive(arr) {
  let initialValue = 0;

  return arr.filter((ele) => ele > 0).reduce((acc, currenr) => acc + currenr);
}

console.log(Sum_positive([-5, 5, -10, 5]));

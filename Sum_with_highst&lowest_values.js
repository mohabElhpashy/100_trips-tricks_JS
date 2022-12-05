function Sum_with_highst_lowest_values(arr) {
  return arr
    .filter((ele) => ele != Math.max(...arr) && ele != Math.min(...arr))
    .reduce((prev, next) => prev + next);
}
console.log(Sum_with_highst_lowest_values([1, 2, 2, 2, 2, 2, 10]));

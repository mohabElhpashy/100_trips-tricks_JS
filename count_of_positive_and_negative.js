function count_of_posi_and_negative(arr) {
  let positiveArray = arr.filter((x) => x > 0).length;
  let negativeArray = arr
    .filter((x) => x < 0)
    .reduce((prec, cuur) => prec + cuur);
  return [positiveArray, negativeArray];
}
console.log(count_of_posi_and_negative([1, 1, 1, 1, 1, -1, -2]));

function conver_num_to_reversed_arr(number) {
  //switch numbers to string
  //split string with "" to push to newArr
  //change type to number
  //reverse array

  return number
    .toString()
    .split("")
    .map((n) => Number(n ))
    .reverse();
}

console.log(conver_num_to_reversed_arr(567));

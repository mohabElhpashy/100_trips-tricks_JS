function Double_char(Str) {
  return Str.split("")
    .map((str) => str.repeat(2))
    .join("");
}
console.log(Double_char("mohab"));

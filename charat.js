function charAt(name) {
  return name.charAt(0) === "R" || name.charAt(0) === "r"
    ? "playes panjo"
    : "doesn't play panjo";
}

console.log(charAt("rani"));

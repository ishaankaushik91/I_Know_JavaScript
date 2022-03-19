// Printing Pattern (RECURSION)
Pattern(0);

function Done(start, end, str) {
  if (start <= end) {
    str += "*";
    return Done(start + 1, end, str);
  }
  console.log(str);
}

function Pattern(num) {
  if (num < 5) {
    Done(0, num, "");
    return Pattern(num + 1);
  }
}

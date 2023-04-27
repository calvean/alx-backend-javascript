export default function cleanSet(set, startString) {
  let str = "";
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      str += value.slice(startString.length) + "-";
    }
  });
  return str.slice(0, -1);
}

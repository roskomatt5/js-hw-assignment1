//Kata JS "Mumbling"
function accum(s) {
  let re_string = [];
  let new_str = "";
  for (let i = 0; i < s.length; i++) {
    let rep_char = s[i].repeat(i + 1);
    re_string.push(
      rep_char.charAt(0).toUpperCase() + rep_char.slice(1).toLowerCase()
    );
    re_string[i] = re_string[i][0].toUpperCase() + re_string[i].slice(1);
    new_str = re_string.join("-");
  }
  return new_str;
}

let test_string = "ZpglnRxqenU";

let res = accum(test_string);

console.log(res);

//Find the odd Int
function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    let filteredArray = arr.filter((element) => element === arr[i]);
    if (filteredArray.length % 2 !== 0) return arr[i];
  }
}

let test = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

let occurrences = findOdd(test);

console.log(occurrences);

//Who likes it??
function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

let test_names = [];

let res = likes(test_names);

console.log(res);

//Which are in?/
let a1 = ["arp", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
function inArray(array1, array2) {
  let arr_to_str = array2.join(" ");
  let new_arr = [];
  for (let i = 0; i < array1.length; i++) {
    if (arr_to_str.search(array1[i]) >= 0) {
      new_arr.push(array1[i]);
    }
  }
  new_arr.sort();

  console.log(new_arr);
  return new_arr;
}
let res = inArray(a1, a2);

console.log(res);

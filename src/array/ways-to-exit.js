let numbers = ["1", "2", "3", "4", "5"];

//===>>> Break keyword

for (const num of numbers) {
  console.log(num);
  if (num === "2") {
    break;
  }
}

/*  console output
1
2 */

//===>>> Some Method

numbers.some((num) => {
  console.log(num);
  return num == "2";
});

/* console output
1
2
true */

//===>>> Every Method

numbers.every((num) => {
  console.log(num);
  return num == "2";
});

/* console output
1
false */

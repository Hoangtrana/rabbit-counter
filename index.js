//document.getElementById("count-el").innerText = 5;

// create a variable myAge

// ctrl + k + c = all comment
// initiaze the count as 0

let today = new Date().toLocaleString();
let countEl = document.getElementById("count-el");
console.log(countEl);
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

let previousEl = document.getElementById("previousEl");
let sum = document.getElementById("sum");
let myArray = [];
function save() {
  let countSave = " \n" + today + ", " + count + " - ";
  previousEl.innerText += countSave;

  myArray.push(count);
  console.log(myArray);
  let countSum = myArray.reduce(function (current, present) {
    return current + present;
  }, 0);
  sum.textContent = "SUM: " + countSum;
  count = 0;
  countEl.innerText = count;
}

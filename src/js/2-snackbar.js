import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

let picker = flatpickr('#datetime-picker', {
  defaultDate: new Date(1991, 7, 19),
  minuteIncrement: 1,
  onClose(selectedDates) {
    flarpickrClosed(selectedDates);
  },
});

function flarpickrClosed(selectedDates) {
  let date = selectedDates[0];
  let dateStr = (date.getFullYear().toString() + (date.getMonth() + 1) + date.getDate());
  let sum1 = [
    ...dateStr,
  ].reduce((a, b) => a + +b, 0);
  console.log(date.getFullYear().toString() + (date.getMonth() + 1) + date.getDate());
  console.log(sum1);
  let sum2 = [...sum1.toString()].reduce((a, b) => +a + +b, 0);
  console.log(sum2);
  let num2Minus2 = sum1 - 2;
  console.log("2");
  console.log(num2Minus2);
  let summinus2 = Math.floor(num2Minus2 / 10) + (num2Minus2 % 10);
  console.log(summinus2)
  let fullstr =
   dateStr +
   sum1.toString() +
   sum2.toString() +
   "2" +
   num2Minus2.toString() +
   summinus2.toString();
  console.log(fullstr);
  let str = fullstr;
  let data = Array.from({ length: 9 }, (_, i) =>
    (i + 1).toString().repeat([...str].filter(d => d == i + 1).length)
  );

  let matrix = [];
  for (let i = 0; i < 3; i++) {
    matrix.push(data.slice(i * 3, i * 3 + 3));
  }

  // Transpose the matrix (swap rows and columns)
  let transposed = matrix[0].map((_, colIndex) =>
    matrix.map(row => row[colIndex])
  );

  // Flatten back to 1D array
  let newData = transposed.flat();

  // Insert into HTML
  let grid = document.querySelector('.grid');
  grid.innerHTML = newData
    .map(num => `<div class="cell">${num}</div>`)
    .join('');
}

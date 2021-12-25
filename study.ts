// Import stylesheets
import './style.css';

const appDiv: HTMLElement = document.getElementById('appy');
appDiv.innerHTML = `<h1>TypeScript</h1>`;

function myfn1(arg1) {
  return function myfn2(arg2) {
    return arg2 + 10;
  };
}

let result1 = myfn1(5);
let result2 = myfn1(5)(10);

console.log(result1);
console.log(result2);
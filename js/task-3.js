function getElementWidth(content, padding, border) {
  let contentNumber = parseFloat(content);
  let paddingNumber = parseFloat(padding);
  let borderNumber = parseFloat(border);
  return contentNumber + (paddingNumber + borderNumber) * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

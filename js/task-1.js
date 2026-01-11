const quantity = 5;
const pricePerDroid = 3000;

function makeTransaction1(quantity, pricePerDroid) {
  let totalPrice = quantity * pricePerDroid;
  console.log("🚀 ~ makeTransaction ~ totalPrice:", totalPrice);
  const message =
    "You ordered " + quantity + " droids worth " + totalPrice + " credits!";
  console.log(message);
}
makeTransaction1(quantity, pricePerDroid);

function makeTransaction2(quantity, pricePerDroid) {
  let totalPrice = quantity * pricePerDroid;
  console.log("🚀 ~ makeTransaction ~ totalPrice:", totalPrice);

  console.log(
    "You ordered %s droids worth %s credits!",
    quantity,
    pricePerDroid
  );
}
makeTransaction2(quantity, pricePerDroid);

function makeTransaction2(quantity, pricePerDroid) {
  let totalPrice = quantity * pricePerDroid;
  console.log("🚀 ~ makeTransaction ~ totalPrice:", totalPrice);

  console.log(
    "You ordered %f droids worth %f credits!",
    quantity,
    pricePerDroid
  );
}
makeTransaction2(quantity, pricePerDroid);

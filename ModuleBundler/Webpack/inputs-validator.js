export const inputsValidator = (...number) => {
  number.every((num) => typeof num === "number" && !isNaN(num));
};

/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {numer} Total price
 */

// Lo anterior es un comentario de la funcion
export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum.toFixed(2);
};

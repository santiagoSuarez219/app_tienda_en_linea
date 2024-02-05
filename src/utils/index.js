/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {numer} Total price
 */

// Lo anterior es un comentario de la funcion
const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum.toFixed(2);
};

/**
 * This function selects an image according to the category of the article.
 * @param {String} category name of the category
 * @returns {String} url of the image
 */

const selectImage = (category) => {
  if (category === "men's clothing") {
    return "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  }
  if (category === "jewelery") {
    return "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  }
  if (category === "electronics") {
    return "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  }
  if (category === "women's clothing") {
    return "https://images.pexels.com/photos/3586020/pexels-photo-3586020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  }
  return "https://images.pexels.com/photos/10850828/pexels-photo-10850828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
};

export { totalPrice, selectImage };

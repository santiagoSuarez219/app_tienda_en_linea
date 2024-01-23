import { useContext } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";
import { AppContext } from "../../AppContext";

const Card = (data) => {
  const {
    setCount,
    count,
    openProductDetail,
    setProductToShow,
    setCartProducts,
    cartProducts,
    openCheckoutSideMenu,
    closeProductDetail,
  } = useContext(AppContext);

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation(); // Evita que se propague el evento, es decir, que no se ejecute el evento del padre
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
    closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-card-color text-green-color w-9 h-9 rounded-full m-2 p-1">
          <HiCheck className="h-6 w-6" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-card-color text-green-color w-9 h-9 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data.data)}
        >
          <HiOutlinePlus className="h-6 w-6" />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-card-color cursor-pointer w-full mx-auto rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-[192px]">
        <span className="absolute top-0 left-0 bg-card-color rounded-lg text-green-color text-base font-normal m-2 px-3 py-0.5">
          {data.data.category}
        </span>
        <span className="absolute bottom-0 right-0 bg-card-color rounded-lg text-green-color text-xl md:text-lg font-semibold m-2 px-3 py-0.5">
          {data.data.price}$
        </span>
        <img
          className="w-full h-full aspect-square object-cover rounded-t-lg"
          src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="text-gray-color pt-1 pb-2 px-2 text-sm font-medium">
        {data.data.title}
      </p>
      {/* <p className="flex gap-2 justify-between px-3 py-3 text-gray-color">
        <span className="text-sm font-light">{data.data.title}</span>
      </p> */}
    </div>
  );
};
export default Card;

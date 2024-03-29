import { useContext } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";
import { AppContext } from "../../AppContext";

const Card = (data) => {
  const {
    openProductDetail,
    setProductToShow,
    setCartProducts,
    cartProducts,
    openCheckoutSideMenu,
    closeProductDetail,
  } = useContext(AppContext);
  const { title, category, price, image } = data.data;

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
  };

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div className="flex absolute bottom-0 md:top-0 right-0 justify-center items-center bg-card-color text-green-color md:w-9 md:h-9 w-8 h-8 rounded-full m-2 p-1">
          <HiCheck className="h-6 w-6" />
        </div>
      );
    } else {
      return (
        <div
          className="flex absolute bottom-0 md:top-0 right-0 justify-center items-center bg-card-color text-green-color md:w-9 md:h-9 w-8 h-8 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data.data)}
        >
          <HiOutlinePlus className="h-6 w-6" />
        </div>
      );
    }
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    setCartProducts([...cartProducts, productData]);
    closeProductDetail();
    openCheckoutSideMenu();
  };

  return (
    <aside
      className="relative w-full md:bg-card-color mx-auto flex md:flex-col cursor-pointer md:rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="w-2/5 md:relative md:w-full md:h-[192px]">
        <img
          className="h-full w-full aspect-square object-cover rounded-lg md:rounded-b-none"
          src={image}
          alt={title}
        />
        {renderIcon(data.data.id)}
        <span className="hidden md:block absolute top-0 left-0 bg-card-color rounded-lg text-green-color text-base font-normal m-2 px-3 py-0.5">
          {category}
        </span>
        <span className="hidden md:block absolute bottom-0 right-0 bg-card-color rounded-lg text-green-color text-xl md:text-lg font-semibold m-2 px-3 py-0.5">
          {price}
        </span>
      </figure>
      <article className="w-3/5 md:w-full text-sm pl-2 text-gray-color">
        <h1 className="md:pt-1 md:pb-2 md:px-2 md:font-medium">{title}</h1>
        <p className="font-bold text-lg md:hidden"> {price} $</p>
        <p className="text-xs text-green-color md:hidden"> {category}</p>
      </article>
    </aside>
  );
};
export default Card;

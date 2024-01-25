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

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
  };

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div className="hidden md:flex absolute top-0 right-0 justify-center items-center bg-card-color text-green-color w-9 h-9 rounded-full m-2 p-1">
          <HiCheck className="h-6 w-6" />
        </div>
      );
    } else {
      return (
        <div
          className="hidden md:flex absolute top-0 right-0 justify-center items-center bg-card-color text-green-color w-9 h-9 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data.data)}
        >
          <HiOutlinePlus className="h-6 w-6" />
        </div>
      );
    }
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
    closeProductDetail();
  };

  return (
    <aside className="relative w-full md:bg-card-color mx-auto flex md:flex-col cursor-pointer md:rounded-lg">
      <figure className="w-2/5 md:relative md:w-full md:h-[192px]">
        <img
          className="h-full w-full aspect-square object-cover rounded-lg md:rounded-b-none"
          src={selectImage(data.data.category)}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
        <span className="hidden md:block absolute top-0 left-0 bg-card-color rounded-lg text-green-color text-base font-normal m-2 px-3 py-0.5">
          {data.data.category}
        </span>
        <span className="hidden md:block absolute bottom-0 right-0 bg-card-color rounded-lg text-green-color text-xl md:text-lg font-semibold m-2 px-3 py-0.5">
          {data.data.price}
        </span>
      </figure>
      <article className="w-3/5 md:w-full text-sm pl-2 text-gray-color">
        <h1 className="md:pt-1 md:pb-2 md:px-2 md:font-medium">
          {data.data.title}
        </h1>
        <p className="font-bold text-lg md:hidden"> {data.data.price} $</p>
        <p className="text-xs text-green-color md:hidden">
          {" "}
          {data.data.category}
        </p>
      </article>
      <div
        className="md:hidden absolute bottom-0 right-0 flex justify-center items-center bg-card-color text-green-color w-9 h-9 rounded-full p-1"
        onClick={(event) => addProductsToCart(event, data.data)}
      >
        <HiOutlinePlus className="h-6 w-6" />
      </div>
    </aside>
  );
};
export default Card;

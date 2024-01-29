import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
import { totalPrice } from "../../utils";
import { AppContext } from "../../AppContext";
import OrderCard from "../OrderCard";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
    setSearchByTitle,
    setSearchByCategory,
  } = useContext(AppContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder([...order, orderToAdd]);
    closeCheckoutSideMenu();
    setCartProducts([]);
    setSearchByTitle(null);
    setSearchByCategory(null);
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } w-full md:w-[360px] h-[calc(100vh-72px)] flex flex-col fixed right-0 top-[72px] border border-gray-color rounded-lg bg-card-color overflow-y-auto`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg md:text-xl text-gray-color">
          My Order
        </h2>
        <div>
          <HiOutlineX
            className="h-6 w-6 text-gray-color cursor-pointer"
            onClick={() => {
              closeCheckoutSideMenu();
            }}
          />
        </div>
      </div>
      <div className="px-6 overflow-visible">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 py-4 text-gray-color">
        <p className="flex justify-between items-center">
          <span className="text-lg">Total:</span>
          <span className="font-semibold text-green-color text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to="my-orders/last">
          <button
            className="mt-2 bg-green-color py-3 text-white font-medium w-full rounded-lg"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};
export default CheckoutSideMenu;

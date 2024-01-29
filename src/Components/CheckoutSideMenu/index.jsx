import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { HiOutlineX } from "react-icons/hi";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
  } = useContext(AppContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredProducts);
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
      </div>
    </aside>
  );
};
export default CheckoutSideMenu;

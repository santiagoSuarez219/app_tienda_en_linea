import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { HiOutlineX } from "react-icons/hi";
import OrderCard from "../OrderCard";

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } =
    useContext(AppContext);
  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } w-full md:w-[360px] h-[calc(100vh-72px)] flex flex-col fixed right-0 top-[72px] border border-gray-color rounded-lg bg-card-color overflow-y-auto `}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg md:text-xl">My Order</h2>
        <div>
          <HiOutlineX
            className="h-6 w-6 text-white cursor-pointer"
            onClick={() => {
              closeCheckoutSideMenu();
            }}
          />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};
export default CheckoutSideMenu;

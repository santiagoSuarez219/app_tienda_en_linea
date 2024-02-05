import { useContext } from "react";
import { BiSolidShoppingBag } from "react-icons/bi";
import { AppContext } from "../../AppContext";

const CardButton = () => {
  const { openCheckoutSideMenu, cartProducts } = useContext(AppContext);
  return (
    <div className="w-12 h-12 bg-green-color text-sm fixed bottom-4 right-4 rounded-full p-2 flex items-center lg:hidden">
      <BiSolidShoppingBag
        className="w-full h-full text-white"
        onClick={() => openCheckoutSideMenu()}
      />
      <p className="absolute right-0 top-0 bg-card-color w-5 h-5 rounded-full flex items-center justify-center text-gray-color">
        {cartProducts.length}
      </p>
    </div>
  );
};
export default CardButton;

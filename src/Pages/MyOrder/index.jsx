import { useContext } from "react";
import { Link } from "react-router-dom";
import Layaout from "../../Components/Layaout";
import { AppContext } from "../../AppContext";
import OrderCard from "../../Components/OrderCard";
import { HiOutlineChevronLeft } from "react-icons/hi";

const MyOrder = () => {
  const { order } = useContext(AppContext);

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = order?.length - 1;

  return (
    <Layaout>
      <div className="w-full flex items-center justify-center relative md:w-80 md:mb-6 mb-4">
        <Link to="/my-orders" className="absolute md:left-0 left-4">
          <HiOutlineChevronLeft className="h-6 w-6 text-gray-color cursor-pointer" />
        </Link>
        <h1 className="text-xl text-gray-color font-semibold">MyOrder</h1>
      </div>
      <div className="flex flex-col md:w-96 w-full px-4">
        {order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>
    </Layaout>
  );
};
export default MyOrder;

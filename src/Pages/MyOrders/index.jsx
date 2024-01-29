import { useContext } from "react";
import { Link } from "react-router-dom";
import Layaout from "../../Components/Layaout";
import { AppContext } from "../../AppContext";
import OrdersCard from "../../Components/OrdersCard";

const MyOrders = () => {
  const context = useContext(AppContext);
  return (
    <Layaout>
      <div className="flex items-center justify-center relative w-full md:w-96">
        <h1 className="text-xl text-gray-color font-semibold mb-6">
          My Orders
        </h1>
      </div>
      <div className="w-full px-4 md:px-0 md:flex flex-col justify-center items-center">
        {context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </div>
    </Layaout>
  );
};
export default MyOrders;

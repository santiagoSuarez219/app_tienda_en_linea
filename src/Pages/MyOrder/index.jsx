import { useContext } from "react";
import Layaout from "../../Components/Layaout";
import { AppContext } from "../../AppContext";
import OrderCard from "../../Components/OrderCard";

const MyOrder = () => {
  const { order } = useContext(AppContext);

  return (
    <Layaout>
      <h1 className="text-xl text-gray-color font-semibold">MyOrder</h1>
      <div className="flex flex-col w-96">
        {order?.slice(-1)[0].products.map((product) => (
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

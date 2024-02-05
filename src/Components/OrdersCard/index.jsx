import { HiOutlineChevronRight } from "react-icons/hi";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  return (
    <div className="w-full flex justify-between items-center mb-3 border text-gray-color border-gray-color rounded-lg p-4 md:w-96">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01.02.23</span>
          <span className="font-semibold">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl text-green-color">
            ${totalPrice}
          </span>
          <HiOutlineChevronRight className="h-6 w-6 text-gray-color cursor-pointer" />
        </p>
      </div>
    </div>
  );
};
export default OrdersCard;

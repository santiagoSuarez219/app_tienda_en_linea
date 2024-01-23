import { HiOutlineX } from "react-icons/hi";

const OrderCard = (props) => {
  const { title, imageUrl, price } = props;
  return (
    <div className="flex justify-between items-center md:mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20 aspect-square object-cover">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-xs md:text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-base md:text-lg font-medium">{price}</p>
        <HiOutlineX className="h-6 w-6 text-white cursor-pointer" />
      </div>
    </div>
  );
};
export default OrderCard;

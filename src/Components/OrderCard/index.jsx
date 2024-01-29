import { HiOutlineX } from "react-icons/hi";

const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;
  return (
    <div className="flex justify-between items-center mb-3 text-gray-color">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20 aspect-square object-cover">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <article className="flex flex-col gap-1">
          <p className="text-xs md:text-sm font-light">{title}</p>
          <p className="text-base md:text-lg font-semibold text-green-color">
            {price + " $"}
          </p>
        </article>
      </div>
      <div className="items-center gap-2">
        <HiOutlineX
          className="h-6 w-6 cursor-pointer"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  );
};
export default OrderCard;

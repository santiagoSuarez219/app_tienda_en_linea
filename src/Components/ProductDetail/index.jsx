import { useContext } from "react";
import { HiOutlineX } from "react-icons/hi";
import { AppContext } from "../../AppContext";

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(AppContext);
  console.log(productToShow);
  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } w-full md:w-[360px] h-[calc(100vh-72px)] flex-col fixed right-0 border border-gray-color rounded-lg bg-card-color overflow-y-auto z-20`}
    >
      <div className="flex justify-between items-center p-4 lg:p-6">
        <h2 className="font-medium text-lg lg:text-xl">Detail</h2>
        <div>
          <HiOutlineX
            className="h-6 w-6 text-white cursor-pointer"
            onClick={() => closeProductDetail()}
          />
        </div>
      </div>
      <figure className="px-4 h-1/2 lg:px-6">
        <img
          className="w-full h-full rounded-lg aspect-square object-cover"
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-4 lg:p-6 ">
        <span className="font-medium text-xl lg:text-2xl mb-1 lg:mb-2">
          ${productToShow.price}
        </span>
        {/* <span className="font-medium text-sm lg:text-md">
          {productToShow.title}
        </span> */}
        <span className="font-light text-xs lg:text-sm">
          {productToShow.description}
        </span>
      </p>
    </aside>
  );
};
export default ProductDetail;

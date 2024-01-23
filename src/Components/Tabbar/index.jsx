import { BiSolidShoppingBag } from "react-icons/bi";

const Tabbar = () => {
  return (
    <div className="w-12 h-12 bg-green-color text-sm fixed bottom-4 right-4 rounded-full p-2 flex items-center">
      <BiSolidShoppingBag className="w-full h-full text-white" />
    </div>
  );
};
export default Tabbar;

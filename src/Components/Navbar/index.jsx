import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { BiSolidShoppingBag } from "react-icons/bi";
import { AppContext } from "../../AppContext";

const Navbar = () => {
  const { count, openCheckoutSideMenu } = useContext(AppContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuTablet, setOpenMenuTablet] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((state) => !state);
    setOpenMenuTablet((state) => !state);
  };

  return (
    <nav className="w-full px-4 md:px-6 py-4 lg:py-5 fixed top-0 ">
      <ul className="flex justify-between md:justify-between items-center lg:justify-start">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li
          className="w-10 h-10 bg-green-color rounded-lg p-2 cursor-pointer transition-all z-40 lg:hidden md:order-3"
          onClick={toggleMenu}
        >
          {openMenu ? (
            <BiX className="w-full h-full text-white" />
          ) : (
            <BiMenu className="w-full h-full text-white" />
          )}
        </li>
        <ul
          className={`fixed inset-0 bg-menu-color px-[5%] flex flex-col gap-4 justify-center items-center clip-circle-0 ${
            openMenu && `clip-circle-full`
          } transition-[clip-path] duration-500 z-20 md:clip-circle-full md:relative md:flex-row md:bg-transparent md:px-4 lg:w-full md:text-sm`}
        >
          <li>All</li>
          <li>Clothes</li>
          <li>Electronics</li>
          <li>Furnitures</li>
          <li>Toys</li>
          <li>Other</li>
          <div
            className={`w-full border-t lg:border-t-0 flex lg:flex-row  flex-col gap-4 items-center justify-center pt-4 lg:flex lg:justify-end md:border-t-0 md:fixed lg:relative md:w-auto lg:w-full md:top-16 lg:top-0 md:right-4 lg:right-0 md:bg-card-color lg:bg-transparent md:p-4 lg:p-0 md:rounded-lg ${
              !openMenuTablet && `md:hidden`
            }`}
          >
            <li>MyOrders</li>
            <li>MyAccount</li>
            <li>SignIn</li>
            <div className="hidden lg:block p-2 bg-green-color rounded-full">
              <BiSolidShoppingBag
                className=" text-white"
                onClick={() => openCheckoutSideMenu()}
              />
              <p className="absolute -right-3 -top-1 bg-card-color w-5 h-5 rounded-full flex items-center justify-center text-gray-color">
                {count}
              </p>
            </div>
          </div>
        </ul>
      </ul>
    </nav>
    // <nav className="flex justify-between items-center fixed top-0 w-full text-sm font-light px-8 py-5">
    //   <ul className="flex items-center gap-3">
    //     <li className="font-semibold text-lg">
    //       <NavLink to="/">Shopi</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/">All</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/clothes">Clothes</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/electronics">Electronics</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/furnitures">Furnitures</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/toys">Toys</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/others">Other</NavLink>
    //     </li>
    //   </ul>
    //   <ul className="flex items-center gap-3">
    //     <li>santiago8628@gmail.com</li>
    //     <li>
    //       <NavLink to="/">My Orders</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/">My Account</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/">Sign In</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/">Carrito</NavLink>
    //     </li>
    //   </ul>
    // </nav>
  );
};
export default Navbar;

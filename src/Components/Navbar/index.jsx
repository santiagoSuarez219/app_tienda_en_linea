import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";

const stylesIcons = "w-full h-full text-white";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="w-full px-4 py-4 lg:px-8 lg:py-5 fixed top-0 ">
      <ul className="flex justify-between items-center">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li
          className="w-10 h-10 bg-green-color rounded-lg p-2 cursor-pointer transition-all z-40"
          onClick={() => {
            setOpenMenu((state) => !state);
          }}
        >
          {openMenu ? (
            <BiX className={stylesIcons} />
          ) : (
            <BiMenu className={stylesIcons} />
          )}
        </li>
      </ul>
      <ul
        className={`fixed inset-0 bg-menu-color px-[5%] flex flex-col gap-6 items-center justify-center clip-circle-0 ${
          openMenu && "clip-circle-full"
        } transition-[clip-path] duration-500 z-20`}
      >
        <li>All</li>
        <li>Clothes</li>
        <li>Electronics</li>
        <li>Furnitures</li>
        <li>Toys</li>
        <li>Other</li>
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

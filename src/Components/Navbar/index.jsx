import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed top-0 w-full text-sm font-light px-8 py-5">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/clothes">Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/electronics">Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/furnitures">Furnitures</NavLink>
        </li>
        <li>
          <NavLink to="/toys">Toys</NavLink>
        </li>
        <li>
          <NavLink to="/others">Other</NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>santiago8628@gmail.com</li>
        <li>
          <NavLink to="/">My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/">Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/">Carrito</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

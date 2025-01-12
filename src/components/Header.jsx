//context
import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/context";

//MUI icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

//router
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { cart, isAuthenticated, setIsAuthenticated } =
    useContext(GlobalContext);
  const location = useLocation();

  // Sidebar state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="relative flex items-center h-14 px-4 mb-2 bg-white shadow-md">
      <div className="flex items-center flex-1">
        <MenuIcon
          className="text-black cursor-pointer mr-4"
          style={{ fontSize: 32 }}
          onClick={toggleMenu}
        />
        <NavLink
          to="/"
          className={
            location.pathname.includes("/cart")
              ? `text-xl md:text-3xl md:mt-2`
              : `text-xl md:text-2xl md:mt-2`
          }
        >
          GoodsHub
        </NavLink>
      </div>

      {!isAuthenticated && !location.pathname.includes("/authentication") && (
        <NavLink
          className={
            "border border-gray-300 hover:bg-gray-200 rounded-md px-4 py-1" +
            (!location.pathname.includes("/cart") ? `sm:mr-7 ` : `sm:mr-0`)
          }
          to="/authentication"
        >
          Sign In
        </NavLink>
      )}
      {!location.pathname.includes("/cart") && (
        <NavLink to="/cart" className="mr-1 sm:mr-3 ml-5">
          <div className="relative">
            <ShoppingCartIcon className="text-black" style={{ fontSize: 32 }} />
            {cart.length > 0 && (
              <div className="absolute left-1.5 -top-1 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
                {cart.length}
              </div>
            )}
          </div>
        </NavLink>
      )}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-700 text-white transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 z-20`}
      >
        <div className="flex justify-end items-center p-4 border-b border-gray-700">
          <button
            className="text-gray-300 hover:text-white"
            onClick={toggleMenu}
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 pt-0">
          <NavLink to="/" className="hover:text-gray-300" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className="hover:text-gray-300"
            onClick={toggleMenu}
          >
            Profile
          </NavLink>
          <NavLink
            to="/orders"
            className="hover:text-gray-300"
            onClick={toggleMenu}
          >
            Previous Orders
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-gray-300"
            onClick={toggleMenu}
          >
            About
          </NavLink>
          {isAuthenticated && (
            <button
              onClick={() => setIsAuthenticated(false)}
              className={
                "border border-gray-300 hover:bg-gray-200 rounded-md px-4 py-1" +
                (!location.pathname.includes("/cart") ? `sm:mr-7 ` : `sm:mr-0`)
              }
            >
              Sign Out
            </button>
          )}
        </nav>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}

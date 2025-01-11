//context
import { useContext } from "react";
import { GlobalContext } from "../contexts/context";

//MUI icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { cart } = useContext(GlobalContext);
  // Cheks whether cart is open to avoid showing cart icon
  const location = useLocation();
  return (
    <header className="flex justify-between items-center h-10 px-4">
      <div className="flex-1 text-center">
        <h1
          className={
            location.pathname.includes("/cart")
              ? `text-xl md:text-3xl md:mt-2`
              : `ml-16 sm:ml-24 text-xl md:text-2xl md:mt-2`
          }
        >
          GoodsHub
        </h1>
      </div>
      {!location.pathname.includes("/cart") && (
        <NavLink to="/cart" className="mt-4 ml-5 sm:ml-10">
          <div className="relative">
            <ShoppingCartIcon className="text-black" style={{ fontSize: 32 }} />
            {cart.length > 0 && (
              <div className="absolute left-1.5 -top-2 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
                {cart.length}
              </div>
            )}
          </div>
        </NavLink>
      )}
    </header>
  );
}

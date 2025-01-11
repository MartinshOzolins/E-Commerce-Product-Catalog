//context
import { useContext } from "react";
import { GlobalContext } from "../contexts/context";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { cart } = useContext(GlobalContext);
  // const filterArray = () => {
  //   if (cart.length === 0 || cart.length === 1) return;
  //   let filteredArray = [];
  //   cart.forEach((product) => {});
  // };
  // const filteredArray = filterArray() || [];
  const filteredArray = [];

  return (
    <div className="w-full flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl font-bold ">Your Cart</h1>
      <h2 className="text-lg mb-4">Items: {cart.length}</h2>
      <div
        className={
          `w-full flex justify-center md:justify-start` + cart.length === 0
            ? "justify-center"
            : null
        }
      >
        <NavLink to="/" className="bg-gray-500 text-white px-4 py-2 rounded">
          Continue Shopping
        </NavLink>
      </div>
      {filteredArray.length === 0 ? (
        <div className="flex flx-col items-center justify-center">
          <p className="text-lg my-5">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 mt-8">
          {/* Products Section */}
          <div className="flex flex-col">
            {filteredArray.map((product) => (
              <div
                className="flex flex-row items-center border-b pb-4 mb-4"
                key={product.id}
              >
                <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      product.images?.[0]?.includes("any")
                        ? "../public/default.webp"
                        : product.images?.[0]?.replace(/[["\]]/g, "") ||
                          "../public/default.webp"
                    }
                    alt={product.title}
                  />
                </div>
                <div className="h-full flex flex-col ml-4 text-sm items-start justify-start">
                  <p className="font-medium">{product.title}</p>
                  <p className="text-gray-500 text-xs">${product.price}</p>
                  <div className="place-self-end flex flex-col">
                    <p>
                      Quantity:
                      <input value={1} className="ml-1 w-5" />
                    </p>
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center p-4 border rounded-md shadow-sm max-h-64 ">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            <p className="mb-2">
              Subtotal:{" "}
              <span className="font-medium">
                {cart
                  .reduce((sum, product) => sum + product.price, 0)
                  .toFixed(2)}
                $
              </span>
            </p>
            <p className="mb-2">Estimated Shipping: 2.00$</p>
            <p className="mb-4">
              Estimated Total:{" "}
              <span className="font-bold">
                {(
                  cart.reduce((sum, product) => sum + product.price, 0) + 2
                ).toFixed(2)}
                $
              </span>
            </p>
            <button className="bg-gray-500 text-white px-4 py-2 rounded">
              Checkout Securely
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

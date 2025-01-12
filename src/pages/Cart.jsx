import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/context";
import { NavLink } from "react-router-dom";

// MUI icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Cart() {
  const { cart, setCart } = useContext(GlobalContext);
  const [filteredArray, setFilteredArray] = useState([]);

  // Merge identical items in the cart (runs whenever the cart is updated)
  const mergeCart = (cart) => {
    const mergedArray = [];
    cart.forEach((product) => {
      // Cheks whether items already exists in mergedArray
      const existingProduct = mergedArray.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        mergedArray.push({ ...product, quantity: 1 });
      }
    });
    return mergedArray;
  };

  // Updates filteredArray whenever the cart changes
  useEffect(() => {
    setFilteredArray(mergeCart(cart));
  }, [cart]);

  //Handles increment
  const handleIncrement = (productToIncrement) => {
    setCart(() => {
      let newArray = [];
      // Loops through filteredArray
      filteredArray.forEach((product) => {
        // Finds product to increment
        if (product.id === productToIncrement.id) {
          // Retrieves count of repeated products
          const count = productToIncrement.quantity + 1;
          for (let i = 0; i < count; i++) {
            //loops count times and adds product as many times as is updated count
            // allowing to merge them again when page re-loads
            newArray.push(product);
          }
        } else {
          const count = product.quantity;
          const updatedProduct = { ...product };
          for (let i = 0; i < count; i++) {
            newArray.push(updatedProduct);
          }
        }
      });
      return newArray;
    });
  };

  // Handles decrement
  const handleDecrement = (productToDecrement) => {
    setCart(() => {
      let newArray = [];
      // Loops through filteredArray
      filteredArray.forEach((product) => {
        // Finds product to decrement and checks whether quantity > 1
        if (product.id === productToDecrement.id && product.quantity > 1) {
          // decrements quantity and returns updated quantity
          const count = productToDecrement.quantity - 1;
          for (let i = 0; i < count; i++) {
            //loops count times and adds product to newArray as many times as is updated count
            // allowing to merge them again when page re-loads
            newArray.push(product);
          }
        } else {
          const count = product.quantity;
          const updatedProduct = { ...product };
          for (let i = 0; i < count; i++) {
            //loops count times and adds product as many times as is updated count
            // allowing to merge them again when page re-loads
            newArray.push(updatedProduct);
          }
        }
      });
      return newArray;
    });
  };

  //

  return (
    <div className="w-full flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl font-bold ">Your Cart</h1>
      <h2 className="text-lg mb-4">
        Items:{" "}
        {filteredArray.reduce(
          (numOfItems, product) => numOfItems + product.quantity,
          0
        )}
      </h2>
      <div
        className={`w-full flex ${
          filteredArray.length === 0
            ? "justify-center"
            : "justify-start md:justify-start"
        }`}
      >
        <NavLink to="/" className="bg-gray-500 text-white px-4 py-2 rounded">
          Continue Shopping
        </NavLink>
      </div>
      {filteredArray.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg my-5">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 mt-8">
          {/* Products Section */}
          <div className="flex flex-col">
            {filteredArray.map((product) => (
              <NavLink key={product.id} to={`/product/${product.id}`}>
                <div className="flex flex-row items-center border-b pb-4 mb-4">
                  <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={
                        product.images?.[0]?.includes("any")
                          ? "/default.webp"
                          : product.images?.[0]?.replace(/[["\]]/g, "") ||
                            "/default.webp"
                      }
                      alt={product.title}
                    />
                  </div>
                  <div className="h-full flex flex-col ml-4 text-sm items-start justify-start">
                    <div className="flex flex-col">
                      <p className="font-medium">{product.title}</p>
                      <p className="text-gray-500 text-xs">${product.price}</p>
                    </div>
                    <div className="flex flex-row items-center ">
                      <div className="flex flex-row items-center">
                        <span>Quantity:</span>
                        <input
                          value={product.quantity}
                          className="ml-1 w-12 text-center border rounded"
                          readOnly
                        />
                        <div className="flex flex-col ml-1">
                          <AddIcon
                            style={{
                              fontSize: 16,
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              handleIncrement(product);
                            }}
                          />
                          <RemoveIcon
                            style={{ fontSize: 16, cursor: "pointer" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              handleDecrement(product);
                            }}
                          />
                        </div>
                      </div>
                      <button
                        className="text-red-500 hover:underline ml-2 mb-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          handleIncrement(product);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center p-4 border rounded-md shadow-sm max-h-64 ">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            <p className="mb-2">
              Subtotal:{" "}
              <span className="font-medium">
                {filteredArray
                  .reduce(
                    (sum, product) => sum + product.price * product.quantity,
                    0
                  )
                  .toFixed(2)}
                $
              </span>
            </p>
            <p className="mb-2">Estimated Shipping: 2.00$</p>
            <p className="mb-4">
              Estimated Total:{" "}
              <span className="font-bold">
                {(
                  filteredArray.reduce(
                    (sum, product) => sum + product.price * product.quantity,
                    0
                  ) + 2
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

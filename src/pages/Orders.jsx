import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../contexts/context";

export default function Orders() {
  const { isAuthenticated, previousOrders } = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-4 py-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Previous Orders
      </h1>

      {/* When not authenticated */}
      {!isAuthenticated ? (
        <div className="text-center">
          <h2 className="text-xl text-gray-600 mb-4">
            Sign In to see Previous orders
          </h2>
          <button
            onClick={() => navigate("/authentication")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </div>
      ) : previousOrders.length === 0 ? (
        // When authenticated but no previous orders
        <div className="text-center">
          <h2 className="text-xl text-gray-600 mb-4">No previous orders</h2>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go to Home
          </button>
        </div>
      ) : (
        // When authenticated and there are previous orders
        <div className="space-y-6">
          {previousOrders.map((order, orderIndex) => (
            <div key={orderIndex} className="border-b-2 pb-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Order #{orderIndex + 1}
              </h3>

              <div className="space-y-2">
                {order.map((product, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-gray-700"
                  >
                    <p>{product.title}</p>
                    <p>
                      {product.quantity} x ${product.price}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-800">
                  Delivery: $2
                </p>
                <p className="text-xl font-bold text-gray-900">
                  Total: $
                  {order.reduce(
                    (accum, product) =>
                      accum + product.quantity * product.price,
                    0
                  ) + 2}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

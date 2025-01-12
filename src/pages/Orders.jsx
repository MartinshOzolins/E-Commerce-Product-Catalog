import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { GlobalContext } from "../contexts/context";

export default function Orders() {
  const { isAuthenticated, previousOrders } = useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin", { replace: true });
    }
  }, [isAuthenticated, navigate, previousOrders]);

  return (
    <div className="flex flex-col px-2">
      <h1 className="text-center">Previous Orders</h1>
      {previousOrders.length === 0 ? (
        <div>
          <h2>No previous orders</h2>
          <button onClick={() => navigate("/signin")}>Go to Home</button>
        </div>
      ) : (
        <div>
          {previousOrders.map((order, orderIndex) => (
            <div key={orderIndex} className="border-b px-1">
              <h3>Order #{orderIndex + 1}</h3>
              {order.map((product, index) => (
                <div key={index}>
                  <p>
                    {product.title} - {product.quantity} x ${product.price}
                  </p>
                </div>
              ))}
              <p>Total:</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import { useState, useEffect, useContext } from "react";

//Global Context
import { GlobalContext } from "../contexts/context";

//react-router-imports
import { useParams } from "react-router-dom";

//custom api call hook
import { useProduct } from "../hooks/useProduct";
//tanstack-query import for accessing useQueryClient
import { useQueryClient } from "@tanstack/react-query";

export default function ProductDetail() {
  const { setCart } = useContext(GlobalContext);

  // Retrieves id from useParams of product that user clicked
  const { id } = useParams();
  // Gets query client instance to get cached data
  const queryClient = useQueryClient();

  // Checks if there are products in cache
  const cachedProduct =
    queryClient
      .getQueryData(["products"])
      ?.find((product) => product.id === Number(id)) || null;

  // State to hold data (if no cachedProduct return null to evoke fetch query)
  const [product, setProduct] = useState(cachedProduct);

  // Query to fetch data if cachedProduct is null (no data found in cache)
  const { data, isError, error, isLoading } = useProduct({
    id: id,
    isEnabled: { enabled: !product },
  });

  // useEffect to update product state when data becomes available
  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  if (isError) {
    return (
      <div className="flex flex-col">
        <p>Error occured: {error?.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <p>Loading product...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4 sm:p-10">
      <h1 className="text-2xl font-bold mb-8">Product Detail</h1>
      {product && (
        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center sm:items-start bg-white rounded-lg shadow-md overflow-hidden">
          <img
            className="w-full sm:w-1/2 h-64 sm:h-auto object-cover"
            onError={(e) => {
              e.target.src = "../public/default.webp";
            }}
            src={
              product.images?.[0].includes("any")
                ? "../public/default.webp"
                : product.images?.[0].replace(/[["\]]/g, "")
            }
            alt={product.title}
          />
          <div className="p-6 flex flex-col justify-between w-full sm:w-1/2">
            <h2 className="text-2xl font-semibold text-center sm:text-left truncate">
              {product.title}
            </h2>
            <p className="text-md text-start sm:text-left mt-3">
              {product.description}
            </p>
            <p className="text-xl text-gray-600 text-center sm:text-start mt-4">
              ${product.price}
            </p>
            <button
              className="mt-3 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => {
                setCart((prev) => [...prev, product]);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

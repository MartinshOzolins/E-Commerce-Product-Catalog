import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { useEffect } from "react";

export default function ProductDetail() {
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
        <p>Loading products...</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Product Detail</h1>
      {product && (
        <div className="flex flex-col items-center">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className="">${product.price}</p>
        </div>
      )}
    </div>
  );
}

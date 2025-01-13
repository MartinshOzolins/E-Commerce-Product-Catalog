import { useEffect, useState } from "react";

//custom hooks for api call
import { useProducts } from "../hooks/useProducts";

//router
import { NavLink } from "react-router-dom";

//components
import FilterSection from "../components/FilterSection";

//context
import { useContext } from "react";
import { GlobalContext } from "../contexts/context";

export default function Home() {
  const { chosenCategory, page, searchInput, setCart } =
    useContext(GlobalContext);
  const { data, isError, error, isLoading } = useProducts();
  const [filteredData, setFilteredData] = useState([]);

  // Function to filter data
  function filterData() {
    if (data) {
      const filtered = data
        .filter(
          (product) => product.title.trim().length > 1 && product.id <= 50
        )
        .filter(
          (product) =>
            chosenCategory === 1 || product.category.id === chosenCategory
        )
        .filter((product) =>
          product.title.toLowerCase().includes(searchInput.trim().toLowerCase())
        );
      setFilteredData(filtered);
    }
  }

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenCategory, page, data, searchInput]);

  // Handles different states of fetching
  if (isError)
    return <p className="text-red-500">{error?.message || "Error occured"}</p>;
  if (isLoading)
    return (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 px-4 justify-center items-center">
        {[...new Array(8)].map((_, index) => (
          <div
            key={index}
            className="w-full h-[340px] flex flex-col max-w-xs bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
          >
            <div className="w-full h-48 bg-gray-300"></div>
            <div className="p-4 flex flex-col items-center">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2 "></div>
              <div className="h-4 bg-gray-300 rounded w-1/3 "></div>
            </div>
            <div className="p-4 flex justify-center">
              <div className="h-10 bg-gray-300 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center py-6 px-4">
      <FilterSection />
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 justify-center items-center">
          {filteredData.map((product) => (
            <NavLink key={product.id} to={`/product/${product.id}`}>
              <div className="w-full h-[340px] flex flex-col max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  onError={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!e.target.src.includes("/default.webp")) {
                      e.target.src = "/default.webp";
                    }
                  }}
                  className="w-full h-48 object-cover"
                  src={
                    product.images?.[0].includes("anyvia")
                      ? "/default.webp"
                      : product.images?.[0].replace(/[["\]]/g, "")
                  }
                  alt={product.title}
                />
                <div className="p-4">
                  <p className="text-center font-semibold text-lg whitespace-nowrap overflow-ellipsis overflow-hidden">
                    {product.title}
                  </p>
                  <p className="text-center text-gray-600 mt-2">
                    ${product.price}
                  </p>
                  <div className="flex justify-center mt-4 justify-self-end">
                    <button
                      className=" px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setCart((prev) => [...prev, product]);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">No products found.</p>
      )}
    </div>
  );
}

import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { GlobalContext } from "../contexts/context";

export default function FilterSection() {
  const { setChosenCategory, searchInput, setSearchInput, chosenCategory } =
    useContext(GlobalContext);

  return (
    <div className="w-52 sm:w-96 flex flex-col sm:flex-row items-end mb-5 items-center justify-center sm:items-end">
      <div className="w-full flex rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 sm:text-md mb-2 sm:mb-0 sm:mr-5">
        <SearchIcon className="text-gray-500" />
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className="ml-1 border-none outline-none focus:ring-0 text-gray-700 placeholder-gray-400 w-36"
          placeholder="Search..."
        />
      </div>
      <div className=" w-full flex flex-col items-center">
        <label
          htmlFor="category"
          className="text-sm font-medium text-gray-700 pl-2 self-start"
        >
          Category
        </label>
        <select
          id="category"
          name="sections"
          className="w-full sm:w-40 mt-1 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-md"
          value={chosenCategory}
          onChange={(e) => setChosenCategory(Number(e.target.value))}
        >
          <option value="1">All</option>
          <option value="2">Electronics</option>
          <option value="3">Furniture</option>
          <option value="4">Shoes</option>
          <option value="5">Miscellaneous</option>
        </select>
      </div>
    </div>
  );
}

import { GlobalContext } from "./context";

import { useState } from "react";

export default function GlobalDataProvider({ children }) {
  //initial state of cart
  const [cart, setCart] = useState([]);
  const [chosenCategory, setChosenCategory] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [previousOrders, setPreviousOrders] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        cart,
        setCart,
        chosenCategory,
        setChosenCategory,
        searchInput,
        setSearchInput,
        setEmail,
        email,
        password,
        setPassword,
        isAuthenticated,
        setIsAuthenticated,
        fullName,
        setFullName,
        previousOrders,
        setPreviousOrders,
        filteredArray,
        setFilteredArray,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// const array = [
//   [
//     {
//       id: 5,
//       title: "Classic Black Hooded Sweatshirt",
//       price: 7999,
//       description:
//         "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.",
//       images: [
//         '["https://i.imgur.com/cSytoSD.jpeg"',
//         '"https://i.imgur.com/WwKucXb.jpeg"',
//         '"https://i.imgur.com/cE2Dxh9.jpeg"]',
//       ],
//       creationAt: "2025-01-12T04:18:26.000Z",
//       updatedAt: "2025-01-12T11:45:13.000Z",
//       category: {
//         id: 1,
//         name: "Clothes",
//         image: "https://i.imgur.com/QkIa5tT.jpeg",
//         creationAt: "2025-01-12T04:18:26.000Z",
//         updatedAt: "2025-01-12T04:18:26.000Z",
//       },
//       quantity: 4,
//     },
//     {
//       id: 6,
//       title: "Classic Comfort Fit Joggers",
//       price: 25,
//       description:
//         "Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.",
//       images: [
//         "https://i.imgur.com/ZKGofuB.jpeg",
//         "https://i.imgur.com/GJi73H0.jpeg",
//         "https://i.imgur.com/633Fqrz.jpeg",
//       ],
//       creationAt: "2025-01-12T04:18:26.000Z",
//       updatedAt: "2025-01-12T04:18:26.000Z",
//       category: {
//         id: 1,
//         name: "Clothes",
//         image: "https://i.imgur.com/QkIa5tT.jpeg",
//         creationAt: "2025-01-12T04:18:26.000Z",
//         updatedAt: "2025-01-12T04:18:26.000Z",
//       },
//       quantity: 2,
//     },
//   ],
//   [
//     {
//       id: 5,
//       title: "Classic Black Hooded Sweatshirt",
//       price: 7999,
//       description:
//         "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.",
//       images: [
//         '["https://i.imgur.com/cSytoSD.jpeg"',
//         '"https://i.imgur.com/WwKucXb.jpeg"',
//         '"https://i.imgur.com/cE2Dxh9.jpeg"]',
//       ],
//       creationAt: "2025-01-12T04:18:26.000Z",
//       updatedAt: "2025-01-12T11:45:13.000Z",
//       category: {
//         id: 1,
//         name: "Clothes",
//         image: "https://i.imgur.com/QkIa5tT.jpeg",
//         creationAt: "2025-01-12T04:18:26.000Z",
//         updatedAt: "2025-01-12T04:18:26.000Z",
//       },
//       quantity: 4,
//     },
//     {
//       id: 6,
//       title: "Classic Comfort Fit Joggers",
//       price: 25,
//       description:
//         "Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.",
//       images: [
//         "https://i.imgur.com/ZKGofuB.jpeg",
//         "https://i.imgur.com/GJi73H0.jpeg",
//         "https://i.imgur.com/633Fqrz.jpeg",
//       ],
//       creationAt: "2025-01-12T04:18:26.000Z",
//       updatedAt: "2025-01-12T04:18:26.000Z",
//       category: {
//         id: 1,
//         name: "Clothes",
//         image: "https://i.imgur.com/QkIa5tT.jpeg",
//         creationAt: "2025-01-12T04:18:26.000Z",
//         updatedAt: "2025-01-12T04:18:26.000Z",
//       },
//       quantity: 2,
//     },
//   ],
// ];

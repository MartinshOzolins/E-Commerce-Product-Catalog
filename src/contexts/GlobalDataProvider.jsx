import { GlobalContext } from "./context";

import { useState } from "react";

export default function GlobalDataProvider({ children }) {
  //initial state of cart
  const [cart, setCart] = useState([]);
  const [chosenCategory, setChosenCategory] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  return (
    <GlobalContext.Provider
      value={{
        cart,
        setCart,
        chosenCategory,
        setChosenCategory,
        searchInput,
        setSearchInput,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// const products = [
//   {
//     category: {
//       id: 2,
//       name: "All",
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/platzi…=media&token=a29e01f0-27b0-432a-976a-45f073622443",
//       creationAt: "2025-01-10T02:45:33.000Z",
//       updatedAt: "2025-01-10T11:54:47.000Z",
//     },
//     creationAt: "2025-01-10T02:45:33.000Z",
//     description:
//       "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
//     id: 18,
//     images: [
//       "https://i.imgur.com/ZANVnHE.jpeg",
//       "https://i.imgur.com/Ro5z6Tn.jpeg",
//       "https://i.imgur.com/woA93Li.jpeg",
//     ],
//     price: 69,
//     title: "Sleek White & Orange Wireless Gaming Controller",
//     updatedAt: "2025-01-10T10:14:00.000Z",
//   },
//   {
//     category: {
//       id: 11,
//       name: "All",
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/platzi…=media&token=a29e01f0-27b0-432a-976a-45f073622443",
//       creationAt: "2025-01-10T02:45:33.000Z",
//       updatedAt: "2025-01-10T11:54:47.000Z",
//     },
//     creationAt: "2025-01-10T02:45:33.000Z",
//     description:
//       "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
//     id: 19,
//     images: [
//       "https://i.imgur.com/yVeIeDa.jpeg",
//       "https://i.imgur.com/jByJ4ih.jpeg",
//       "https://i.imgur.com/KXj6Tpb.jpeg",
//     ],
//     price: 44,
//     title: "Sleek Wireless Headphone & Inked Earbud Set",
//     updatedAt: "2025-01-10T02:45:00.000Z",
//   },
//   {
//     category: {
//       id: 3,
//       name: "All",
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/platzi…=media&token=a29e01f0-27b0-432a-976a-45f073622443",
//       creationAt: "2025-01-10T02:45:33.000Z",
//       updatedAt: "2025-01-10T11:54:47.000Z",
//     },
//     creationAt: "2025-01-10T02:45:33.000Z",
//     description:
//       "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
//     id: 18,
//     images: [
//       "https://i.imgur.com/ZANVnHE.jpeg",
//       "https://i.imgur.com/Ro5z6Tn.jpeg",
//       "https://i.imgur.com/woA93Li.jpeg",
//     ],
//     price: 69,
//     title: "Sleek White & Orange Wireless Gaming Controller",
//     updatedAt: "2025-01-10T10:14:00.000Z",
//   },
//   {
//     category: {
//       id: 2,
//       name: "All",
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/platzi…=media&token=a29e01f0-27b0-432a-976a-45f073622443",
//       creationAt: "2025-01-10T02:45:33.000Z",
//       updatedAt: "2025-01-10T11:54:47.000Z",
//     },
//     creationAt: "2025-01-10T02:45:33.000Z",
//     description:
//       "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
//     id: 18,
//     images: [
//       "https://i.imgur.com/ZANVnHE.jpeg",
//       "https://i.imgur.com/Ro5z6Tn.jpeg",
//       "https://i.imgur.com/woA93Li.jpeg",
//     ],
//     price: 69,
//     title: "Sleek White & Orange Wireless Gaming Controller",
//     updatedAt: "2025-01-10T10:14:00.000Z",
//   },
//   {
//     category: {
//       id: 121212,
//       name: "All",
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/platzi…=media&token=a29e01f0-27b0-432a-976a-45f073622443",
//       creationAt: "2025-01-10T02:45:33.000Z",
//       updatedAt: "2025-01-10T11:54:47.000Z",
//     },
//     creationAt: "2025-01-10T02:45:33.000Z",
//     description:
//       "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
//     id: 19,
//     images: [
//       "https://i.imgur.com/yVeIeDa.jpeg",
//       "https://i.imgur.com/jByJ4ih.jpeg",
//       "https://i.imgur.com/KXj6Tpb.jpeg",
//     ],
//     price: 44,
//     title: "Sleek Wireless Headphone & Inked Earbud Set",
//     updatedAt: "2025-01-10T02:45:00.000Z",
//   },
//   {
//     category: {
//       id: 2,
//       name: "All",
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/platzi…=media&token=a29e01f0-27b0-432a-976a-45f073622443",
//       creationAt: "2025-01-10T02:45:33.000Z",
//       updatedAt: "2025-01-10T11:54:47.000Z",
//     },
//     creationAt: "2025-01-10T02:45:33.000Z",
//     description:
//       "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
//     id: 19,
//     images: [
//       "https://i.imgur.com/yVeIeDa.jpeg",
//       "https://i.imgur.com/jByJ4ih.jpeg",
//       "https://i.imgur.com/KXj6Tpb.jpeg",
//     ],
//     price: 44,
//     title: "Sleek Wireless Headphone & Inked Earbud Set",
//     updatedAt: "2025-01-10T02:45:00.000Z",
//   },
// ];

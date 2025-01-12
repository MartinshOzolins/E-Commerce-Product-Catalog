//compoents
import Footer from "./components/Footer";
import Header from "./components/Header";

//pages
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

// Import components and router-related functions from 'react-router-dom'
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <header className="row-start-1">
        <Header />
      </header>
      <main className="row-start-2 mb-10">
        <Routes>
          <Route index="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <footer className="row-start-3">
        <Footer />
      </footer>
    </>
  );
}

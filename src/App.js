import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Announcement from "./Components/Announcement";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Success from "./Pages/Success";

function App() {
  const user = true;
  return (
    <Router>
      {/* <Navbar />
      <Announcement /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to={"/"} /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to={"/"} /> : <Register />} />
        <Route path="/success" element={<Success />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

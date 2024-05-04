import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Breadcrumbs from "./components/breadcrumbs";
import Home from "./pages/home";
import ProductListing from "./pages/product-listing";
import ProductDetail from "./pages/product-details";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>Welcome To My Online Store</h1>
        <Breadcrumbs />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
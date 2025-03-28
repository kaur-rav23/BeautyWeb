import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path='/products' element={<Products />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import About from "./pages/About";
import Contact from "./pages/Contact";
import New from "./pages/New";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/new" element={<New />} />
        <Route path="/gate" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import MenuCard from "./components/MenuCard";
import Test from "./components/Test";
function App() {
  const [backEndData, setBackEndData] = useState([{}]);
  const [cartItem, setCartItem] = useState([]);
  function addToCart(name) {
    setCartItem((current) => [...current, name]);
  }
  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((data) => setBackEndData(data));
  }, []);

  return (
    <div className="bg-slate-500 pb-4 text-white flex flex-col justify-center items-center">
      <a
        href="#"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        CART
        {cartItem.length === 0 ? (
          <span className="hidden"></span>
        ) : (
          <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            {cartItem.length}
          </span>
        )}
      </a>
      <h1 className="text-3xl mb-10">MENU</h1>
      <div className="flex">
        {backEndData.map((item) => (
          <MenuCard
            imgSrc={item.image}
            title={item.name}
            price={item.price}
            btnFunc={(e) => addToCart(item.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

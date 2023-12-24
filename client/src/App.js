import { useState, useEffect } from "react";
import MenuCard from "./components/MenuCard";
import Cart from "./pages/Cart";
function App() {
  const [backEndData, setBackEndData] = useState([{}]);
  const [cartCounter, setCartCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  function addToCart(name, price) {
    // Increment cart item counter
    setCartCounter((count) => count + 1);
    // Checks if the item is inside the array already
    const isFound = cartItem.some((el) => {
      if (el.name === name) {
        // return true if found
        return true;
      } else {
        // return false if not
        return false;
      }
    });
    // if the item is in the array
    if (isFound) {
      // map the current array and find the name that matches the name parameter
      // then return the item using the spread operator where the price
      // is the newly updated price
      setCartItem((current) => {
        return current.map((item) => {
          if (item.name === name) {
            const newPrice = price + item.price;
            return { ...item, price: newPrice };
          }
          // if the name does not match, just return the item
          return item;
        });
      });
      // else set the cart Item to a new object in the array
    } else {
      setCartItem((current) => [...current, { name, price }]);
    }
  }
  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((data) => setBackEndData(data));
  }, []);

  return (
    <div className="bg-slate-500 pb-4 text-white flex flex-col justify-center items-center">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        CART
        {cartItem.length === 0 ? (
          <span className="hidden"></span>
        ) : (
          <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            {cartCounter}
          </span>
        )}
      </button>
      <h1 className="text-3xl mb-10">MENU</h1>
      <div className="flex">
        {backEndData.map((item) => (
          <MenuCard
            imgSrc={item.image}
            title={item.name}
            price={item.price}
            btnFunc={() => addToCart(item.name, item.price)}
          />
        ))}
      </div>
      {cartItem.map((vals, i) => (
        <>
          <p>{vals.name}</p>
          <p>{vals.price}</p>
        </>
      ))}
    </div>
  );
}

export default App;

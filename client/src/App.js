import { useState, useEffect } from "react";
import MenuCard from "./components/MenuCard";
import Cart from "./pages/Cart";
function App() {
  const [backEndData, setBackEndData] = useState([{}]);
  const [cartCounter, setCartCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  let total = 0;

  function addToCart(qty, name, price) {
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
            const newQty = item.qty + 1;
            const newPrice = price + item.price;
            return { ...item, qty: newQty, price: newPrice };
          }
          // if the name does not match, just return the item
          return item;
        });
      });
      // else set the cart Item to a new object in the array
    } else {
      setCartItem((current) => [...current, { qty, name, price }]);
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
        onClick={() => setIsOpen(true)}
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
            btnFunc={() => addToCart(1, item.name, item.price)}
          />
        ))}
      </div>
      {/* {cartItem.map((vals) => (
        <>
          <p>{vals.qty}</p>
          <p>{vals.name}</p>
          <p>{vals.price}</p>
        </>
      ))} */}
      {isOpen ? (
        <div
          id="ModelContainer"
          className="fixed inset-0 h-full text-black bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
        >
          <div className="p-2 h-[80%] bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
            <button
              className="relative left-[95%]"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
            <h1 className="text-center text-3xl">CART</h1>
            <hr />

            <div
              id="div-body"
              className="w-full  p-3 justify-center items-center"
            >
              <h2 className="text-end">ITEMS: {cartCounter}</h2>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem.map((vals) => (
                      <>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {vals.name}
                          </th>
                          <td className="px-6 py-4">{vals.qty}</td>
                          <td className="px-6 py-4">{vals.price}</td>
                          <td className="px-6 py-4">
                            <button className="font-medium text-red-600 hover:underline">
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}

                    {/* <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4">Silver</td>
                      <td class="px-6 py-4">$2999</td>
                      <td class="px-6 py-4">
                        <a
                          href="#"
                          class="font-medium text-red-600 hover:underline"
                        >
                          Delete
                        </a>
                      </td>
                    </tr> */}
                    {/* <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-red-600 hover:underline"
                      >
                        Delete
                      </a>
                    </td>
                  </tr> */}
                  </tbody>
                </table>
                <div className="text-2xl flex justify-between px-5">
                  TOTAL:
                  <span id="totalPrice">
                    {cartItem.forEach((item) => {
                      total += item.price;
                    })}
                    {total}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default App;

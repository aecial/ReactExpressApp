import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import MenuCard from "./components/MenuCard";
import ButtonWithCounter from "./components/ButtonWithCounter";
import MediumTitle from "./components/MediumTitle";
import FunctionalityButton from "./components/FunctionalityButton";
import { Button } from "@material-tailwind/react";
function Order() {
  const [backEndData, setBackEndData] = useState([{}]);
  const [isOpen, setIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const tableHeaders = ["Product Name", "Quantity", "Price", "Action"];

  function addToCart(qty, name, price) {
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
  function removeFromCart(index, name) {
    setCartItem((current) => {
      return current.map((item) => {
        if (item.name === name) {
          return [...current, current.splice(index, 1)];
        }
        // if the name does not match, just return the item
        return item;
      });
    });
  }
  function screenshot() {
    const element = document.getElementById("ModelContainer");
    if (!element) {
      return;
    }
    html2canvas(element).then((canvas) => {
      let image = canvas.toDataURL("image/jpeg");
      console.log(image);
      let rand = Math.floor(Math.random() * 1000000000);
      const a = document.createElement("a");
      a.href = image;
      a.download = `MyOrder-${rand}.jpeg`;
      a.click();
    });
  }
  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((data) => setBackEndData(data));
  }, []);
  return (
    <div className="bg-slate-500 pb-4 text-white flex flex-col justify-center items-center">
      <ButtonWithCounter btnClick={() => setIsOpen(true)} counter={cartItem} />
      <MediumTitle title={"Menu"} />
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
      {isOpen ? (
        <div
          id="ModelContainer"
          className="fixed inset-0 h-full text-black bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
        >
          <div className="p-2 h-[80%] overflow-y-scroll bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
            <FunctionalityButton
              btnFunction={() => setIsOpen(false)}
              btnName={"X"}
              additionalClasses={"relative left-[90%] rounded-3xl"}
              color={"blue"}
            />
            <MediumTitle title={"CART"} />
            <hr />

            <div
              id="div-body"
              className="w-full  p-3 justify-center items-center"
            >
              <h2 className="text-end">
                ITEMS:{" "}
                <span id="totalCount" className="underline">
                  {cartItem.reduce((count, item) => {
                    return count + item.qty;
                  }, 0)}
                </span>
              </h2>
              <div
                id="orderContainer"
                className="relative overflow-x-auto shadow-md sm:rounded-lg"
              >
                <table
                  // id="cartTable"
                  className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      {tableHeaders.map((header) => (
                        <th scope="col" className="px-6 py-3">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody id="cartTable">
                    {cartItem.map((vals, i) => (
                      <>
                        <tr
                          id={`btn-${i}Div`}
                          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {vals.name}
                          </th>
                          <td className="px-6 py-4 text-white">{vals.qty}</td>
                          <td className="px-6 py-4 text-white">{vals.price}</td>
                          <td className="px-6 py-4">
                            <button
                              id={`btn-${i}`}
                              onClick={() => removeFromCart(i, vals.name)}
                              className="font-medium text-red-600 hover:underline"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
                <div className="text-2xl flex justify-between px-5">
                  TOTAL:
                  <span id="totalPrice">
                    {cartItem.reduce((total, item) => {
                      return total + item.price;
                    }, 0)}
                  </span>
                </div>
              </div>
              <div className=" bg-amber-700 text-white flex justify-between p-4">
                <FunctionalityButton
                  btnFunction={() => setCartItem([])}
                  btnName={"CANCEL"}
                  color={"blue"}
                />
                <FunctionalityButton
                  btnFunction={screenshot}
                  btnName={"SAVE"}
                  color={"blue"}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span></span>
      )}
      <Button className="bg-red-500">My Button</Button>
    </div>
  );
}

export default Order;

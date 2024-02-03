import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import MenuCard from "../components/MenuCard";
import MediumTitle from "../components/MediumTitle";
import { Badge, IconButton, Button } from "@material-tailwind/react";
import FoodPills from "../components/FoodPills";
import HamburgerButtonBlock from "../components/HamburgerButtonBlock";
function Order() {
  const [backEndData, setBackEndData] = useState([]);
  const [foodTypes, setFoodTypes] = useState([]);
  const distinctTypes = [...new Set(foodTypes.map((data) => data.type))];
  const [isOpen, setIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const tableHeaders = ["Name", "Price", ""];

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
    const element = document.getElementById("cartTable");
    if (!element) {
      return;
    }
    html2canvas(element, {
      width: element.clientWidth,
      height: element.clientHeight + 20,
      // windowHeight: window.innerHeight,
    }).then((canvas) => {
      let image = canvas.toDataURL("image/jpeg");
      console.log(image);
      let rand = Math.floor(Math.random() * 1000000000);
      const a = document.createElement("a");
      a.href = image;
      a.download = `MyOrder-${rand}.jpeg`;
      a.click();
      const fbPage = document.createElement("a");
      fbPage.href = "https://www.facebook.com";
      fbPage.click();
    });
  }
  function cancel() {
    setCartItem([]);
    setIsOpen(false);
  }
  function changeData(val) {
    fetch(`/api/menu/food/${val}`)
      .then((response) => response.json())
      .then((data) => setBackEndData(data));

    console.log(val);
  }
  function fetchMenu() {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((data) => setBackEndData(data));
  }
  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((data) => {
        setBackEndData(data);
        setFoodTypes(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="min-h-[100vh] pb-5 bg-gradient-to-br from-black via-black to-gray-900">
      <HamburgerButtonBlock hamburgerColor={"white"} />
      {backEndData.length > 0 ? (
        <div className="foodPillsDiv flex w-[100vw] overflow-x-scroll gap-4 px-3">
          <FoodPills key={"all"} foodName={"All"} btnFunction={fetchMenu} />
          {distinctTypes.map((item, index) => (
            <FoodPills
              key={index}
              foodName={item}
              btnFunction={() => changeData(item)}
            />
          ))}
        </div>
      ) : (
        <span></span>
      )}
      {backEndData.length > 0 ? (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed block top-24 right-4 w-10 h-10 bg-white rounded-md z-10 border border-black"
        >
          <i className="fa-solid fa-cart-shopping text-lg"></i>
          {cartItem.length === 0 ? (
            <span></span>
          ) : (
            <Badge
              content={cartItem.reduce((count, item) => {
                return count + item.qty;
              }, 0)}
              className="-mt-5 text-xs"
            ></Badge>
          )}
        </button>
      ) : (
        <span></span>
      )}
      <div className="mt-16 place-items-center min-h-[75vh] grid grid-cols-2 lg:grid-cols-5 gap-y-14 lg:gap-0 z-0">
        {backEndData.length > 0 ? (
          backEndData.map((item, index) => (
            <MenuCard
              key={index}
              imgSrc={item.image}
              title={item.name}
              price={item.price}
              btnFunc={() => addToCart(1, item.name, item.price)}
            />
          ))
        ) : (
          <h1 className="text-red-700 underline text-center text-3xl">
            No Back End Data
          </h1>
        )}
      </div>
      {isOpen ? (
        <div
          id="ModelContainer"
          className="fixed inset-0 z-50 h-full text-black bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
        >
          <div className="p-2 h-[80%] overflow-y-scroll bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
            <IconButton
              variant="outlined"
              onClick={() => setIsOpen(false)}
              className="relative left-[85%] lg:left-[90%] xl:left-[95%] hover:bg-black hover:text-white focus:bg-black focus:text-white"
            >
              <i class="fa-solid fa-xmark text-xl"></i>
            </IconButton>
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
                <div id="cartTable">
                  <table className="w-full  text-sm text-left rtl:text-right text-black">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        {tableHeaders.map((header) => (
                          <th
                            scope="col"
                            className="px-6 py-3 bg-black text-white"
                          >
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
                            className=" odd:bg-gray-700 even:bg-gray-600 text-white"
                          >
                            <th
                              scope="row"
                              className="px-3 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                            >
                              {vals.qty}x <span></span>
                              {vals.name}
                            </th>
                            <td className="px-7 py-4">{vals.price}</td>
                            <td className="px-0 py-4">
                              <IconButton
                                id={`btn-${i}`}
                                size="sm"
                                variant="outlined"
                                color="red"
                                onClick={() => removeFromCart(i, vals.name)}
                                className="hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white"
                              >
                                <i class="fa-solid fa-xmark text-md text-white"></i>
                              </IconButton>
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
              </div>
              <div className=" flex justify-between p-4">
                <Button
                  variant="text"
                  className="flex items-center gap-3 underline"
                  onClick={cancel}
                >
                  Cancel
                </Button>
                <Button
                  className="flex items-center gap-3"
                  onClick={screenshot}
                >
                  <i class="fa-solid fa-download"></i>
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </main>
  );
}

export default Order;

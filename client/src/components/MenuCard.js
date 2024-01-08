import { Button, IconButton } from "@material-tailwind/react";

const MenuCard = ({ imgSrc, title, price, btnFunc }) => {
  return (
    // <div className="container border-2 border-white w-[150px] h-[200px] rounded-lg text-white">
    //   <img
    //     className=" object-cover w-20 h-20 relative left-10 -top-7 rounded-full"
    //     src={imgSrc}
    //     alt={title}
    //   />
    //   <div className="text-center relative -top-6">
    //     <h1 className="text-xl">{title}</h1>
    //     <h3 className="text-end mr-6">₱{price}</h3>
    //     <button
    //       type="button"
    //       onClick={btnFunc}
    //       className="text-white relative left-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       <i className="fa-solid fa-plus"></i>
    //       <span className="sr-only">Icon description</span>
    //     </button>
    //   </div>
    // </div>
    <div className="container border-2 px-2 pb-2 border-white w-[160px] h-[210px] rounded-lg text-white text-pretty">
      <div className="rounded-full border-2 border-white w-24 h-24 bg-red-500 mx-auto relative -top-10 overflow-hidden">
        <img src={imgSrc} alt="name" className="object-cover h-full w-full" />
      </div>
      <div className="h-[25%] flex items-center justify-center overflow-hidden relative -top-10">
        <h1 className="text-center text-xl">{title}</h1>
      </div>
      <div className="h-[20%] pr-2 w-auto overflow-hidden relative -top-9">
        <h2 className="text-end text-xl w-auto underline">₱{price}</h2>
      </div>
      <div className="h-[20%] flex items-center justify-center overflow-hidden relative -top-9">
        <Button color="white" onClick={btnFunc}>
          <i className="fa-solid fa-cart-plus text-md"></i>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default MenuCard;

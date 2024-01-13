import { Button, IconButton } from "@material-tailwind/react";

const MenuCard = ({ imgSrc, title, price, btnFunc }) => {
  return (
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
      <div className="h-[20%] rounded-md flex items-center justify-center overflow-hidden relative -top-9">
        <Button color="white" onClick={btnFunc}>
          <i className="fa-solid fa-cart-plus text-md"></i>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default MenuCard;

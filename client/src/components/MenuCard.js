const MenuCard = ({ imgSrc, title, price, btnFunc }) => {
  return (
    <div className=" border-2 border-black w-40 h-40 rounded-lg">
      <img
        className=" object-cover w-20 h-20 relative left-10 -top-7 rounded-full"
        src={imgSrc}
        alt={title}
      />
      <div className="text-center relative -top-6">
        <h1 className="text-2xl">{title}</h1>
        <h3 className="text-end mr-6">₱{price}</h3>
        <button
          type="button"
          onClick={btnFunc}
          className="text-white relative left-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <i class="fa-solid fa-plus"></i>
          <span className="sr-only">Icon description</span>
        </button>
      </div>
    </div>
  );
};

export default MenuCard;

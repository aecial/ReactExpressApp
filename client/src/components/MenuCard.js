const MenuCard = ({ key, imgSrc, title, price }) => {
  return (
    <div className=" border-2 border-black w-40 h-40 rounded-lg">
      <img
        className=" object-cover w-20 h-20 relative left-10 -top-7 rounded-full"
        src={imgSrc}
        alt="Item Image"
      />
      <div className="text-center relative -top-6">
        <h1 className="text-2xl">{title}</h1>
        <h3 className="text-end mr-6">${price}</h3>
        <button
          type="button"
          className="text-white relative left-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
      </div>
    </div>
  );
};

export default MenuCard;

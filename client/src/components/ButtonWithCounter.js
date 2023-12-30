const ButtonWithCounter = ({ btnClick, counter }) => {
  return (
    <button
      type="button"
      onClick={btnClick}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      CART
      {counter.length === 0 ? (
        <span className="hidden"></span>
      ) : (
        <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
          {counter.reduce((count, item) => {
            return count + item.qty;
          }, 0)}
        </span>
      )}
    </button>
  );
};

export default ButtonWithCounter;

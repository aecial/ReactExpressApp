const FoodPills = ({ btnFunction, foodName }) => {
  return (
    <button
      variant="filled"
      className="text-white hover:bg-white hover:text-black uppercase border border-white w-32 font-bold py-2 px-4 rounded-lg"
      onClick={btnFunction}
    >
      {foodName}
    </button>
  );
};

export default FoodPills;

const HamburgerButton = ({ btnFunction, className, variant }) => {
  return (
    <button onClick={btnFunction} className={className}>
      <i className={`text-2xl fa-solid fa-bars text-${variant}`}></i>
    </button>
  );
};

export default HamburgerButton;

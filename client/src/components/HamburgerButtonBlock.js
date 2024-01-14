import { DrawerWithNavigation } from "./DrawerWithNavigation";

const HamburgerButtonBlock = ({ hamburgerColor }) => {
  return (
    <div className=" h-12 text-white flex">
      <DrawerWithNavigation hamburgerColor={hamburgerColor} />
    </div>
  );
};

export default HamburgerButtonBlock;

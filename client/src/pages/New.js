import { useLocation } from "react-router-dom";
import Unauthorized from "../components/Unauthorized";
import AddItemForm from "../components/AddItemForm";
const New = () => {
  const { state } = useLocation();
  if (state === null || "" || undefined) {
    return <Unauthorized />;
  } else {
    return <AddItemForm state={state} />;
  }
};

export default New;

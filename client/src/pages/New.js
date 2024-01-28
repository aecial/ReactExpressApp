import { useLocation } from "react-router-dom";
import { useState } from "react";
import Unauthorized from "../components/Unauthorized";
import AddItemForm from "../components/AddItemForm";
import { Button } from "@material-tailwind/react";
import UpdateItemForm from "../components/UpdateItemForm";
import DeleteItemForm from "../components/DeleteItemForm";
const New = () => {
  const [layout, setLayout] = useState("add");
  const { state } = useLocation();
  if (state === null || "" || undefined) {
    return <Unauthorized />;
  } else {
    return (
      <main className="bg-gray-800 h-screen flex flex-col justify-center items-center">
        <div className="w-full px-2 flex gap-4 lg:gap-8 justify-center items-center">
          <Button color="white" onClick={() => setLayout("add")}>
            Add
          </Button>
          <Button color="white" onClick={() => setLayout("update")}>
            Update
          </Button>
          <Button color="white" onClick={() => setLayout("delete")}>
            Delete
          </Button>
        </div>
        <div className="h-[80%] w-[50%] flex justify-center items-center">
          {layout === "add" ? (
            <AddItemForm state={state} />
          ) : layout === "update" ? (
            <UpdateItemForm state={state} />
          ) : layout === "delete" ? (
            <DeleteItemForm state={state} />
          ) : (
            <span></span>
          )}
        </div>
      </main>
    );
    // return <AddItemForm state={state} />;
  }
};

export default New;

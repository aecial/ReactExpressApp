import { Input, Button } from "@material-tailwind/react";
const DeleteItemForm = ({ state }) => {
  function sendData(e) {
    e.preventDefault();
    const id = document.querySelector("#id").value;
    const send = () => {
      fetch(`api/menu/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${state.accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => alert(data.message))
        .catch((error) => alert(error));
    };
    send();
  }
  return (
    <div className=" bg-gray-800 flex justify-center items-center">
      <form onSubmit={sendData} className=" flex flex-col gap-5">
        <Input
          variant="outlined"
          label="Enter ID"
          name="id"
          id="id"
          placeholder="Enter ID"
          color="white"
        />
        <Button color="white" className="text-md mt-4" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default DeleteItemForm;

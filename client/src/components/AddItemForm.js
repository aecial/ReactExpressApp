import { Input, Button } from "@material-tailwind/react";
const AddItemForm = ({ state }) => {
  const types = [
    "ITIK",
    "PORK",
    "BEEF",
    "CHICKEN",
    "SEAFOODS",
    "VEGETABLES",
    "DRINK",
    "OTHERS",
  ];
  function addItem(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("price", document.getElementById("price").value);
    formData.append("type", document.getElementById("type").value);
    formData.append("image", document.getElementById("image").files[0]);
    const sendData = () => {
      fetch("api/menu", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${state.accessToken}`,
        },
        body: formData,
      });
    };
    sendData();
  }
  return (
    <main className=" bg-gray-800 h-[100vh] flex justify-center items-center">
      <form onSubmit={addItem} className="w-[50%] flex flex-col gap-5">
        <Input
          variant="outlined"
          label="Name"
          name="name"
          id="name"
          placeholder="Enter Food Name"
          color="white"
        />
        <Input
          variant="outlined"
          label="Price"
          name="price"
          id="price"
          placeholder="Enter Food Price"
          color="white"
        />
        <div class="relative h-10 w-72 min-w-[200px]">
          <select
            name="type"
            id="type"
            class="peer bg-black text-white h-full w-full rounded-[7px] border border-white border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white-200 placeholder-shown:border-t-white-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-200 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-white-50"
          >
            {types.map((item) => (
              <option value={item} className="bg-black text-white">
                {item}
              </option>
            ))}
          </select>
          <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-white">
            Select a Food Type
          </label>
        </div>
        <div class="flex mt-6 w-60 h-20 items-center justify-center bg-grey-lighter">
          <label class="w-64 flex flex-col items-center px-4 py-6 text-white bg-gray-800 text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-white hover:text-black">
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span class="mt-2 text-base leading-normal">Upload Food Image</span>
            <input type="file" class="hidden" name="image" id="image" />
          </label>
        </div>
        <Button color="white" className="text-md mt-4" type="submit">
          Submit
        </Button>
      </form>
    </main>
  );
};

export default AddItemForm;

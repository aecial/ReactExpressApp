const Test = () => {
  function sendData() {
    const fileInp = document.getElementById("image");
    const formData = new FormData();
    formData.append("name", "Ted");
    // formData.append("image", fileInp.files[0]);
    const send = () => {
      fetch("api/menu", {
        method: "DELETE",
        // headers: {
        //   Authorization:
        //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInBhc3N3b3JkIjoicGFzczEyMzQiLCJpYXQiOjE3MDU2MzUyMjd9.neKV9CQaPn4a4LtqM9GOkBwG0Lfam6ive8Y0cW9IZpo",
        // },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => alert(data.message));
    };
    send();
  }
  return (
    <main className="h-screen bg-gray-800 text-white">
      <input type="file" name="image" id="image" />
      <button onClick={sendData}>SEND</button>
    </main>
  );
};

export default Test;

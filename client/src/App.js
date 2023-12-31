function App() {
  return (
    <main className="h-[100vh]">
      <div className="h-full bg-slate-100">
        {/* HEADER */}
        <div className="bg-white">
          <div className="h-[30vh] bg-blue-400 overflow-hidden">
            <button className="absolute top-2 right-3">
              <i className="text-white text-2xl fa-solid fa-burger "></i>
            </button>
            <img
              className="h-full w-full object-cover"
              src="https://static.vecteezy.com/system/resources/previews/026/481/726/large_2x/a-spectacular-gaming-adventure-with-this-stunning-4k-wallpaper-free-photo.jpg"
              alt="hero wallpaper"
            />
          </div>
          <img
            className=" h-40 rounded-full mx-auto -mt-24"
            src="https://cdn-icons-png.flaticon.com/512/80/80648.png"
            alt="LOGO"
          />
        </div>
        {/* HEADER */}
        <h1 className="text-4xl text-center mt-10">EATIK BOY</h1>
      </div>
    </main>
  );
}

export default App;

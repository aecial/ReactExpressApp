import { DrawerWithNavigation } from "./components/DrawerWithNavigation";
import Title from "./components/Title";
import { Button } from "@material-tailwind/react";
function App() {
  return (
    <main className="">
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
        <div className="h-[47vh] flex flex-col justify-between">
          <Title title={"EATIK BOY"} additionalClass={"mt-10"} />
          <div className="w-full">
            <ul className="text-lg flex flex-col gap-5 w-[45%] mx-auto">
              <li>
                <i class="fa-solid fa-location-dot"></i> Santa Lucia, Capas,
                Tarlac, 2315
              </li>
              <li>
                <a href="tel:09982409945">
                  <i class="fa-solid fa-phone-volume"></i>{" "}
                  <span className="underline underline-offset-2">
                    09982409945
                  </span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com">
                  <i class="fa-brands fa-facebook"></i>{" "}
                  <span className="underline underline-offset-2">
                    @eatikboy
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <Button className="w-[80%] mx-auto text-2xl">
            <i class="fa-solid fa-basket-shopping"></i> ORDER NOW
          </Button>
          <DrawerWithNavigation />
        </div>
      </div>
    </main>
  );
}

export default App;

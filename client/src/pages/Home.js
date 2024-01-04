import { DrawerWithNavigation } from "../components/DrawerWithNavigation";
import Title from "../components/Title";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
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
              src="https://lh3.googleusercontent.com/p/AF1QipP2swJfBwaufUWZ7TvAvParXZE-P4diB7UuZX6y=s680-w680-h510"
              alt="hero wallpaper"
            />
          </div>
          <img
            className=" h-40 rounded-full mx-auto -mt-24 border border-2 border-black"
            src="https://i.pinimg.com/736x/5b/b1/fc/5bb1fc9e5dabfbf0713d17e30d1a1d7c.jpg"
            alt="LOGO"
          />
        </div>
        {/* HEADER */}
        <div className="h-[47vh] flex flex-col justify-between">
          <Title title={"EATIK BOY"} additionalClass={"mt-10"} />
          <div className="w-full">
            <ul className="text-lg flex flex-col gap-5 w-[45%] mx-auto">
              <li>
                <i className="fa-solid fa-location-dot"></i> Santa Lucia, Capas,
                Tarlac, 2315
              </li>
              <li>
                <a href="tel:09982409945">
                  <i className="fa-solid fa-phone-volume"></i>{" "}
                  <span className="underline underline-offset-2">
                    09982409945
                  </span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com">
                  <i className="fa-brands fa-facebook"></i>{" "}
                  <span className="underline underline-offset-2">
                    @eatikboy
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <Button
            className="w-[80%] mx-auto text-2xl"
            onClick={() => navigate("/order")}
          >
            <i className="fa-solid fa-basket-shopping"></i> ORDER NOW
          </Button>
          <DrawerWithNavigation />
        </div>
      </div>
    </main>
  );
}

export default Home;

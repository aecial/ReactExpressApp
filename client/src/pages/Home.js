import { DrawerWithNavigation } from "../components/DrawerWithNavigation";
import Title from "../components/Title";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import ducky from "../assets/vectorDuck1.png";
function Home() {
  const navigate = useNavigate();
  return (
    <main className="">
      <div className="h-full bg-slate-100">
        {/* HEADER */}
        <div className="bg-white">
          <div className="h-[25vh] bg-blue-400 overflow-hidden">
            <button className="absolute top-2 right-3">
              <i className="text-white text-2xl fa-solid fa-burger "></i>
            </button>
            <img
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/p/AF1QipP2swJfBwaufUWZ7TvAvParXZE-P4diB7UuZX6y=s680-w680-h510"
              alt="hero wallpaper"
            />
          </div>
          <div className="bg-red-500 overflow-hidden rounded-full w-40 h-40 mx-auto relative -top-20 border-2 border-black">
            <img
              src={ducky}
              alt="LOGO"
              className=" object-cover w-full h-full"
            />
          </div>
        </div>
        {/* HEADER */}
        <div className="h-[47vh] -mt-12 flex flex-col justify-between">
          <Title title={"EATIK BOY"} />
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

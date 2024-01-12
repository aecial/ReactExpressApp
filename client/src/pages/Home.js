import { DrawerWithNavigation } from "../components/DrawerWithNavigation";
import Title from "../components/Title";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import ducky from "../assets/vectorDuck1.png";
function Home() {
  const navigate = useNavigate();
  return (
    <main className="bg-gray-800 min-h-screen">
      <div className="h-full bg-gray-800">
        {/* HEADER */}
        <div className="bg-gray-800">
          <div className="h-[25vh] bg-blue-400 overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/p/AF1QipP2swJfBwaufUWZ7TvAvParXZE-P4diB7UuZX6y=s680-w680-h510"
              alt="hero wallpaper"
            />
          </div>
          <div className="bg-red-500 overflow-hidden rounded-full w-40 h-40 mx-auto relative -top-20 border-2 border-black shadow-md">
            <img
              src={ducky}
              alt="LOGO"
              className=" object-cover w-full h-full"
              onDoubleClick={() => navigate("/gate")}
            />
          </div>
        </div>
        {/* HEADER */}
        <div className="h-[47vh] bg-gray-800 -mt-12 flex flex-col justify-between">
          <Typography variant="h1" className="text-center" color="white">
            EATIK BOY
          </Typography>
          <div className="w-full">
            <ul className="text-lg flex flex-col gap-5 w-[45%] mx-auto">
              <li>
                <Typography variant="h6" color="white">
                  <i className="fa-solid fa-location-dot"></i> Santa Lucia,
                  Capas, Tarlac, 2315
                </Typography>
              </li>
              <li>
                <a href="tel:09982409945">
                  <Typography variant="h6" color="white">
                    <i className="fa-solid fa-phone-volume"></i>{" "}
                    <span className="underline underline-offset-2">
                      09982409945
                    </span>
                  </Typography>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com">
                  <Typography variant="h6" color="white">
                    <i className="fa-brands fa-facebook"></i>{" "}
                    <span className="underline underline-offset-2">
                      @eatikboy
                    </span>
                  </Typography>
                </a>
              </li>
            </ul>
          </div>
          <Button
            className="w-[80%] mx-auto text-2xl"
            color="white"
            onClick={() => navigate("/order")}
          >
            <i className="fa-solid fa-basket-shopping"></i> ORDER NOW
          </Button>
          <DrawerWithNavigation hamburgerColor={"white"} />
        </div>
      </div>
    </main>
  );
}

export default Home;

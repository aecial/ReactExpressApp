import { DrawerWithNavigation } from "../components/DrawerWithNavigation";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import ducky from "../assets/vectorDuck1.png";
function Home() {
  const navigate = useNavigate();
  return (
    <main className="bg-black h-[100vh] overflow-hidden">
      <div>
        {/* HEADER */}
        <div className="bg">
          <div className="h-[25vh] bg-blue-400 overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/p/AF1QipP2swJfBwaufUWZ7TvAvParXZE-P4diB7UuZX6y=s680-w680-h510"
              alt="hero wallpaper"
            />
          </div>
          <div className="bg-red-500 overflow-hidden rounded-full w-40 h-40 mx-auto relative lg:-top-20 -top-24 border-2 border-black shadow-md">
            <img
              src={ducky}
              alt="LOGO"
              className=" object-cover w-full h-full"
              onDoubleClick={() =>
                navigate("/gate", { state: { accessToken: "passed" } })
              }
            />
          </div>
        </div>
        {/* HEADER */}
        <div className="h-[47vh] bg -mt-20 flex flex-col justify-between">
          <Typography variant="h1" className="text-center" color="yellow">
            EATIK BOY
          </Typography>
          <div className="w-full">
            <ul className="text-lg flex flex-col lg:flex-row w-[45%] lg:w-[70%] lg:justify-center gap-4 lg:gap-8 lg:divide-x-2 mx-auto">
              <li>
                <Typography variant="h5" color="white" className="lg:text-2xl">
                  <i className="fa-solid fa-location-dot"></i> Santa Lucia,
                  Capas, Tarlac, 2315
                </Typography>
              </li>
              <li>
                <a href="tel:09982409945">
                  <Typography
                    variant="h5"
                    color="white"
                    className="lg:text-2xl lg:ml-4"
                  >
                    <i className="fa-solid fa-phone-volume"></i>{" "}
                    <span className="underline underline-offset-2">
                      09982409945
                    </span>
                  </Typography>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com">
                  <Typography
                    variant="h5"
                    color="white"
                    className="lg:text-2xl lg:ml-4"
                  >
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
            className="w-[80%] lg:w-[20%] mx-auto text-2xl"
            color="red"
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

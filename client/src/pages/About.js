import { Button, Carousel, Typography } from "@material-tailwind/react";

import ReviewCard from "../components/ReviewCard";
import { DrawerWithNavigation } from "../components/DrawerWithNavigation";
import HamburgerButtonBlock from "../components/HamburgerButtonBlock";
const About = () => {
  return (
    <main className="min-h-screen bg-gray-800 p-4 flex flex-col justify-center items-center">
      <HamburgerButtonBlock hamburgerColor={"white"} />
      <Typography variant="h2" className="uppercase" color="white">
        Gallery
      </Typography>
      <div className=" w-full md:w-[50%] h-80 md:h-96 mb-10">
        <Carousel className="rounded-xl" autoplay loop autoplayDelay={2500}>
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image-1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image-2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image-3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>

      <Typography variant="h2" color="white" className="uppercase">
        Reviews
      </Typography>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
        <ReviewCard color={"white"} />
        <ReviewCard color={"white"} />
        <ReviewCard color={"white"} />
      </div>
      <a href="https://www.facebook.com" className="w-full md:w-60 mt-3">
        <Button className="w-full text-lg normal-case" color="white">
          <i class="fa-solid fa-file-pen"></i> Add a Review?
        </Button>
      </a>
    </main>
  );
};

export default About;

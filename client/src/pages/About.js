import { Button, Carousel } from "@material-tailwind/react";
import MediumTitle from "../components/MediumTitle";
import ReviewCard from "../components/ReviewCard";

const About = () => {
  return (
    <main className="min-h-screen p-4 flex flex-col justify-center items-center">
      <MediumTitle title={"GALLERY"} />
      <div className=" w-full h-64 mb-10">
        <Carousel className="rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>

      <MediumTitle title={"reviews"} />
      <div className="flex flex-col gap-4 overflow-x-scroll">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <a href="https://www.facebook.com" className="w-full">
          <Button className="w-full text-lg">Add a Review?</Button>
        </a>
      </div>
    </main>
  );
};

export default About;

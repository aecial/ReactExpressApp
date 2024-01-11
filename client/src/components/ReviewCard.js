import { Rating } from "@material-tailwind/react";

const ReviewCard = () => {
  return (
    <div className=" w-80 h-36 p-2 border border-black overflow-hidden">
      <div className="flex items-center gap-6">
        <div className="bg-white w-20 h-20 rounded-full">
          <img
            src="/images/BuffaloWings.jpg"
            alt="review1"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <Rating value={5} />
          <h1 className="text-xl">Teddy L. Pascual Jr.</h1>
          <h2 className="text-sm">December 23, 2024</h2>
        </div>
      </div>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
        dignissimos tempore esse neque sed tenetur soluta animi praesentium
        possimus! Doloribus?
      </p>
    </div>
  );
};

export default ReviewCard;

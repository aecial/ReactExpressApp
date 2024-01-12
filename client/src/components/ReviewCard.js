import { Rating, Typography } from "@material-tailwind/react";

const ReviewCard = ({ color }) => {
  return (
    <div className={` w-80 h-auto p-2 border border-${color} overflow-hidden`}>
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
          <Typography variant="h5" color={color}>
            Teddy L. Pascual Jr.
          </Typography>
          <Typography variant="small" color={color}>
            December 23, 2024
          </Typography>
        </div>
      </div>
      <Typography variant="lead" color={color}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatem
        vitae eveniet dolorum pariatur magnam maxime sit sapiente quaerat a.
      </Typography>
    </div>
  );
};

export default ReviewCard;

import { Typography } from "@material-tailwind/react";
const ContactCard = ({ header, icon, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {icon}
      <Typography variant="h3" color="white" className="text-center">
        {header}
      </Typography>
      <Typography variant="h4" color="white" className="text-center">
        {text}
      </Typography>
    </div>
  );
};

export default ContactCard;

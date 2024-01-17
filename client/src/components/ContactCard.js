import { Typography, Button } from "@material-tailwind/react";
const ContactCard = ({ header, icon, text, link }) => {
  return (
    <div className="flex flex-col justify-center items-center border border-white p-4 w-72 h-56">
      {icon}
      <Typography variant="h3" color="white" className="text-center">
        {header}
      </Typography>
      <a href={link}>
        <Typography variant="h4" color="white" className="text-center">
          <Button color="white">{text}</Button>
        </Typography>
      </a>
    </div>
  );
};

export default ContactCard;

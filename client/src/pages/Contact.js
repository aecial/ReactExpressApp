import ContactCard from "../components/ContactCard";
import HamburgerButtonBlock from "../components/HamburgerButtonBlock";
import { Typography } from "@material-tailwind/react";
const Contact = () => {
  return (
    <main>
      <div className="min-h-screen bg-gray-800">
        <HamburgerButtonBlock />
        <div className="heightWithBlock p-4">
          <Typography variant="h2" className="text-center" color="white">
            Get In Touch
          </Typography>

          <div className="mt-8 flex flex-col lg:flex-row justify-center items-center gap-8">
            <ContactCard
              header={"Address"}
              icon={
                <i class="fa-solid fa-map-location-dot text-[80px] text-white"></i>
              }
              text={"Transmitter, Santa Lucia, Capas, Tarlac"}
              link={"https://maps.app.goo.gl/CuuefCM8MYVZNF3XA"}
            />
            <ContactCard
              header={"Facebook"}
              icon={
                <i class="fa-brands fa-facebook text-[80px] text-white"></i>
              }
              text={"@eatikboy"}
            />
            <ContactCard
              header={"Instagram"}
              icon={
                <i class="fa-brands fa-square-instagram text-[80px] text-white"></i>
              }
              text={"@eatikboy"}
            />
            <ContactCard
              header={"Tiktok"}
              icon={<i class="fa-brands fa-tiktok text-[80px] text-white"></i>}
              text={"@eatikboy"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

import HamburgerButtonBlock from "../components/HamburgerButtonBlock";
import { Typography } from "@material-tailwind/react";
const Contact = () => {
  return (
    <main>
      <div className="h-screen bg-gray-800">
        <HamburgerButtonBlock />
        <div className="heightWithBlock p-4">
          <Typography variant="h2" className="text-center" color="white">
            Get In Touch
          </Typography>

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-20 h-20 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <Typography variant="h4" color="white" className="text-center">
                Santa Lucia, Capas, Tarlac, 2315
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

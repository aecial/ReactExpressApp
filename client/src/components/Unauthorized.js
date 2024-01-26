import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <main className="p-0 m-0 bg-black text-white min-h-[100vh] flex flex-col gap-4 justify-center items-center">
      <img src="https://http.cat/401.jpg" alt="Status Cat" />
      <h1 className="text-4xl">UNAUTHORIZED</h1>
      <Button onClick={() => navigate("/")} color="white">
        GO BACK
      </Button>
    </main>
  );
};

export default Unauthorized;

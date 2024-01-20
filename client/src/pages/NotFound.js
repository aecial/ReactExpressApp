import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="h-screen bg-black p-1 flex flex-col justify-center items-center">
      <img src="https://http.cat/404.jpg" alt="Unauthorized Hero Image" />
      <Button onClick={() => navigate("/")} color="white">
        GO BACK
      </Button>
    </main>
  );
};

export default NotFound;

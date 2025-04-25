
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center farewell-bg p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Oops!</h1>
        <p className="text-lg mb-6">This page doesn't exist or you don't have access.</p>
        <Button onClick={() => navigate("/")}>Return to Login</Button>
      </div>
    </div>
  );
};

export default NotFound;

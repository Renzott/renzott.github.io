import { FC } from "react";

interface LandingProps {
  
}

const Landing: FC<LandingProps> = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-black"
    >
      <h1 className="text-white text-5xl">Landing Page</h1>
    </div>
  );
};

export default Landing;

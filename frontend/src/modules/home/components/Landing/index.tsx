import { FC } from "react";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  return (
    <div className="h-screen flex items-center justify-center p-20">
      <div className="h-full w-full bg-gray-900/80 flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl">Bienvenido a mi Portafolio</h1>
        <span className="text-gray-500 text-sm">Todo: mejoras visuales</span>
        <span className="text-gray-500 text-sm">Todo: Añadir Info de mi perfil</span>
        <span className="text-gray-500 text-sm">Todo: Añadir mas proyectos</span>
      </div>
    </div>
  );
};

export default Landing;

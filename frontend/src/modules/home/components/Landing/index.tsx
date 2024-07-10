import { FC } from "react";

interface LandingProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Landing: FC<LandingProps> = ( { ...props }) => {
  return (
    <div className="h-screen flex items-center justify-center p-8 sm:p-20" {...props}>
      <div className="h-full w-full bg-gray-900/80 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-5xl">Bienvenido a mi Portafolio</h1>
        <br />
        <span className="text-gray-500 text-sm">Todo: mejoras visuales</span>
        <span className="text-gray-500 text-sm">Todo: Añadir mas proyectos</span>
      </div>
    </div>
  );
};

export default Landing;

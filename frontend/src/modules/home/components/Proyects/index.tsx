import { FC } from "react";
import Tabs from "../Tabs";

interface ProyectsProps extends React.HTMLAttributes<HTMLDivElement> {}

const Proyects: FC<ProyectsProps> = ({ ...props }) => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-gray-950"
      {...props}
    >
      <Tabs />
    </div>
  );
};

export default Proyects;

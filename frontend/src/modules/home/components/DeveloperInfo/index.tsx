import { FC } from "react";
import Typography from "../../../../shared/components/Typography";

interface DeveloperInfoProps extends React.HTMLAttributes<HTMLDivElement> {}

const DeveloperInfo: FC<DeveloperInfoProps> = ({ ...props }) => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-gray-950"
      {...props}
    >
      <div className="text-pretty">
        <Typography
          variant="h4"
          className="text-white text-center"
          text="🫡 Reno Dev."
        />
        <br />
        <br />
        <Typography
          variant="h4"
          className="text-white text-center"
          text="🚀 Web Developer"
        />
        <br />
        <Typography
          variant="h4"
          className="text-green-400 text-center font-bold "
          text="🌟 Abierto a ofertas laborales"
        />
        <br />
        <Typography
          variant="h4"
          className="text-white text-center"
          text="🔥 3 años de experiencia laboral 🔥"
        />
        <br />
        <img
          src="https://flagicons.lipis.dev/flags/4x3/pe.svg"
          width={25}
          className="inline mx-2 mb-2"
        />
        <Typography
          variant="h4"
          className="text-white text-center"
          text="Lima, Peru"
        />
        <br />
        <Typography
          variant="h4"
          className="text-white text-center"
          text="💻 Centrado en TypeScript & AWS"
        />
        <br />
        <Typography
          variant="h4"
          className="text-white text-center"
          text="📚 Java & C# (Academico)"
        />
        <br />
        <Typography
          variant="h4"
          className="text-white text-center"
          text="🦀 Aprendiendo Rust"
        />
      </div>
    </div>
  );
};

export default DeveloperInfo;

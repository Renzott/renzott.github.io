import { FC, useState } from "react";
import Typography from "../../../../shared/components/Typography";

interface DeveloperInfoProps extends React.HTMLAttributes<HTMLDivElement> {}

const DeveloperInfo: FC<DeveloperInfoProps> = ({ ...props }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setIsHovered(false);
    setTimeout(() => {
      setIsClicked(false);
    }, 10000);
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-gray-950"
      {...props}
    >
      <div className="text-pretty mx-2">
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
        {!isClicked ? (
          <a
            href="mailto:richard.q.contact@proton.me"
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Typography
              variant="h4"
              className={`text-green-400 text-center font-bold ${
                isHovered && "rainbowText"
              }`}
              text="🌟 Abierto a ofertas laborales"
            />
            <Typography
              variant="subtitle4"
              className={`text-green-400 text-center font-bold ${
                isHovered && "rainbowText"
              }`}
              text="(click para contacto)"
            />
            <br />
          </a>
        ) : (
          <div>
            <Typography
              variant="h4"
              className="text-green-400 text-center font-bold"
              style={{ userSelect: "none", WebkitUserSelect: "none" }}
              text="🌟 "
            />
            <Typography
              variant="subtitle1"
              className="text-green-400 text-center font-bold"
              text="richard.q.contact@proton.me"
            />
          </div>
        )}

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

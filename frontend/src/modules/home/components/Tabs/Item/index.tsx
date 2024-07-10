import { FC, useId } from "react";
import { Proyect } from "../../../../../shared/models/Proyect";

interface ItemProps {
  proyect: Proyect;
}

const Item: FC<ItemProps> = ({ proyect }) => {
  const date = new Date(parseInt(proyect.date_release || "0") * 1000);
  const id = useId();

  const dateIntl = new Intl.DateTimeFormat("es", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  const UrlsArray = () => {
    return Object.entries(proyect.urls || {}).map(([key, value]) => {
      return { key, value };
    });
  };

  console.log(UrlsArray());

  return (
    <div key={id} className="flex items-center min-h-[180px] bg-gray-800 text-black rounded-2xl py-4">
      <img
        src={proyect.thumbnail}
        alt={proyect.title}
        className="w-[100px] h-[100px] rounded-full object-cover mx-4"
      />
      <div className="flex flex-col justify-center w-full text-white ">
        <div className="flex flex-col justify-between">
          <h3 className="text-xl font-bold">{proyect.title}</h3>
          <p className="text-xs text-gray-400">{dateIntl}</p>

          <div className="w-full h-fit hidden sm:block">
            <p className="text-pretty">{proyect.description}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-wrap mt-4">
            <span className="text-sm font-bold mr-2">Skills:</span>
            {proyect.skills?.map((skill) => (
              <img
                src={skill.icon}
                title={skill.title}
                className="w-5 h-5 mx-1.5"
                key={skill.title}
              />
            ))}
          </div>
          <div className="flex flex-wrap mr-4 items-center">
            {UrlsArray().map((url) => (
              <div key={url.key} className="mx-2">
                {url.key === "github" ?? <></>}
                <a
                  href={url.value}
                  target="_blank"
                  rel=""
                  className=""
                >
                    {url.key}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

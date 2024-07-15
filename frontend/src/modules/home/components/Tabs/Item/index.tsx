import { FC, useId } from "react";
import { Proyect } from "../../../../../shared/models/Proyect";
import Typography from "../../../../../shared/components/Typography";

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

  return (
    <>
      <div
        key={id}
        className="hidden items-center min-h-[180px] bg-gray-800 text-black rounded-2xl py-4 lg:flex "
      >
        <img
          src={proyect.thumbnail}
          alt={proyect.title}
          className="w-[100px] h-[100px] rounded-full object-cover mx-4"
        />
        <div className="flex flex-col justify-center w-full text-white ">
          <div className="flex flex-col justify-between">
            <h3 className="text-xl font-bold">{proyect.title}</h3>
            <p className="text-xs text-gray-400">{dateIntl}</p>

            <div className="w-full h-fit">
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
                  <a href={url.value} target="_blank" rel="" className="">
                    {url.key}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full bg-gray-800 text-black rounded-2xl py-4 lg:hidden">
        <div className="flex justify-center h-[80px] sm:h-[100px]">
          <img src={proyect.thumbnail} alt={proyect.title} className="h-full" />
        </div>
        <div className="h-full m-2">
          <Typography
            variant="subtitle3"
            className="font-bold"
            text={proyect.title}
          />
          <div className="w-[1px]"/>
          <Typography
            variant="subtitle4"
            className="font-bold"
            text={dateIntl}
          />
          
          <div className="flex flex-wrap items-center text-white">
            {UrlsArray().map((url) => (
              <div key={url.key} className="mx-2">
                <a href={url.value} target="_blank" rel="" className="">
                  {url.key}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;

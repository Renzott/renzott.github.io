import { WIP_DATA_PROYECTS } from "../../../../core/constants";
import Item from "./Item";

const Tabs = () => {
  return (
    <div className="h-full w-[100%] p-8">
      <div className="flex flex-col gap-2 h-full w-full bg-gray-900">
        {WIP_DATA_PROYECTS.map((tab) => (
          <Item key={tab.id} proyect={tab} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;

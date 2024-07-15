import { WIP_DATA_PROYECTS } from "../../../../core/constants";
import Item from "./Item";

const Tabs = () => {
  return (
    <div className="h-full w-[100%] p-4 lg:p-8">
      <div className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-3 lg:flex lg:flex-col gap-4 p-4 lg:p-8 h-full bg-gray-900">
        {WIP_DATA_PROYECTS.map((tab) => (
          <Item key={tab.id} proyect={tab} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;

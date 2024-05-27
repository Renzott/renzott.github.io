import { type ReactNode, FC } from "react";
import {Helmet} from "react-helmet";
import { HELMET_PROPS } from "../../../core/constants";


interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {

  return (
    <div>
      <Helmet>
        <title>{HELMET_PROPS.title}</title>

      </Helmet>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;

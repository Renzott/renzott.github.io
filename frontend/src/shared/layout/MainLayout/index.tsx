import { type ReactNode, FC } from "react";


interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {

  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;

import { type ReactNode, FC } from "react";


interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {

  return (
    <div className="w-screen">
      {children}
    </div>
  );
};

export default MainLayout;

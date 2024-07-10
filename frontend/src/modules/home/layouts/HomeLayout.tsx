import { FC, ReactNode } from "react";
import MainLayout from "../../../shared/layout/MainLayout";
import StarsBackground from "../components/StarsBackground";
import HiddenLanding from "../components/HiddenLanding";

interface HomeLayoutProps {
    children: ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
    return (
        <MainLayout>
            <HiddenLanding />
            <StarsBackground />
            <div className="">{children}</div>
        </MainLayout>
    );
}

export default HomeLayout;
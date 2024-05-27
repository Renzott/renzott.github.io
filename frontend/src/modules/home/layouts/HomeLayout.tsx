import { FC, ReactNode } from "react";

interface HomeLayoutProps {
    children: ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
    return (
        <div>
            <div>{children}</div>
        </div>
    );
}

export default HomeLayout;
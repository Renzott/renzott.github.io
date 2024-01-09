// create a new component named AsideDynamic.

import { useEffect, useState } from "react";
import MobileCard from "./MobileCard";

// conditional: if max-width: 640px, then render "hello mobile", else render "hello desktop"

const AsideDynamic = () => {
    const breakpoint = 640;
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width < breakpoint;


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <aside>
            {isMobile ? <MobileCard /> : 
            <>
                <h1>Hello Desktop</h1>
                <p>Desktop is {width}px wide</p>
            </>
            }
            
        </aside>
    );
}

export default AsideDynamic;
import { FC, useCallback, useLayoutEffect, useRef, useState } from "react";

interface ScrollMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

const ScrollMenu: FC<ScrollMenuProps> = () => {
  const scrollDiv = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState<string>("landing");

  const handleScrollTo = useCallback((id: string) => {
    const divID = document.getElementById(id);

    if (divID) {
      divID.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  useLayoutEffect(() => {
    const handleScroll = (e: Event) => {
      if (!scrollDiv.current) return;
      const divParent = scrollDiv.current.parentElement as HTMLDivElement;
      // get all the children of the parent div
      const children = Array.from(divParent.children);

      // filter the scrollDiv from the children
      const filteredChildren = children.filter(
        (child) => child !== scrollDiv.current
      );

      // calculate the width of the children, create a map with id (key) and width (value)
      // { landing: 844, developer: 80, proyects: 844 }
      // sum next height with previous height
      const childrenHeight = filteredChildren.reduce((acc, child) => {
        acc[child.id] =
          child.clientHeight + (acc[Object.keys(acc).pop() as string] || 0);
        return acc;
      }, {} as Record<string, number>);

      // get current section
      const getCurrentSection = (scrollTop: number) => {
        let currentSection = "";
        for (const [key, value] of Object.entries(childrenHeight)) {
          if (scrollTop < value) {
            currentSection = key;
            break;
          }
        }
        return currentSection;
      };

      const target = e.target as Document;
      const { scrollTop, clientHeight } = target.documentElement;

      const calculatedHeight = scrollTop + clientHeight / 2;

      setCurrentSection(getCurrentSection(calculatedHeight) || "");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed w-[120px] right-0 h-[100vh] flex flex-col justify-center translate-x-[105px]"
      ref={scrollDiv}
    >
      <div className="cursor-pointer hover:-translate-x-[105px] -translate-x-0 transform transition-transform duration-300">
        <div
          className={
            "landing" === currentSection
              ? "bg-blue-700 text-white p-4"
              : "bg-blue-500 text-white p-4"
          }
          onClick={() => handleScrollTo("landing")}
        >
          <a>Landing</a>
        </div>
        <div
          className={
            "about" === currentSection
              ? "bg-blue-700 text-white p-4"
              : "bg-blue-500 text-white p-4"
          }
          onClick={() => handleScrollTo("about")}
        >
          <a>About</a>
        </div>
        <div
          className={
            "proyects" === currentSection
              ? "bg-blue-700 text-white p-4"
              : "bg-blue-500 text-white p-4"
          }
          onClick={() => handleScrollTo("proyects")}
        >
          <a>Proyects</a>
        </div>
      </div>
    </div>
  );
};

export default ScrollMenu;

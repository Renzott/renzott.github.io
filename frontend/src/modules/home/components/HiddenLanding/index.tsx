// useRef props interface
import gsap from "gsap";
import { FC, useEffect, useRef } from "react";

interface HiddenLandingProps {
  
}

const HiddenLanding: FC<HiddenLandingProps> = () => {

  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(overlayRef.current, {
      ease: "power2.in",
      duration: 2,
      opacity: 0,
      onComplete: () => {
        if (overlayRef.current) {
          overlayRef.current.style.visibility = "hidden";
        }
      },
    });
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black opacity-100 z-10"
      ref={overlayRef}
    >
      
    </div>
  );
};

export default HiddenLanding;

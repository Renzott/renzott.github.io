import { useEffect, useRef } from "react";
import { debounce } from "../../../../shared/lib/utils";

interface Stars {
  x: number;
  y: number;
  alpha: number;
  delta: number;
  rotation: number;
  rotationSpeed: number;
  blinkLive: number;
}

const StarsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const maxStarSize = 3;
  const minStarSize = 0.2;
  const density = 0.00001;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId: number;
    let visible = true;
    const stars: Stars[] = [];

    const createStars = () => {
      const numStars = Math.ceil(
        window.innerWidth * window.innerHeight * density
      );
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          alpha: Math.random(),
          delta: Math.random() * 0.001 + 0.005,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: Math.random() * 0.001 - 0.005,
          blinkLive: Math.floor(Math.random() * 10) + 5,
        });
      }
    };

    const drawStar = (
      cx: number,
      cy: number,
      outerRadius: number,
      innerRadius: number,
      rotation: number
    ) => {
      const spikes = 5;
      let rot = (Math.PI / 2) * 3 + rotation;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      context.beginPath();
      context.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        context.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        context.lineTo(x, y);
        rot += step;
      }
      context.lineTo(cx, cy - outerRadius);
      context.closePath();
      context.fill();
    };

    const drawCross = (
      x: number,
      y: number,
      size: number,
      alpha: number,
      rotation: number
    ) => {
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);

      const x1 = x + cos * size;
      const y1 = y + sin * size;
      const x2 = x - cos * size;
      const y2 = y - sin * size;

      const x3 = x + sin * size;
      const y3 = y - cos * size;
      const x4 = x - sin * size;
      const y4 = y + cos * size;

      context.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.moveTo(x3, y3);
      context.lineTo(x4, y4);
      context.stroke();
    };

    const drawStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        const starSize = maxStarSize * star.alpha;
        context.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;

        drawStar(star.x, star.y, starSize, starSize / 2, star.rotation);

        drawCross(star.x, star.y, starSize * 2, star.alpha, star.rotation);

        star.alpha += star.delta;
        if (star.alpha >= 1 || star.alpha <= minStarSize) {
          star.delta *= -1;
        }

        // if maxLive is reached, decrease blinkLive
        if (star.alpha < minStarSize) {
          star.blinkLive--;
        }

        // if blinkLive is reached, delete star and add new one
        if (star.blinkLive <= 0) {
          star.x = Math.random() * window.innerWidth;
          star.y = Math.random() * window.innerHeight;
          star.alpha = Math.random();
          star.delta = Math.random() * 0.001 + 0.005;
          star.rotation = Math.random() * Math.PI * 2;
          star.rotationSpeed = Math.random() * 0.001 - 0.005;
          star.blinkLive = Math.floor(Math.random() * 10) + 5;
        }

        // Move star
        //star.x += Math.cos(star.rotation) * 0.5;

        star.rotation += star.rotationSpeed;
      });
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    const debounceResize = debounce(resizeCanvas, 200);

    const animate = () => {
      if (visible) {
        drawStars();
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const handleVisibilityChange = () => {
      visible = !document.hidden;
      if (visible) {
        animate();
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", debounceResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", debounceResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default StarsBackground;

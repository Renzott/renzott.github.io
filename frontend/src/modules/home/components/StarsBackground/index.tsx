import { useEffect, useRef } from "react";
import { debounce } from "../../../../shared/lib/utils";

interface Stars {
  x: number;
  y: number;
  alpha: number;
  delta: number;
  rotation: number;
  rotationSpeed: number;
}

const StarsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const maxStarSize = 3;
  const minStarSize = 0.5;
  const density = 0.0002;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId: number;
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
          delta: Math.random() * 0.01 + 0.005,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: Math.random() * 0.01 - 0.005,
        });
      }
    };

    const drawStar = (
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number,
      rotation: number
    ) => {
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
      context.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
      context.save(); // Save current transformation matrix
      context.translate(x, y); // Move origin to star position
      context.rotate(rotation); // Rotate around star position
      context.beginPath();
      context.moveTo(-size, 0);
      context.lineTo(size, 0);
      context.moveTo(0, -size);
      context.lineTo(0, size);
      context.stroke();
      context.restore(); // Restore original transformation matrix
    };

    const drawStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        const starSize = maxStarSize * star.alpha;
        context.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;

        // Draw star shape with rotation
        drawStar(star.x, star.y, 5, starSize, starSize / 2, star.rotation);

        // Draw cross for sparkle effect with rotation
        drawCross(star.x, star.y, starSize * 2, star.alpha, star.rotation);

        star.alpha += star.delta;
        if (star.alpha >= 1 || star.alpha <= minStarSize) {
          star.delta *= -1;
        }

        // Update rotation
        star.rotation += star.rotationSpeed;
      });
    };
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    const debounceResize = debounce(resizeCanvas);

    const animate = () => {
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", debounceResize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", debounceResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-1" />
  );
};

export default StarsBackground;

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AIBot {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: { x: number; y: number };
  pulse: number;
}

const AIAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const botsRef = useRef<AIBot[]>([]);
  const connectionsRef = useRef<
    { from: number; to: number; opacity: number }[]
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize AI bots
    const initBots = () => {
      const botCount = 15;
      const bots: AIBot[] = [];

      for (let i = 0; i < botCount; i++) {
        bots.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 4,
          speed: Math.random() * 0.3 + 0.1,
          direction: {
            x: Math.random() * 2 - 1,
            y: Math.random() * 2 - 1,
          },
          pulse: Math.random() * 2 * Math.PI,
        });
      }

      botsRef.current = bots;
    };

    initBots();

    // Draw hexagonal grid
    const drawHexGrid = () => {
      ctx.strokeStyle = "rgba(100, 116, 139, 0.05)";
      ctx.lineWidth = 1;

      const hexSize = 40;
      const width = canvas.width + hexSize * 2;
      const height = canvas.height + hexSize * 2;
      const rows = Math.ceil(height / (hexSize * 1.5));
      const cols = Math.ceil(width / (hexSize * Math.sqrt(3)));

      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          const x = c * hexSize * Math.sqrt(3);
          const y = r * hexSize * 1.5;

          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const xPos = x + hexSize * Math.cos(angle);
            const yPos = y + hexSize * Math.sin(angle);

            if (i === 0) {
              ctx.moveTo(xPos, yPos);
            } else {
              ctx.lineTo(xPos, yPos);
            }
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
    };

    // Update bot positions and create connections
    const updateBots = () => {
      const bots = botsRef.current;
      const connections: { from: number; to: number; opacity: number }[] = [];

      // Update bot positions
      bots.forEach((bot) => {
        // Update position
        bot.x += bot.direction.x * bot.speed;
        bot.y += bot.direction.y * bot.speed;

        // Bounce off walls
        if (bot.x < 0 || bot.x > canvas.width) {
          bot.direction.x *= -1;
        }
        if (bot.y < 0 || bot.y > canvas.height) {
          bot.direction.y *= -1;
        }

        // Update pulse
        bot.pulse += 0.02;
        if (bot.pulse > Math.PI * 2) {
          bot.pulse = 0;
        }

        // Create connections
        bots.forEach((otherBot) => {
          if (bot.id !== otherBot.id) {
            const dx = bot.x - otherBot.x;
            const dy = bot.y - otherBot.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              const opacity = 1 - distance / 150;
              connections.push({
                from: bot.id,
                to: otherBot.id,
                opacity,
              });
            }
          }
        });
      });

      connectionsRef.current = connections;
    };

    // Draw the animation
    const drawAnimation = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw hexagonal grid
      drawHexGrid();

      const bots = botsRef.current;
      const connections = connectionsRef.current;

      // Draw connections
      connections.forEach((connection) => {
        const fromBot = bots[connection.from];
        const toBot = bots[connection.to];

        ctx.beginPath();
        ctx.moveTo(fromBot.x, fromBot.y);
        ctx.lineTo(toBot.x, toBot.y);
        ctx.strokeStyle = `rgba(100, 116, 139, ${connection.opacity * 0.2})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Draw bots
      bots.forEach((bot) => {
        // Draw bot
        ctx.beginPath();
        ctx.arc(bot.x, bot.y, bot.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(100, 116, 139, 0.6)";
        ctx.fill();

        // Draw pulse
        const pulseSize = bot.size + Math.sin(bot.pulse) * 3;
        ctx.beginPath();
        ctx.arc(bot.x, bot.y, pulseSize, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(100, 116, 139, 0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw small particles around bots
        const particleCount = 3;
        for (let i = 0; i < particleCount; i++) {
          const angle = (i * Math.PI * 2) / particleCount + bot.pulse;
          const distance = bot.size * 2;
          const x = bot.x + Math.cos(angle) * distance;
          const y = bot.y + Math.sin(angle) * distance;

          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(100, 116, 139, 0.3)";
          ctx.fill();
        }
      });
    };

    // Animation loop
    const animate = () => {
      updateBots();
      drawAnimation();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full absolute inset-0 -z-10 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.8 }}
      />
    </motion.div>
  );
};

export default AIAnimation;

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-background flex flex-col justify-center p-4 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <p className="text-primary font-medium text-sm">
              AI-Powered Business Solutions
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Transform Your <span className="text-primary">Business</span> With
            AI Technology
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            ThinkOps AI delivers cutting-edge solutions that optimize workflows,
            automate processes, and drive intelligent decision-making for
            forward-thinking businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground px-8 py-6 text-lg rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-full border-2 hover:bg-muted/50 transition-colors"
            >
              Book a Demo
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=client${i}`}
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="font-medium">Trusted by 500+ companies</p>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  4.9/5 rating
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content - 3D Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -z-10 top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute -z-10 top-1/3 right-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

          <div className="relative w-full h-[500px] flex items-center justify-center">
            <div className="w-full h-full rounded-2xl shadow-sm bg-background/90 backdrop-blur-sm border border-border/30 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-pink-500/5"></div>

              {/* Hexagonal grid background */}
              <div className="absolute inset-0 opacity-5">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="hexagons"
                      width="50"
                      height="43.4"
                      patternUnits="userSpaceOnUse"
                      patternTransform="scale(2) rotate(0)"
                    >
                      <polygon
                        points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#hexagons)"
                    className="text-primary"
                  />
                </svg>
              </div>

              {/* Animated circuit lines */}
              <div className="absolute inset-0">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {[...Array(8)].map((_, i) => {
                    const startX = Math.random() * 100;
                    const startY = Math.random() * 100;
                    const endX = Math.random() * 100;
                    const endY = Math.random() * 100;
                    const midX1 = startX + (endX - startX) * 0.33;
                    const midY1 = startY;
                    const midX2 = startX + (endX - startX) * 0.66;
                    const midY2 = endY;

                    return (
                      <path
                        key={i}
                        d={`M ${startX} ${startY} L ${midX1} ${midY1} L ${midX2} ${midY2} L ${endX} ${endY}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="200"
                        strokeDashoffset="0"
                        className="text-primary/20"
                        style={{
                          animation: `circuit ${Math.random() * 10 + 15}s linear infinite`,
                          animationDelay: `${Math.random() * 5}s`,
                        }}
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Glowing nodes */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => {
                  const size = Math.random() * 6 + 4;
                  return (
                    <div
                      key={i}
                      className="absolute rounded-full bg-primary/25 animate-pulse"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        boxShadow: "0 0 10px 2px currentColor",
                        animationDuration: `${Math.random() * 3 + 2}s`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    ></div>
                  );
                })}
              </div>

              {/* Floating data particles */}
              <div className="absolute inset-0">
                {[...Array(40)].map((_, i) => {
                  const size = Math.random() * 2 + 1;
                  return (
                    <div
                      key={i}
                      className="absolute rounded-full bg-blue-400/15"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                      }}
                    ></div>
                  );
                })}
              </div>

              {/* Radial pulse effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-32 h-32 rounded-full border border-primary/10 animate-ping"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div
                  className="absolute w-24 h-24 rounded-full border border-primary/15 animate-ping"
                  style={{ animationDuration: "3s", animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute w-16 h-16 rounded-full border border-primary/20 animate-ping"
                  style={{ animationDuration: "3s", animationDelay: "1s" }}
                ></div>
              </div>

              {/* Central text */}
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1px]">
                <div className="text-4xl font-bold text-foreground/90 text-center drop-shadow-lg">
                  AI-Powered
                  <br />
                  Innovation
                </div>
              </div>

              {/* Add a style tag for the circuit animation */}
              <style jsx>{`
                @keyframes circuit {
                  0% {
                    stroke-dashoffset: 200;
                  }
                  100% {
                    stroke-dashoffset: 0;
                  }
                }
                @keyframes float {
                  0% {
                    transform: translateY(0) translateX(0);
                  }
                  25% {
                    transform: translateY(-20px) translateX(10px);
                  }
                  50% {
                    transform: translateY(0) translateX(20px);
                  }
                  75% {
                    transform: translateY(20px) translateX(10px);
                  }
                  100% {
                    transform: translateY(0) translateX(0);
                  }
                }
              `}</style>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

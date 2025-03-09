import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, GitMerge, Code, BrainCircuit } from "lucide-react";

const services = [
  {
    title: "AI Process Automation",
    description:
      "Automate repetitive tasks and workflows with intelligent AI systems that learn and improve over time.",
    icon: Cpu,
    color: "bg-gradient-to-r from-blue-600 to-indigo-600",
    learnMoreLink: "#",
  },
  {
    title: "Intelligent Workflows",
    description:
      "Optimize business processes with AI-powered workflow solutions that eliminate bottlenecks.",
    icon: GitMerge,
    color: "bg-gradient-to-r from-orange-500 to-pink-500",
    learnMoreLink: "#",
  },
  {
    title: "Custom AI Development",
    description:
      "Tailored AI solutions built specifically for your business needs and integration requirements.",
    icon: Code,
    color: "bg-gradient-to-r from-purple-600 to-indigo-600",
    learnMoreLink: "#",
  },
  {
    title: "AI-Driven Decision Systems",
    description:
      "Leverage machine learning to create intelligent decision-making systems for your organization.",
    icon: BrainCircuit,
    color: "bg-gradient-to-r from-teal-500 to-emerald-500",
    learnMoreLink: "#",
  },
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const cardsToShow = 3;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= services.length - (cardsToShow - 1) ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - cardsToShow : prevIndex - 1,
    );
  };

  const visibleServices = [];
  for (let i = 0; i < cardsToShow; i++) {
    const index = (currentIndex + i) % services.length;
    visibleServices.push(services[index]);
  }

  return (
    <section className="w-full py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="max-w-lg mb-10 md:mb-0">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
              <p className="text-white font-medium text-sm">Our Services</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-left">
              AI Automation That Drives{" "}
              <span className="text-primary">Real Results</span>
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-lg text-muted-foreground">
              Our cutting-edge AI automation solutions streamline your business
              operations, eliminate manual tasks, and create intelligent
              workflows that adapt to your organization's needs.
            </p>
          </div>
        </div>

        <div className="mt-16 relative px-12">
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-md border border-indigo-300 flex items-center justify-center z-10 bg-white shadow-md hover:bg-indigo-50 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-md border border-indigo-300 flex items-center justify-center z-10 bg-white shadow-md hover:bg-indigo-50 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <div className="flex justify-center gap-8">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                {visibleServices.map((service, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -50 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-sm flex-shrink-0"
                  >
                    <div className="bg-white rounded-xl border border-border p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                      <div className="mb-6">
                        <div
                          className={`w-16 h-16 ${service.color} rounded-md flex items-center justify-center mb-6 shadow-md`}
                        >
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-auto">
                        <a
                          href={service.learnMoreLink}
                          className="text-primary font-medium hover:underline"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(
                    index > services.length - cardsToShow
                      ? services.length - cardsToShow
                      : index,
                  );
                }}
                className={`w-8 h-2 rounded-sm transition-colors ${index >= currentIndex && index < currentIndex + cardsToShow ? "bg-indigo-600" : "bg-indigo-200"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

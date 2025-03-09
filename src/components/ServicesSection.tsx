import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, BarChart2, LineChart, Database } from "lucide-react";

const services = [
  {
    title: "AI-Powered Chatbots",
    description:
      "AI-powered chatbots: seamless conversations, customer support.",
    icon: MessageSquare,
    color: "bg-blue-500",
    learnMoreLink: "#",
  },
  {
    title: "Predictive Analytics",
    description: "Anticipating success today. Harness data to make proactive.",
    icon: BarChart2,
    color: "bg-orange-500",
    learnMoreLink: "#",
  },
  {
    title: "Data Analytics",
    description:
      "Uncover insights, drive decisions. Transform data into actionable.",
    icon: LineChart,
    color: "bg-purple-500",
    learnMoreLink: "#",
  },
  {
    title: "Big Data Processing",
    description:
      "Process massive datasets efficiently with our scalable solutions.",
    icon: Database,
    color: "bg-green-500",
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
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="max-w-lg mb-10 md:mb-0">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-primary font-medium text-sm">Our Services</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              AI Solutions That Drive{" "}
              <span className="text-primary">Real Results</span>
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-lg text-muted-foreground">
              Our cutting-edge AI solutions are designed to transform your
              business operations, increase efficiency, and provide actionable
              insights for strategic growth.
            </p>
          </div>
        </div>

        <div className="mt-16 relative px-12">
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border flex items-center justify-center z-10 bg-background/80 backdrop-blur-sm hover:bg-primary/10 transition-colors"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border flex items-center justify-center z-10 bg-background/80 backdrop-blur-sm hover:bg-primary/10 transition-colors"
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
                          className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}
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
                className={`w-2.5 h-2.5 rounded-full transition-colors ${index >= currentIndex && index < currentIndex + cardsToShow ? "bg-primary" : "bg-primary/30"}`}
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

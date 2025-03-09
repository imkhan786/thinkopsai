import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO, TechForward",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    content:
      "ThinkOps AI transformed our customer service operations. We've seen a 40% reduction in response times and a 25% increase in customer satisfaction scores.",
    metric: "40% faster response time",
    company: "TechForward",
    industry: "SaaS",
  },
  {
    name: "Michael Chen",
    position: "Operations Director, GlobalLogic",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    content:
      "Implementing ThinkOps AI workflow optimization tools helped us identify bottlenecks we didn't even know existed. Our productivity has increased by 35% in just three months.",
    metric: "35% productivity increase",
    company: "GlobalLogic",
    industry: "Manufacturing",
  },
  {
    name: "Elena Rodriguez",
    position: "CEO, Innovate Financial",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=elena",
    content:
      "The decision-making insights from ThinkOps AI have been game-changing for our investment strategies. We've seen a 28% improvement in portfolio performance year-over-year.",
    metric: "28% better performance",
    company: "Innovate Financial",
    industry: "Finance",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="max-w-lg mb-10 md:mb-0">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
              <p className="text-white font-medium text-sm">Success Stories</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What Our <span className="text-primary">Clients</span> Say
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-lg text-muted-foreground">
              Discover how ThinkOps AI has helped businesses across various
              industries achieve remarkable results through our innovative AI
              solutions.
            </p>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute -z-10 top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
          <div className="absolute -z-10 bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div
                className="flex items-center space-x-4 mb-8"
                onClick={() => {
                  prev();
                  setAutoplay(false);
                }}
              >
                <div className="w-12 h-12 rounded-md border border-indigo-300 flex items-center justify-center cursor-pointer hover:bg-indigo-50 transition-colors shadow-md">
                  <ChevronLeft className="w-6 h-6" />
                </div>
                <div
                  className="w-12 h-12 rounded-md border border-indigo-300 flex items-center justify-center cursor-pointer hover:bg-indigo-50 transition-colors shadow-md"
                  onClick={() => {
                    next();
                    setAutoplay(false);
                  }}
                >
                  <ChevronRight className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`cursor-pointer p-4 rounded-md transition-all duration-300 ${current === index ? "bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-600" : "hover:bg-indigo-50"}`}
                    onClick={() => {
                      setDirection(index > current ? 1 : -1);
                      setCurrent(index);
                      setAutoplay(false);
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="overflow-hidden bg-white rounded-md border border-indigo-200 p-8 lg:p-12 h-full shadow-md">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -100 }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h3 className="text-xl font-bold">
                            {testimonials[current].company}
                          </h3>
                          <p className="text-muted-foreground">
                            {testimonials[current].industry} Industry
                          </p>
                        </div>
                        <div className="text-primary">
                          <Quote className="w-10 h-10 opacity-50" />
                        </div>
                      </div>

                      <p className="text-xl leading-relaxed mb-8">
                        "{testimonials[current].content}"
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-14 h-14">
                            <AvatarImage
                              src={testimonials[current].avatar}
                              alt={testimonials[current].name}
                            />
                            <AvatarFallback>
                              {testimonials[current].name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">
                              {testimonials[current].name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonials[current].position}
                            </p>
                          </div>
                        </div>

                        <div className="py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md">
                          <p className="font-semibold text-white">
                            {testimonials[current].metric}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

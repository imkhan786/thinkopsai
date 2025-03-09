import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AIAnimation from "./AIAnimation";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] bg-background flex flex-col justify-center p-4 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            <p className="text-white font-medium text-sm">
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
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-6 text-lg rounded-md font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-md border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 transition-colors shadow-md"
            >
              Book a Demo
            </Button>
          </div>
        </motion.div>

        {/* Right Content - AI Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full h-[500px] flex items-center justify-center">
            <div className="w-full h-full rounded-2xl shadow-sm bg-background/90 backdrop-blur-sm border border-border/30 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-pink-500/5"></div>

              {/* AI Animation */}
              <div className="absolute inset-0">
                <AIAnimation />
              </div>

              {/* Central text */}
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1px]">
                <div className="text-4xl font-bold text-foreground/90 text-center drop-shadow-lg">
                  AI-Powered
                  <br />
                  Innovation
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

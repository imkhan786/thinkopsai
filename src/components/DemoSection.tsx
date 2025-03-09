import { useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const DemoSection = () => {
  const [employees, setEmployees] = useState<number>(50);
  const [processes, setProcesses] = useState<number>(5);
  const [hours, setHours] = useState<number>(40);
  const [result, setResult] = useState<number | null>(null);

  const calculateEfficiency = () => {
    // Simple calculation for demo purposes
    const efficiency = Math.round((employees * hours * 0.2) / processes);
    setResult(efficiency);
  };

  return (
    <section className="w-full py-24 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-primary font-medium text-sm">
                Interactive Demo
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              See the <span className="text-primary">Impact</span> of Our AI
              Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Use our interactive calculator to estimate how ThinkOps AI
              solutions can transform your business operations and improve
              efficiency.
            </p>

            <div className="space-y-8 mb-8">
              <div className="space-y-4 bg-background p-6 rounded-2xl border border-border">
                <div className="flex items-center justify-between">
                  <Label htmlFor="employees" className="text-base font-medium">
                    Number of Employees
                  </Label>
                  <span className="text-lg font-semibold">{employees}</span>
                </div>
                <Slider
                  id="employees"
                  min={10}
                  max={500}
                  step={10}
                  value={[employees]}
                  onValueChange={(value) => setEmployees(value[0])}
                  className="py-2"
                />
              </div>

              <div className="space-y-4 bg-background p-6 rounded-2xl border border-border">
                <div className="flex items-center justify-between">
                  <Label htmlFor="processes" className="text-base font-medium">
                    Number of Processes
                  </Label>
                  <span className="text-lg font-semibold">{processes}</span>
                </div>
                <Slider
                  id="processes"
                  min={1}
                  max={20}
                  step={1}
                  value={[processes]}
                  onValueChange={(value) => setProcesses(value[0])}
                  className="py-2"
                />
              </div>

              <div className="space-y-4 bg-background p-6 rounded-2xl border border-border">
                <div className="flex items-center justify-between">
                  <Label htmlFor="hours" className="text-base font-medium">
                    Weekly Hours per Employee
                  </Label>
                  <span className="text-lg font-semibold">{hours}</span>
                </div>
                <Slider
                  id="hours"
                  min={10}
                  max={60}
                  step={1}
                  value={[hours]}
                  onValueChange={(value) => setHours(value[0])}
                  className="py-2"
                />
              </div>
            </div>

            <Button
              onClick={calculateEfficiency}
              size="lg"
              className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-6"
            >
              Calculate Efficiency
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -z-10 top-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>

            <div className="bg-background border border-border rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Efficiency Analysis</h3>
                  <p className="text-muted-foreground">
                    Powered by ThinkOps AI
                  </p>
                </div>
              </div>

              {result === null ? (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground">
                    Adjust the parameters and calculate to see your potential
                    efficiency gains
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="text-center py-6">
                    <p className="text-lg font-medium mb-2">
                      Potential Efficiency Gain
                    </p>
                    <div className="relative inline-block">
                      <svg className="w-48 h-48" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="10"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="10"
                          strokeDasharray={`${result * 2.83} 283`}
                          strokeDashoffset="0"
                          strokeLinecap="round"
                          className="text-primary transform -rotate-90 origin-center transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-4xl font-bold">{result}%</span>
                        <span className="text-sm text-muted-foreground">
                          Improvement
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-muted/30 rounded-xl">
                      <span>Current Efficiency</span>
                      <span className="font-semibold">Baseline</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-primary/10 rounded-xl">
                      <span>Projected Efficiency</span>
                      <span className="font-semibold text-primary">
                        +{result}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-muted/30 rounded-xl">
                      <span>Estimated Annual Savings</span>
                      <span className="font-semibold">
                        ${Math.round(employees * 1000 * (result / 100))},000
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      Based on industry averages and your input parameters.
                      Contact us for a detailed analysis specific to your
                      business.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

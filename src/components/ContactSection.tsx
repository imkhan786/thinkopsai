import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full py-24 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="max-w-lg mb-10 md:mb-0">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-primary font-medium text-sm">Contact Us</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to <span className="text-primary">Transform</span> Your
              Business?
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-lg text-muted-foreground">
              Get in touch with our team of AI experts to discuss how ThinkOps
              can help optimize your operations and drive growth through
              intelligent automation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-background rounded-3xl border border-border p-8 h-full"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-muted-foreground">
                        contact@thinkops.ai
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Address</p>
                      <p className="text-muted-foreground">
                        123 AI Innovation Center, Tech District, San Francisco,
                        CA 94105
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Office Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">How We Can Help</h3>
                <ul className="space-y-3">
                  {[
                    "AI strategy consultation",
                    "Workflow automation implementation",
                    "Custom AI solution development",
                    "Process optimization analysis",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-background rounded-3xl border border-border p-8"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="h-12 rounded-xl border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="h-12 rounded-xl border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-base font-medium">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your company"
                    className="h-12 rounded-xl border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    className="h-12 rounded-xl border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-base font-medium">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  className="h-12 rounded-xl border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  className="rounded-xl border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to our{" "}
                <span className="text-primary hover:underline cursor-pointer">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="text-primary hover:underline cursor-pointer">
                  Terms of Service
                </span>
                .
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

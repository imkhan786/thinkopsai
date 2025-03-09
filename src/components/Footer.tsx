import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  ArrowRight,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-muted/10 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                ThinkOps<span className="text-primary">AI</span>
              </h3>
              <p className="text-muted-foreground max-w-md">
                Transforming businesses with cutting-edge AI technology and
                innovative solutions that drive efficiency, growth, and
                competitive advantage.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Subscribe to our newsletter</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="rounded-full bg-background border-border"
                />
                <Button className="rounded-full px-4 flex-shrink-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get the latest AI insights and updates delivered to your inbox.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Intelligent Automation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Workflow Optimization
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI-Driven Decision-Making
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom AI Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Strategy Consulting
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </span>
                <a
                  href="mailto:contact@thinkops.ai"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@thinkops.ai
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </span>
                <a
                  href="tel:+15551234567"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span className="text-muted-foreground">
                  123 AI Innovation Center, San Francisco, CA
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-muted-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-muted-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ThinkOps AI Solutions. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

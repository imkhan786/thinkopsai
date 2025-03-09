import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  ArrowRight,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-3">
                ThinkOps<span className="text-blue-400">AI</span>
              </h3>
              <p className="text-slate-300 text-sm max-w-md">
                Transforming businesses with cutting-edge AI technology and
                innovative solutions that drive efficiency, growth, and
                competitive advantage.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-sm">
                Subscribe to our newsletter
              </h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="rounded-md bg-slate-800 border-slate-700 h-9 text-sm"
                />
                <Button className="rounded-md px-3 flex-shrink-0 bg-blue-500 hover:bg-blue-600 h-9">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Intelligent Automation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Workflow Optimization
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  AI-Driven Decision-Making
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Custom AI Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  AI Strategy Consulting
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-blue-400 mr-3" />
                <a
                  href="mailto:contact@thinkops.ai"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  contact@thinkops.ai
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-blue-400 mr-3" />
                <a
                  href="tel:+15551234567"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 text-blue-400 mr-3" />
                <span className="text-slate-300">
                  123 AI Innovation Center, San Francisco, CA
                </span>
              </li>
            </ul>

            <div className="mt-4">
              <div className="flex space-x-3 mt-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <Twitter className="w-4 h-4 text-slate-300" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-slate-300" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-slate-300" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-slate-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-4 bg-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs py-2">
          <p className="text-slate-400">
            © {new Date().getFullYear()} ThinkOps AI Solutions. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition-colors"
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

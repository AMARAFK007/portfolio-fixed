
import { motion } from "framer-motion";
import { 
  Layers, 
  Twitter, 
  Linkedin, 
  Github, 
  Mail 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Layers className="h-8 w-8 text-primary" />
              <span className="ml-2 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                FlowTech
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Building the future of software infrastructure. Fast, reliable, and secure.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter className="h-5 w-5" />, href: "#" },
                { icon: <Linkedin className="h-5 w-5" />, href: "#" },
                { icon: <Github className="h-5 w-5" />, href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Product",
                links: ["Features", "Solutions", "Integrations", "Pricing", "Changelog"]
              },
              {
                title: "Resources",
                links: ["Documentation", "API Reference", "Guides", "Community", "Blog"]
              },
              {
                title: "Company",
                links: ["About", "Careers", "Contact", "Privacy Policy", "Terms"]
              }
            ].map((column, i) => (
              <div key={i}>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-400 hover:text-white transition"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} FlowTech, Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#contact" className="flex items-center text-sm text-gray-400 hover:text-white transition">
              <Mail className="h-4 w-4 mr-2" />
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

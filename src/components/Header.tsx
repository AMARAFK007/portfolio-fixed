
import { motion } from "framer-motion";
import { Layers, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/90 backdrop-blur-lg border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 flex items-center"
          >
            <Layers className="h-8 w-8 text-primary" />
            <span className="ml-2 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              FlowTech
            </span>
          </motion.div>
          <motion.nav 
            className="hidden md:ml-6 md:flex md:space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['Features', 'Solutions', 'Pricing', 'About'].map((item, index) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="group text-sm text-gray-300 hover:text-white relative px-3 py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </motion.nav>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="#contact" className="text-sm px-4 py-2 rounded-md border border-white/20 text-gray-300 hover:text-white hover:border-primary/70 transition-all duration-300">
              Sign In
            </a>
            <a href="#demo" className="ml-4 flex items-center text-sm px-4 py-2 rounded-md bg-primary/90 hover:bg-primary text-white transition-all duration-300">
              Get Started <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;

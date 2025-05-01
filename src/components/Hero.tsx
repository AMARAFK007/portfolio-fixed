
import { motion } from "framer-motion";
import ParallaxImage from "./ui/ParallaxImage";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&q=80"
          alt="Hero background"
          height="h-screen"
          priority={true}
          speed={0.3}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-20">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gradient">Innovate</span> with the Power <br />
          of <span className="text-gradient">Technology</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-3xl text-lg sm:text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Deploy cutting-edge solutions that transform your business.
          Our platform delivers unmatched performance and reliability.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#features" 
            className="px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Explore Features
          </a>
          <a 
            href="#demo" 
            className="px-8 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-white transition-all duration-300"
          >
            Request Demo
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 1, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        <a href="#features" className="inline-block">
          <ChevronDown className="h-10 w-10 text-white/80" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

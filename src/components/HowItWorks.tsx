
import { motion } from "framer-motion";
import { 
  ArrowDown, 
  CheckCircle, 
  Code, 
  Rocket 
} from "lucide-react";

const steps = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Integrate Our API",
    description: "Add a few lines of code to connect your application to our platform."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Configure Your Settings",
    description: "Customize your implementation to match your business requirements."
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Launch & Scale",
    description: "Go live with confidence and scale as your business grows."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Get up and running in minutes with our simple implementation process
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="glass-morphism p-8 rounded-xl text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-4 bg-white/5 rounded-full w-min mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 left-full -translate-x-1/2 transform text-gray-500">
                  <ArrowDown className="rotate-90 h-8 w-8" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#demo" 
            className="inline-block px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

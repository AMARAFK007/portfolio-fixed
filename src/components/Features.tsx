
import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Layers 
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Lightning Fast",
    description: "Our optimized infrastructure delivers sub-millisecond response times for critical applications.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Enterprise Security",
    description: "Military-grade encryption and compliance with global security standards protect your data.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Advanced Analytics",
    description: "Gain insights with real-time analytics and customizable dashboards for data-driven decisions.",
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Scalable Solution",
    description: "Seamlessly scale from startup to enterprise with our flexible infrastructure and pricing.",
  },
];

const featureAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.3,
      duration: 0.5,
    },
  }),
};

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful <span className="text-gradient">Features</span>
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our platform provides everything you need to build and scale your applications
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-morphism p-6 rounded-xl"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={featureAnimation}
            >
              <div className="p-3 bg-white/5 rounded-lg w-min mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

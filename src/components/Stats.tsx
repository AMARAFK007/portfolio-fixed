
import { motion } from "framer-motion";
import AnimatedCounter from "./ui/AnimatedCounter";
import ParallaxImage from "./ui/ParallaxImage";

const Stats = () => {
  const statsData = [
    { value: 99.9, suffix: "%", label: "Uptime SLA" },
    { value: 500, suffix: "+", label: "Enterprise Clients" },
    { value: 10, suffix: "M+", label: "API Requests Daily" },
    { value: 27, label: "Global Data Centers" }
  ];

  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 z-0 opacity-70">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80"
          alt="Stats background"
          height="h-full"
          speed={0.2}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Our platform delivers industry-leading performance metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-morphism p-6 sm:p-8 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-gradient">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix || ""}
                  decimalPlaces={stat.value % 1 !== 0 ? 1 : 0}
                />
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

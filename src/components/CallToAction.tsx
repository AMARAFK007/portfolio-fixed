
import { motion } from "framer-motion";
import ParallaxImage from "./ui/ParallaxImage";

const CallToAction = () => {
  return (
    <section id="demo" className="relative py-20 lg:py-32">
      <div className="absolute inset-0 z-0">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80"
          alt="CTA background"
          height="h-full"
          speed={0.3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-morphism rounded-2xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </motion.h2>
          
          <motion.p 
            className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of businesses that have already upgraded their technology stack with our platform.
          </motion.p>

          <motion.form 
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary/70 focus:outline-none focus:ring-1 focus:ring-primary/70 transition"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Request Demo
            </button>
          </motion.form>
          
          <motion.p 
            className="mt-4 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            No credit card required. Free 14-day trial.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

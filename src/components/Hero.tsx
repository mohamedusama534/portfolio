import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider"
          >
            Available for Internships & Jobs
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Mohamed <span className="text-primary">Usama</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            B.Sc Information Technology Graduate
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Aspiring IT Professional passionate about technology and problem solving. 
            Dedicated to building efficient solutions and continuously learning new technologies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="projects" smooth={true} duration={500}>
              <Button size="lg" className="rounded-full px-8 group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Profile Photo Placeholder - Using a professional avatar style */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/professional-it/800/800"
                alt="Mohamed Usama"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-primary/20 rounded-3xl -z-10 transform rotate-6" />
            <div className="absolute -inset-4 border border-primary/10 rounded-3xl -z-10 transform -rotate-3" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

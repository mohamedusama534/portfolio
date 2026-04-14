import { motion } from 'motion/react';
import { FileText, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 mb-8"
          >
            <FileText className="h-8 w-8" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to work together?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Download my full resume to see more details about my experience, 
            skills, and academic achievements.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" variant="secondary" className="rounded-full px-8 font-bold group">
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              Download CV
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 font-bold border-white/20 hover:bg-white/10 text-white">
              <Eye className="mr-2 h-5 w-5" />
              View Online
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Briefcase, CheckCircle2, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Internship() {
  return (
    <section id="internship" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Experience</h2>
            <h3 className="text-4xl font-bold mb-6">Professional Internship</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">V.O. Chidambaranar Port Authority</h4>
                  <p className="text-muted-foreground">Thoothukudi Harbor</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Completed a comprehensive internship focused on understanding the IT infrastructure 
                and operational systems of a major port authority. Gained hands-on experience 
                with real-world technical challenges.
              </p>

              <div className="grid gap-4">
                {[
                  'Assisted in network maintenance and troubleshooting',
                  'Learned about port management software systems',
                  'Participated in database management tasks',
                  'Observed large-scale IT infrastructure operations'
                ].map((task) => (
                  <div key={task} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <Card className="border-none shadow-2xl overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src="https://picsum.photos/seed/harbor-it/800/450"
                  alt="Port Authority Internship"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-xl border border-border">
                  <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">Key Learning</p>
                  <p className="font-medium">Enterprise-level IT Infrastructure & Network Security</p>
                </div>
              </div>
              <CardContent className="p-8">
                <h5 className="font-bold mb-4">Technologies & Tools Used</h5>
                <div className="flex flex-wrap gap-2">
                  {['Networking', 'Database Management', 'System Administration', 'Troubleshooting', 'ERP Systems'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-muted text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-primary mb-4"
          >
            Education
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold"
          >
            Academic Background
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden border-border/50 shadow-lg">
            <div className="bg-primary h-2 w-full" />
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">B.Sc Information Technology</h4>
                    <p className="text-lg font-medium text-muted-foreground">Sadakathullah Appa College</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Rahmath Nagar</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2021 - 2024</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-bold mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Key Coursework
                  </h5>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Data Structures & Algorithms</li>
                    <li>• Database Management Systems</li>
                    <li>• Web Technologies (HTML/CSS/JS)</li>
                    <li>• Object Oriented Programming (Java)</li>
                    <li>• Software Engineering</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Achievements
                  </h5>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Consistently maintained high academic standing</li>
                    <li>• Active participant in college technical symposiums</li>
                    <li>• Completed multiple academic IT projects</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

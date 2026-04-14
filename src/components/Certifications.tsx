import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const certifications = [
  {
    title: 'Python for Data Science',
    issuer: 'Coursera / IBM',
    date: '2023',
    icon: <Award className="h-6 w-6 text-primary" />
  },
  {
    title: 'SQL Fundamentals',
    issuer: 'SoloLearn',
    date: '2022',
    icon: <Award className="h-6 w-6 text-primary" />
  },
  {
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    date: '2023',
    icon: <Award className="h-6 w-6 text-primary" />
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-primary mb-4"
          >
            Achievements
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold"
          >
            Certifications & Workshops
          </motion.h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="hover:border-primary/50 transition-colors group cursor-pointer">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {cert.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold leading-tight mb-1">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

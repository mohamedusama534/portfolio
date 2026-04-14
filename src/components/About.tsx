import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, Users, MessageSquare } from 'lucide-react';

const strengths = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Teamwork',
    description: 'Collaborating effectively to achieve common goals.'
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: 'Problem Solving',
    description: 'Analytical approach to technical challenges.'
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: 'Communication',
    description: 'Clear and concise exchange of information.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">About Me</h2>
            <h3 className="text-4xl font-bold mb-6 leading-tight">
              A Dedicated IT Professional <br /> with a Passion for Innovation
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am a recent B.Sc. Information Technology graduate from Sadakathullah Appa College. 
              My academic journey has provided me with a solid foundation in software development, 
              database management, and network systems.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My career goal is to leverage my technical skills in a dynamic IT environment where 
              I can contribute to meaningful projects while continuously expanding my expertise 
              in emerging technologies.
            </p>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold">Career Goal</p>
                <p className="text-sm text-muted-foreground">To become a skilled Full Stack Developer</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="mt-1">{strength.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{strength.title}</h4>
                      <p className="text-muted-foreground">{strength.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Code2, Globe, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Code2 className="h-6 w-6" />,
    skills: ['Python', 'Java', 'SQL']
  },
  {
    title: 'Web Development',
    icon: <Globe className="h-6 w-6" />,
    skills: ['HTML5', 'CSS3', 'JavaScript']
  },
  {
    title: 'Tools & Systems',
    icon: <Wrench className="h-6 w-6" />,
    skills: ['MS Office', 'Git', 'Database Management']
  },
  {
    title: 'Soft Skills',
    icon: <Brain className="h-6 w-6" />,
    skills: ['Communication', 'Teamwork', 'Problem Solving']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-primary mb-4"
          >
            My Skills
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold"
          >
            Technical & Professional Expertise
          </motion.h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-background border border-border hover:border-primary/30 hover:shadow-xl transition-all group"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold mb-6">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-muted text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

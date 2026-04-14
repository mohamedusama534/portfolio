import { motion } from 'motion/react';
import { ExternalLink, Github, FolderCode } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Student Management System',
    description: 'A comprehensive system to manage student records, attendance, and grades using Java and SQL.',
    tech: ['Java', 'Swing', 'MySQL'],
    image: 'https://picsum.photos/seed/project1/600/400'
  },
  {
    title: 'E-Commerce Web Template',
    description: 'A responsive front-end template for an online store with product filtering and shopping cart UI.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://picsum.photos/seed/project2/600/400'
  },
  {
    title: 'Library Database Design',
    description: 'Relational database schema design for a library system with complex queries and reports.',
    tech: ['SQL', 'Database Design', 'Oracle'],
    image: 'https://picsum.photos/seed/project3/600/400'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-widest text-primary mb-4"
            >
              Portfolio
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold"
            >
              Featured Projects
            </motion.h3>
          </div>
          <Button variant="outline" className="rounded-full">
            View All Projects
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-2xl h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <FolderCode className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Project</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold px-2 py-1 rounded bg-primary/5 text-primary border border-primary/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

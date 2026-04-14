import { Link } from 'react-scroll';
import { Linkedin, Github, Twitter, Instagram, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-bold tracking-tighter cursor-pointer mb-6 inline-block"
            >
              MU<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-lg max-w-sm mb-8">
              B.Sc Information Technology graduate passionate about building digital solutions 
              and solving complex problems.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin className="h-5 w-5" />, href: '#' },
                { icon: <Github className="h-5 w-5" />, href: '#' },
                { icon: <Twitter className="h-5 w-5" />, href: '#' },
                { icon: <Instagram className="h-5 w-5" />, href: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Education', 'Internship', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>Rahmath Nagar, Thoothukudi</li>
              <li>Tamil Nadu, India</li>
              <li>mohamedusama534@gmail.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Mohamed Usama. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}

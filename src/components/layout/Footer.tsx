import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-black border-t border-brand-yellow/10 pt-16 pb-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand & Mission */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/src/assets/logo.png" alt="Fitness Yard Gym" className="h-16 w-auto" />
                        <div className="flex flex-col">
                            <span className="font-heading font-extrabold text-2xl tracking-tighter leading-none">
                                FITNESS <span className="text-brand-yellow">YARD</span>
                            </span>
                            <span className="text-[10px] tracking-[0.2em] font-bold text-brand-yellow/60">MEERUT'S ELITE GYM</span>
                        </div>
                    </Link>
                    <p className="text-muted-foreground leading-relaxed">
                        Smash your fitness goals with Meerut's most energetic community. Pro trainers, elite equipment, and real results.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/fitness_yard_gym/?hl=en" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-yellow/10 text-brand-yellow rounded-full hover:bg-brand-yellow hover:text-brand-black transition-all">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-2 bg-brand-yellow/10 text-brand-yellow rounded-full hover:bg-brand-yellow hover:text-brand-black transition-all">
                            <Youtube size={20} />
                        </a>
                        <a href="#" className="p-2 bg-brand-yellow/10 text-brand-yellow rounded-full hover:bg-brand-yellow hover:text-brand-black transition-all">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Project Navigation</h4>
                    <ul className="space-y-4">
                        <li><Link to="/about" className="text-muted-foreground hover:text-brand-yellow transition-colors">Our Story</Link></li>
                        <li><Link to="/memberships" className="text-muted-foreground hover:text-brand-yellow transition-colors">Memberships</Link></li>
                        <li><Link to="/classes" className="text-muted-foreground hover:text-brand-yellow transition-colors">Class Schedule</Link></li>
                        <li><Link to="/trainers" className="text-muted-foreground hover:text-brand-yellow transition-colors">Elite Trainers</Link></li>
                        <li><Link to="/contact" className="text-muted-foreground hover:text-brand-yellow transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Opening Hours */}
                <div>
                    <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Gym Hours</h4>
                    <ul className="space-y-4 text-muted-foreground">
                        <li className="flex justify-between border-b border-brand-yellow/5 pb-2">
                            <span>Mon - Sat</span>
                            <span className="text-brand-yellow font-bold">5:00 AM - 10:00 PM</span>
                        </li>
                        <li className="flex justify-between border-b border-brand-yellow/5 pb-2">
                            <span>Sunday</span>
                            <span className="text-brand-yellow font-bold">Closed</span>
                        </li>
                        <li className="pt-2 text-sm italic">Note: Hours may vary on public holidays.</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Visit Us</h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <MapPin className="text-brand-yellow shrink-0" size={20} />
                            <span className="text-muted-foreground">
                                Siddhi Vinayakam Complex, Rishi Nagar, Baghpat Road, Meerut 250002
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <Phone className="text-brand-yellow shrink-0" size={20} />
                            <a href="tel:+917217861996" className="text-muted-foreground hover:text-brand-yellow">+91 72178 61996</a>
                        </li>
                        <li className="flex gap-3">
                            <Mail className="text-brand-yellow shrink-0" size={20} />
                            <a href="mailto:info@fitnessyard.com" className="text-muted-foreground hover:text-brand-yellow">info@fitnessyard.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-brand-yellow/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground text-center">
                <p>© {currentYear} Fitness Yard Gym. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link to="/privacy" className="hover:text-brand-yellow">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-brand-yellow">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

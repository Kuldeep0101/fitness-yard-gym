import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Memberships', path: '/memberships' },
        { name: 'Classes', path: '/classes' },
        { name: 'Trainers', path: '/trainers' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12',
                scrolled ? 'bg-brand-black/95 backdrop-blur-lg py-4 border-b border-brand-yellow/10' : 'bg-transparent py-8'
            )}
        >
            <div className="max-w-[1600px] mx-auto flex items-center justify-between">
                {/* Logo & Branding */}
                <Link to="/" className="flex items-center gap-4 group">
                    <img src="/src/assets/logo.png" alt="Fitness Yard Gym" className="h-10 md:h-12 w-auto transition-transform group-hover:scale-110" />
                    <div className="flex flex-col">
                        <span className="font-heading font-black text-xl md:text-2xl tracking-tighter leading-none italic">
                            FITNESS <span className="text-brand-yellow">YARD</span>
                        </span>
                        <span className="text-[10px] text-brand-yellow font-black tracking-[0.3em] uppercase opacity-80 leading-tight">
                            Meerut
                        </span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden xl:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                'font-bold uppercase tracking-widest text-xs transition-all hover:text-brand-yellow relative group',
                                location.pathname === link.path ? 'text-brand-yellow' : 'text-brand-white/80'
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full",
                                location.pathname === link.path ? "w-full" : ""
                            )} />
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-8">
                    <a
                        href="tel:+917217861996"
                        className="hidden xl:flex items-center gap-3 text-brand-white/90 hover:text-brand-yellow transition-all"
                    >
                        <div className="p-2 bg-brand-white/10 rounded-full border border-brand-white/5">
                            <Phone size={16} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-black tracking-widest opacity-60">Call Us</span>
                            <span className="font-black text-sm tracking-tight">+91 72178 61996</span>
                        </div>
                    </a>
                    <Link
                        to="/booking"
                        className="bg-brand-yellow text-brand-black px-8 py-3 rounded-full font-black text-sm tracking-widest hover:bg-brand-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(255,212,0,0.2)]"
                    >
                        BOOK FREE TRIAL
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-3 bg-brand-white/5 rounded-2xl border border-brand-white/10 text-brand-white hover:bg-brand-yellow hover:text-brand-black transition-all"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'lg:hidden fixed inset-0 top-[72px] bg-brand-black z-40 transition-transform duration-300 transform',
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <div className="flex flex-col p-8 gap-6 text-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                'font-bold transition-colors border-b border-brand-yellow/10 pb-4',
                                location.pathname === link.path ? 'text-brand-yellow' : 'text-brand-white'
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/booking"
                        className="bg-brand-yellow text-brand-black px-6 py-4 rounded-xl font-bold text-center mt-4"
                        onClick={() => setIsOpen(false)}
                    >
                        BOOK FREE TRIAL
                    </Link>
                    <a
                        href="tel:+917217861996"
                        className="flex items-center justify-center gap-2 text-brand-white font-bold py-4"
                    >
                        <Phone size={20} />
                        <span>CALL NOW</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Users, Trophy, Target, Dumbbell, UserCheck, Activity, Utensils, Star, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, classes, testimonials } from '../data/mockData';
import SEO from '../components/shared/SEO';

const Home = () => {
    const iconMap: { [key: string]: any } = {
        Dumbbell: Dumbbell,
        UserCheck: UserCheck,
        Activity: Activity,
        Utensils: Utensils,
    };

    return (
        <div className="flex flex-col w-full">
            <SEO
                title="Fitness Yard — Meerut's Gym for Real Results"
                description="Premium gym in Meerut. Weight training, Personal Coaching, and HIIT. Join the Fitness Yard community for real weight loss and muscle building results."
            />
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-32 lg:pt-40 overflow-hidden">
                {/* Background Image / Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                        alt="Gym Background"
                        className="w-full h-full object-cover opacity-60 ml-auto"
                    />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-20">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-2 rounded-lg bg-brand-yellow text-brand-black font-black text-[10px] mb-8 tracking-[0.4em] uppercase shadow-[0_10px_30px_rgba(255,212,0,0.4)]">
                                Meerut's #1 Fitness Destination
                            </span>
                            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-heading font-black leading-[0.85] mb-10 uppercase tracking-tighter italic">
                                FITNESS YARD — <br />
                                <span className="text-brand-yellow">REAL RESULTS</span> <br /> FOR REAL PEOPLE.
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                                Personal training, powerful group classes, and the equipment you need to smash your fitness goals. Join the community that builds strength.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link
                                    to="/booking"
                                    className="bg-brand-yellow text-brand-black px-10 py-5 rounded-full font-black text-lg hover:bg-brand-white transition-all transform hover:scale-105 flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(255,212,0,0.3)]"
                                >
                                    BOOK FREE TRIAL
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/classes"
                                    className="bg-transparent border-2 border-brand-white/20 text-brand-white px-10 py-5 rounded-full font-black text-lg hover:border-brand-yellow hover:text-brand-yellow transition-all flex items-center justify-center gap-3"
                                >
                                    <Play size={20} fill="currentColor" />
                                    VIEW SCHEDULE
                                </Link>
                            </div>
                        </motion.div>

                        {/* Quick Benefits */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="mt-16 flex flex-wrap gap-8"
                        >
                            {[
                                "Certified Trainers",
                                "Advanced Equipment",
                                "Personalized nutrition"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <CheckCircle2 className="text-brand-yellow" size={20} />
                                    <span className="font-bold text-sm tracking-wide uppercase opacity-80">{benefit}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-brand-black border-y border-brand-yellow/10 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            { icon: <Users size={32} />, value: "500+", label: "Active Members" },
                            { icon: <Target size={32} />, value: "10+", label: "Expert Trainers" },
                            { icon: <Trophy size={32} />, value: "5+", label: "Years Excellence" },
                            { icon: <Play size={32} />, value: "15+", label: "Weekly Classes" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center gap-4"
                            >
                                <div className="p-4 bg-brand-yellow/10 text-brand-yellow rounded-2xl mb-2">
                                    {stat.icon}
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-brand-white">{stat.value}</h3>
                                <p className="text-brand-yellow font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-32 bg-[#080808]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm">Our Services</span>
                            <h2 className="text-4xl md:text-6xl font-black mt-4 uppercase italic">Everything you need to transform.</h2>
                        </div>
                        <Link to="/about" className="text-brand-yellow font-bold flex items-center gap-2 hover:translate-x-2 transition-transform mb-2">
                            VIEW ALL FACILITIES <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, i) => {
                            const Icon = iconMap[service.icon];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative overflow-hidden rounded-3xl bg-brand-black border border-brand-white/10 hover:border-brand-yellow/50 transition-all"
                                >
                                    <div className="aspect-[4/5] overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent p-8 flex flex-col justify-end">
                                        <div className="p-3 bg-brand-yellow text-brand-black rounded-xl w-fit mb-4">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="text-2xl font-black mb-2 uppercase">{service.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {service.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className="bg-brand-yellow py-10">
                <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <h2 className="text-brand-black text-2xl md:text-3xl font-black uppercase italic text-center lg:text-left">
                        Ready to smash your goals? <br />
                        <span className="text-brand-black/70">Start your journey today.</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="tel:+917217861996"
                            className="bg-brand-black text-brand-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white hover:text-black transition-all"
                        >
                            <Phone size={20} />
                            CALL NOW
                        </a>
                        <a
                            href="https://wa.me/917217861996"
                            className="bg-green-600 text-brand-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-green-500 transition-all"
                        >
                            <MessageCircle size={20} />
                            WHATSAPP US
                        </a>
                    </div>
                </div>
            </section>

            {/* Class Schedule Preview */}
            <section className="py-32 bg-brand-black">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-20">
                        <span className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm">Class Schedule</span>
                        <h2 className="text-4xl md:text-6xl font-black mt-4 uppercase italic">Today's Sessions</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {classes.filter((_, idx) => idx < 4).map((cls, i) => (
                            <motion.div
                                key={cls.id}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center justify-between p-6 bg-brand-white/5 rounded-2xl border border-brand-white/10 hover:bg-brand-white/10 transition-all group"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-brand-yellow font-bold text-sm uppercase tracking-wider">{cls.time}</span>
                                    <h4 className="text-xl md:text-2xl font-black uppercase">{cls.name}</h4>
                                    <p className="text-muted-foreground">with {cls.trainer}</p>
                                </div>
                                <div className="flex flex-col items-end gap-3">
                                    <span className="px-3 py-1 rounded-full bg-brand-white/10 text-[10px] font-bold uppercase tracking-widest">
                                        {cls.availableSpots} SPOTS LEFT
                                    </span>
                                    <Link to="/booking" className="bg-brand-yellow text-brand-black px-6 py-2 rounded-full font-extrabold text-sm group-hover:bg-brand-white transition-all">
                                        BOOK NOW
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/classes" className="inline-flex items-center gap-2 font-bold text-brand-yellow border-b-2 border-brand-yellow pb-1 hover:text-brand-white hover:border-brand-white transition-all">
                            VIEW FULL WEEKLY SCHEDULE <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-32 bg-[#080808] border-t border-brand-yellow/10">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-20">
                        <span className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm">Success Stories</span>
                        <h2 className="text-4xl md:text-6xl font-black mt-4 uppercase italic">What our members say</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-brand-black p-8 rounded-3xl border border-brand-white/10 flex flex-col gap-6 relative"
                            >
                                <div className="flex text-brand-yellow gap-1">
                                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-lg leading-relaxed italic text-white/80">"{t.content}"</p>
                                <div className="mt-auto flex items-center gap-4">
                                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-yellow" />
                                    <div>
                                        <h4 className="font-bold text-brand-white">{t.name}</h4>
                                        <p className="text-xs text-brand-yellow uppercase font-bold tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Lead Gen section */}
            <section className="py-32 bg-brand-black overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 -skew-x-12 transform translate-x-1/2" />
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h2 className="text-5xl md:text-8xl font-black uppercase italic mb-8">Ready to start?</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Get your first day completely free. No strings attached. Just you, the gym, and a better tomorrow.
                    </p>
                    <Link
                        to="/booking"
                        className="inline-flex bg-brand-yellow text-brand-black px-12 py-6 rounded-full font-black text-2xl hover:bg-brand-white transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,212,0,0.4)]"
                    >
                        CLAIM YOUR FREE TRIAL
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;

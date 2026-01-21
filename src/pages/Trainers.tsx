import { motion } from 'framer-motion';
import { Instagram, Youtube, Award, Target, UserCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trainers } from '../data/mockData';
import SEO from '../components/shared/SEO';

const Trainers = () => {
    return (
        <div className="pt-32 lg:pt-40">
            <SEO title="Elite Fitness Trainers in Meerut | Fitness Yard Gym" description="Meet our team of certified fitness experts. Personal training, bodybuilding, and nutrition coaching tailored to your needs." />
            {/* Page Header */}
            <section className="bg-brand-black py-24 border-b border-brand-yellow/10">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm">Meet the Squad</span>
                        <h1 className="text-5xl md:text-8xl font-black mt-4 uppercase italic">Elite Experts.</h1>
                        <p className="text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
                            Our team of certified professionals is here to guide your transformation with science-backed training and relentless motivation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Trainers Grid */}
            <section className="py-32 bg-[#080808]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        {trainers.map((trainer, i) => (
                            <motion.div
                                key={trainer.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col lg:flex-row gap-8 items-center lg:items-start"
                            >
                                {/* Image Container */}
                                <div className="w-full lg:w-1/2 aspect-[4/5] rounded-[40px] overflow-hidden relative border border-brand-white/10 group-hover:border-brand-yellow/50 transition-all duration-500">
                                    <img
                                        src={trainer.image}
                                        alt={trainer.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-6 right-6 flex flex-col gap-3">
                                        <a href={trainer.social.instagram} className="p-3 bg-brand-black/80 text-brand-white rounded-full backdrop-blur-md hover:bg-brand-yellow hover:text-brand-black transition-all">
                                            <Instagram size={20} />
                                        </a>
                                        <a href={trainer.social.youtube} className="p-3 bg-brand-black/80 text-brand-white rounded-full backdrop-blur-md hover:bg-brand-yellow hover:text-brand-black transition-all">
                                            <Youtube size={20} />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div>
                                        <span className="text-brand-yellow font-bold uppercase tracking-widest text-xs py-1 px-3 bg-brand-yellow/10 rounded-full">
                                            {trainer.role}
                                        </span>
                                        <h2 className="text-4xl lg:text-5xl font-black uppercase italic mt-4">{trainer.name}</h2>
                                    </div>

                                    <p className="text-lg text-white/70 leading-relaxed italic">
                                        "{trainer.bio}"
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-brand-yellow font-bold uppercase text-xs tracking-widest">
                                                <Target size={14} /> Specialties
                                            </div>
                                            <ul className="space-y-1">
                                                {trainer.specialties.map((s, idx) => (
                                                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                                        <div className="w-1 h-1 bg-brand-yellow rounded-full" /> {s}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-brand-yellow font-bold uppercase text-xs tracking-widest">
                                                <Award size={14} /> Certifications
                                            </div>
                                            <ul className="space-y-1">
                                                {trainer.certifications.map((c, idx) => (
                                                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                                        <div className="w-1 h-1 bg-brand-yellow rounded-full" /> {c}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <Link
                                        to="/booking"
                                        className="inline-flex items-center gap-3 bg-brand-white/5 border border-brand-white/10 text-brand-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-yellow hover:text-brand-black hover:border-brand-yellow transition-all group/btn"
                                    >
                                        BOOK SESSION WITH {trainer.name.split(' ')[0]} <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why PT Section */}
            <section className="py-32 bg-brand-black border-y border-brand-yellow/10">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase italic">Why Personal Training?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: <UserCheck className="w-10 h-10" />, title: "Custom Plans", desc: "Workouts tailored exactly to your body type and fitness goals." },
                            { icon: <Award className="w-10 h-10" />, title: "Form Correction", desc: "Expert guidance to ensure safe and effective lifting techniques." },
                            { icon: <Target className="w-10 h-10" />, title: "Fast Results", desc: "Cut through the noise and achieve your goals 3x faster." }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="mb-6 p-4 bg-brand-yellow/10 text-brand-yellow rounded-3xl w-fit mx-auto">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-black uppercase mb-4">{item.title}</h4>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-20 text-center">
                        <Link
                            to="/booking"
                            className="bg-brand-yellow text-brand-black px-12 py-6 rounded-full font-black text-2xl hover:bg-brand-white transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,212,0,0.4)]"
                        >
                            FREE PERSONAL CONSULTATION
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Trainers;

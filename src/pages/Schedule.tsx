import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { classes } from '../data/mockData';
import SEO from '../components/shared/SEO';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Schedule = () => {
    const [activeDay, setActiveDay] = useState("Monday");

    const filteredClasses = classes.filter(cls => cls.day === activeDay);

    return (
        <div className="pt-32 lg:pt-40">
            <SEO title="Gym Class Schedule | Fitness Yard Meerut" description="View our weekly fitness class schedule. From HIIT and Powerlifting to Yoga, find the perfect time to train at Fitness Yard." />
            {/* Page Header */}
            <section className="bg-brand-black py-20 border-b border-brand-yellow/10">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm">Class Calendar</span>
                        <h1 className="text-5xl md:text-7xl font-black mt-4 uppercase italic">Schedule your session.</h1>
                        <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
                            Filter by day and find the perfect time to smash your goals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Schedule Tabs */}
            <section className="py-20 bg-[#080808]">
                <div className="container mx-auto px-4 md:px-8">
                    {/* Day Selector */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {days.map((day) => (
                            <button
                                key={day}
                                onClick={() => setActiveDay(day)}
                                className={`px-8 py-3 rounded-full font-black uppercase tracking-widest transition-all ${activeDay === day
                                    ? 'bg-brand-yellow text-brand-black shadow-[0_0_20px_rgba(255,212,0,0.3)]'
                                    : 'bg-brand-white/5 text-brand-white/60 hover:text-brand-white hover:bg-brand-white/10'
                                    }`}
                            >
                                {day}
                            </button>
                        ))}
                    </div>

                    {/* Classes Grid */}
                    <div className="max-w-5xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeDay}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                {filteredClasses.length > 0 ? (
                                    filteredClasses.map((cls) => (
                                        <div
                                            key={cls.id}
                                            className="group p-8 rounded-[32px] bg-brand-black border border-brand-white/10 hover:border-brand-yellow/50 transition-all flex flex-col md:flex-row items-center gap-8"
                                        >
                                            <div className="flex-grow space-y-4 text-center md:text-left">
                                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                                    <span className="flex items-center gap-2 text-brand-yellow font-bold uppercase tracking-widest text-xs py-1.5 px-3 bg-brand-yellow/10 rounded-lg">
                                                        <Clock size={14} /> {cls.time}
                                                    </span>
                                                    <span className="flex items-center gap-2 text-brand-white/60 font-bold uppercase tracking-widest text-xs py-1.5 px-3 bg-brand-white/5 rounded-lg">
                                                        <ShieldCheck size={14} /> {cls.type}
                                                    </span>
                                                </div>
                                                <h3 className="text-3xl font-black uppercase italic group-hover:text-brand-yellow transition-colors">
                                                    {cls.name}
                                                </h3>
                                                <div className="flex items-center justify-center md:justify-start gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                                                        <User size={16} />
                                                    </div>
                                                    <span className="font-bold text-white/80">Trainer: {cls.trainer}</span>
                                                    <span className="mx-2 text-white/20">|</span>
                                                    <span className="text-muted-foreground">{cls.duration} Session</span>
                                                </div>
                                            </div>
                                            <div className="shrink-0">
                                                <Link
                                                    to="/booking"
                                                    className="bg-brand-yellow text-brand-black px-10 py-4 rounded-2xl font-black text-lg hover:bg-white transition-all transform hover:scale-105 inline-flex items-center gap-3"
                                                >
                                                    BOOK SPOT <ArrowRight size={20} />
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-20 border-2 border-dashed border-brand-white/10 rounded-[32px]">
                                        <Calendar className="mx-auto text-brand-white/10 mb-4" size={64} />
                                        <p className="text-xl text-muted-foreground font-bold italic uppercase">No classes scheduled for this day.</p>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Pro Tip Section */}
            <section className="py-20 bg-brand-black">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <div className="bg-gradient-to-r from-brand-yellow/10 to-transparent p-12 rounded-[40px] border border-brand-yellow/20">
                        <h4 className="text-2xl font-black uppercase italic mb-6">First time?</h4>
                        <p className="text-lg text-white/70 leading-relaxed mb-8">
                            We recommend arriving 10-15 minutes before your first class to meet your trainer and get a tour of the facility. Please bring water, a towel, and your game face.
                        </p>
                        <Link to="/booking" className="text-brand-yellow font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:translate-x-2 transition-transform">
                            BOOK YOUR INTRO CLASS <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Schedule;

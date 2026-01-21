import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Phone, Calendar as CalendarIcon, Clock, User, Mail, MessageSquare, ArrowRight, Loader2 } from 'lucide-react';
import { trainers, membershipPlans } from '../data/mockData';
import SEO from '../components/shared/SEO';

const Booking = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        trainer: 'No Preference',
        type: 'Free Trial',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (isSuccess) {
        return (
            <div className="pt-20 min-h-screen bg-brand-black flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-xl w-full text-center p-12 rounded-[40px] bg-brand-white/5 border border-brand-yellow/30"
                >
                    <div className="w-24 h-24 bg-brand-yellow text-brand-black rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-4xl font-black uppercase italic mb-4">Booking Confirmed!</h2>
                    <p className="text-xl text-white/70 mb-8 leading-relaxed">
                        Thanks {formData.name}! Your session is booked for <span className="text-brand-yellow font-bold uppercase">{formData.date}</span> at <span className="text-brand-yellow font-bold uppercase">{formData.time}</span>.
                    </p>
                    <div className="bg-brand-black/40 p-6 rounded-2xl border border-brand-white/5 text-left mb-8">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            We've sent the details to <span className="text-brand-white font-bold">{formData.email}</span> and our team will message you on WhatsApp shortly.
                            <br /><br />
                            <span className="text-brand-yellow font-bold uppercase tracking-widest text-[10px]">What to bring:</span>
                            <ul className="mt-2 space-y-1 text-xs">
                                <li>• Comfortable workout clothes</li>
                                <li>• A bottle of water</li>
                                <li>• Your game-changing attitude</li>
                            </ul>
                        </p>
                    </div>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="text-brand-yellow font-black uppercase tracking-widest hover:text-brand-white transition-colors flex items-center gap-2 mx-auto"
                    >
                        MAKE ANOTHER BOOKING <ArrowRight size={18} />
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-32 lg:pt-40">
            <AnimatePresence>
                {/* Placeholder for AnimatePresence if needed, but SEO needs to be outside if it's not and animation */}
            </AnimatePresence>
            <SEO title="Book a Free Trial | Fitness Yard Gym Meerut" description="Start your fitness journey today. Book a 100% free trial session at Fitness Yard Gym. Elite equipment, pro trainers, and an unbeatable vibe." />
            {/* Header */}
            <section className="bg-brand-black py-20 border-b border-brand-yellow/10">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm">Secure Your Spot</span>
                        <h1 className="text-5xl md:text-7xl font-black mt-4 uppercase italic">Start Your Journey.</h1>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-[#080808]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">

                        {/* Left Column: Info & Trust */}
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <h3 className="text-3xl font-black uppercase italic mb-6">Why book a trial?</h3>
                                <div className="space-y-6">
                                    {[
                                        "Get a full tour of Meerut's best facility.",
                                        "Experience the energy of our community.",
                                        "Get a complimentary consultation with a pro.",
                                        "Zero pressure. Zero upfront cost."
                                    ].map((text, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="p-1.5 bg-brand-yellow/10 text-brand-yellow rounded-full shrink-0">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <p className="text-lg text-white/80">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-brand-yellow text-brand-black">
                                <h4 className="font-black text-xl uppercase mb-2">Need Help?</h4>
                                <p className="font-bold mb-6 opacity-70">Speak with our gym manager directly.</p>
                                <a href="tel:+917217861996" className="flex items-center gap-3 text-2xl font-black">
                                    <Phone size={24} /> +91 72178 61996
                                </a>
                            </div>

                            <div className="bg-brand-white/5 border border-brand-white/10 p-8 rounded-3xl">
                                <p className="text-muted-foreground italic leading-relaxed">
                                    "I was nervous before my first trial, but the trainers made me feel right at home. I've been a member for a year now!"
                                </p>
                                <div className="flex items-center gap-3 mt-4">
                                    <img src="https://i.pravatar.cc/150?u=a" className="w-10 h-10 rounded-full border border-brand-yellow" alt="avatar" />
                                    <div>
                                        <span className="block font-bold">Karan Mehra</span>
                                        <span className="text-[10px] uppercase font-bold text-brand-yellow tracking-widest">Local Athlete</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="p-8 md:p-12 rounded-[48px] bg-brand-black border border-brand-white/10 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 -rotate-45 transform translate-x-12 -translate-y-12" />

                                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-brand-yellow flex items-center gap-2">
                                                <User size={14} /> Full Name*
                                            </label>
                                            <input
                                                required
                                                name="name"
                                                type="text"
                                                placeholder="John Doe"
                                                onChange={handleChange}
                                                className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all placeholder:text-white/20"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-brand-yellow flex items-center gap-2">
                                                <Phone size={14} /> Phone Number*
                                            </label>
                                            <input
                                                required
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 00000 00000"
                                                onChange={handleChange}
                                                className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all placeholder:text-white/20"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-brand-yellow flex items-center gap-2">
                                            <Mail size={14} /> Email Address
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            onChange={handleChange}
                                            className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all placeholder:text-white/20"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-brand-yellow flex items-center gap-2">
                                                <CalendarIcon size={14} /> Preferred Date
                                            </label>
                                            <input
                                                name="date"
                                                type="date"
                                                onChange={handleChange}
                                                className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all [color-scheme:dark]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-brand-yellow flex items-center gap-2">
                                                <Clock size={14} /> Preferred Time
                                            </label>
                                            <select
                                                name="time"
                                                onChange={handleChange}
                                                className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-brand-black">Select Time</option>
                                                <option value="Early Morning (5-8 AM)" className="bg-brand-black">Early Morning (5-8 AM)</option>
                                                <option value="Morning (8-11 AM)" className="bg-brand-black">Morning (8-11 AM)</option>
                                                <option value="Afternoon (1-4 PM)" className="bg-brand-black">Afternoon (1-4 PM)</option>
                                                <option value="Evening (5-8 PM)" className="bg-brand-black">Evening (5-8 PM)</option>
                                                <option value="Late Night (8-10 PM)" className="bg-brand-black">Late Night (8-10 PM)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-brand-yellow flex items-center gap-2">
                                                Selection Type
                                            </label>
                                            <select
                                                name="type"
                                                onChange={handleChange}
                                                className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="Free Trial" className="bg-brand-black">Free Trial</option>
                                                {membershipPlans.map(p => <option key={p.name} value={p.name} className="bg-brand-black">{p.name} Membership</option>)}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-brand-yellow flex items-center gap-2">
                                                Preferred Trainer
                                            </label>
                                            <select
                                                name="trainer"
                                                onChange={handleChange}
                                                className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="No Preference" className="bg-brand-black">No Preference</option>
                                                {trainers.map(t => <option key={t.id} value={t.name} className="bg-brand-black">{t.name}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-brand-yellow flex items-center gap-2">
                                            <MessageSquare size={14} /> Additional Notes
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            placeholder="Any specific goals or injuries we should know about?"
                                            onChange={handleChange}
                                            className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-4 focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all placeholder:text-white/20 resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-brand-yellow text-brand-black py-6 rounded-2xl font-black text-xl hover:bg-brand-white transition-all transform active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(255,212,0,0.2)]"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="animate-spin" /> SUBMITTING...
                                            </>
                                        ) : (
                                            <>CONFIRM BOOKING <ArrowRight /></>
                                        )}
                                    </button>

                                    <p className="text-[10px] text-center text-muted-foreground uppercase font-bold tracking-widest">
                                        By submitting, you agree to our Terms & Privacy Policy
                                    </p>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Booking;

import { motion } from 'framer-motion';
import { Check, Info, ShieldCheck, Zap, Crown, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { membershipPlans } from '../data/mockData';
import SEO from '../components/shared/SEO';

const Memberships = () => {
    return (
        <div className="pt-32 lg:pt-40">
            <SEO title="Membership Plans & Pricing | Fitness Yard Gym Meerut" description="Choose the perfect gym membership plan for your goals. Day Pass, Monthly, Quarterly, and Yearly plans available with elite perks." />
            {/* Page Header */}
            <section className="bg-brand-black py-20 border-b border-brand-yellow/10 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-yellow rounded-full blur-[120px]" />
                </div>
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm">Choose Your Plan</span>
                        <h1 className="text-5xl md:text-7xl font-black mt-4 uppercase italic leading-none">
                            Commit to <span className="text-transparent border-t-brand-yellow bg-clip-text bg-gradient-to-r from-brand-yellow to-white">Greatness.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
                            Transparent pricing. No hidden fees. Just world-class training and results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Grid */}
            <section className="py-32 bg-[#080808]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {membershipPlans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative p-8 rounded-[40px] flex flex-col transition-all duration-300 group shadow-2xl ${plan.highlight
                                    ? 'bg-brand-yellow border-4 border-brand-yellow shadow-[0_0_40px_rgba(255,212,0,0.2)]'
                                    : 'bg-brand-black border border-brand-white/10 hover:border-brand-yellow/30'
                                    }`}
                            >
                                {plan.badge && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-brand-black font-black uppercase text-xs px-6 py-2 rounded-full shadow-xl tracking-widest">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className={`text-2xl font-black uppercase mb-1 ${plan.highlight ? 'text-brand-black' : 'text-brand-white'}`}>
                                        {plan.name}
                                    </h3>
                                    <p className={`${plan.highlight ? 'text-brand-black/60' : 'text-muted-foreground'} text-sm font-bold uppercase tracking-widest`}>
                                        {plan.duration}
                                    </p>
                                </div>

                                <div className="mb-10">
                                    <span className={`text-5xl font-black ${plan.highlight ? 'text-brand-black' : 'text-brand-white'}`}>
                                        ₹{plan.price}
                                    </span>
                                </div>

                                <div className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className={`mt-1 p-0.5 rounded-full ${plan.highlight ? 'bg-brand-black text-brand-yellow' : 'bg-brand-yellow/20 text-brand-yellow'}`}>
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className={`text-sm leading-tight ${plan.highlight ? 'text-brand-black/80 font-bold' : 'text-white/80'}`}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to={plan.name === "Day Pass" ? "/booking" : "/checkout"}
                                    className={`w-full py-5 rounded-2xl font-black text-center transition-all transform active:scale-95 ${plan.highlight
                                        ? 'bg-brand-black text-brand-white hover:bg-white hover:text-brand-black'
                                        : 'bg-brand-yellow text-brand-black hover:bg-white shadow-[0_10px_20px_rgba(255,212,0,0.1)]'
                                        }`}
                                >
                                    {plan.cta}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Matrix / Comparison */}
            <section className="py-32 bg-brand-black border-y border-brand-yellow/10">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic">Membership Perks</h2>
                            <p className="text-muted-foreground mt-4 italic font-bold">What's included in every plan</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {[
                                { icon: <ShieldCheck size={32} />, title: "Secure Access", desc: "Digital check-ins and high-end locker security." },
                                { icon: <Zap size={32} />, title: "Unlimited HIIT", desc: "Attend any group session throughout the week." },
                                { icon: <Crown size={32} />, title: "Elite Gear", desc: "Access to the highest-grade equipment in Meerut." },
                                { icon: <UserPlus size={32} />, title: "Guest Passes", desc: "Bring a friend for free once every month." },
                            ].map((perk, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="p-4 bg-brand-yellow/10 text-brand-yellow rounded-2xl shrink-0">
                                        {perk.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black uppercase mb-2">{perk.title}</h4>
                                        <p className="text-muted-foreground leading-relaxed">{perk.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Policy Blurb */}
            <section className="py-20 bg-[#080808]">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <div className="p-10 rounded-[32px] bg-brand-white/5 border border-dashed border-brand-yellow/30">
                        <div className="flex items-center gap-3 mb-6">
                            <Info className="text-brand-yellow" size={24} />
                            <h4 className="font-heading font-black uppercase tracking-widest text-lg">Billing & Refund Policy</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed space-y-4">
                            All memberships are non-refundable and non-transferable.
                            <br /><br />
                            Monthly auto-renewal is available for your convenience. Quarterly and Yearly plans can be paused for up to 15 and 30 days respectively for medical reasons (certificate required). Prices are inclusive of all taxes.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Memberships;

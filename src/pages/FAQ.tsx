import { motion } from 'framer-motion';
import { HelpCircle, ChevronRight, FileText, Scale, ShieldCheck } from 'lucide-react';
import SEO from '../components/shared/SEO';

const faqs = [
    {
        q: "Do you offer a free trial?",
        a: "Yes! We offer a one-day 100% free trial for all local residents of Meerut. You can book it online or walk in with a valid ID."
    },
    {
        q: "What are the gym hours?",
        a: "We are open Monday to Saturday from 5:00 AM to 10:00 PM. We are closed on Sundays to allow for deep cleaning and maintenance."
    },
    {
        q: "Are group classes included in the membership?",
        a: "Yes, all our standard memberships (Monthly, Quarterly, Yearly) include unlimited access to all group classes."
    },
    {
        q: "Do you have personal trainers?",
        a: "Absolutely. We have a team of certified elite trainers. You can book individual sessions or join our PT program for consistent guidance."
    },
    {
        q: "What is your refund policy?",
        a: "Memberships are non-refundable and non-transferable. However, we do allow pausing of Quarterly and Yearly memberships for medical emergencies."
    },
];

const FAQ = () => {
    return (
        <div className="pt-32 lg:pt-40">
            <SEO title="FAQ & Policies | Fitness Yard Gym Meerut" description="Find answers to common questions about Fitness Yard Gym. Membership details, opening hours, refund policies, and more." />
            {/* Header */}
            <section className="bg-brand-black py-20 border-b border-brand-yellow/10">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm">Got Questions?</span>
                        <h1 className="text-5xl md:text-7xl font-black mt-4 uppercase italic">FAQ & Policies.</h1>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Grid */}
            <section className="py-24 bg-[#080808]">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 bg-brand-yellow/10 text-brand-yellow rounded-xl">
                            <HelpCircle size={32} />
                        </div>
                        <h2 className="text-3xl font-black uppercase italic">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[32px] bg-brand-black border border-brand-white/10 hover:border-brand-yellow/30 transition-all group"
                            >
                                <h4 className="text-xl font-bold mb-4 text-brand-white group-hover:text-brand-yellow transition-colors">{faq.q}</h4>
                                <p className="text-muted-foreground leading-relaxed italic">
                                    "{faq.a}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Policies */}
            <section className="py-24 bg-brand-black border-t border-brand-yellow/10">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-10 rounded-[40px] bg-brand-white/5 border border-brand-white/10">
                            <ShieldCheck className="text-brand-yellow mb-6" size={40} />
                            <h3 className="text-2xl font-black uppercase mb-4">Privacy Policy</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                We respect your privacy. All your personal information collected during sign-up is used solely for membership management and verification.
                            </p>
                            <button className="text-brand-yellow font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
                                READ FULL POLICY <ChevronRight size={14} />
                            </button>
                        </div>
                        <div className="p-10 rounded-[40px] bg-brand-white/5 border border-brand-white/10">
                            <Scale className="text-brand-yellow mb-6" size={40} />
                            <h3 className="text-2xl font-black uppercase mb-4">Terms of Conduct</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                To maintain a positive environment, we require all members to follow our code of conduct, including proper equipment handling and respect for others.
                            </p>
                            <button className="text-brand-yellow font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
                                READ TERMS <ChevronRight size={14} />
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 p-10 rounded-[40px] bg-brand-white/5 border border-brand-white/10">
                        <div className="flex items-center gap-4 mb-6">
                            <FileText className="text-brand-yellow" size={32} />
                            <h3 className="text-2xl font-black uppercase">Membership Terms</h3>
                        </div>
                        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed italic">
                            <p>• Memberships are non-refundable once activated.</p>
                            <p>• Access is restricted to valid card/digital ID holders only.</p>
                            <p>• Personal training sessions must be booked 24 hours in advance.</p>
                            <p>• The gym management reserves the right to terminate membership in case of misconduct.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;

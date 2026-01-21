import { motion } from 'framer-motion';
import { Target, Shield, Heart, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';

const About = () => {
    return (
        <div className="pt-32 lg:pt-40">
            <SEO title="About Fitness Yard Gym | Our Story & Mission in Meerut" description="Learn about Fitness Yard Gym's mission to build the strongest version of Meerut. Explore our elite facility highlights and meet our team." />
            {/* Page Header */}
            <section className="bg-brand-black py-20 border-b border-brand-yellow/10">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm">About Fitness Yard</span>
                        <h1 className="text-5xl md:text-7xl font-black mt-4 uppercase italic">Beyond just a workout.</h1>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-32 bg-[#080808]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-yellow/10 rounded-full blur-3xl" />
                            <img
                                src="https://images.unsplash.com/photo-1574680096145-d05b474e2158?q=80&w=2069&auto=format&fit=crop"
                                alt="Gym Interior"
                                className="rounded-3xl border border-brand-white/10 relative z-10"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-brand-yellow p-8 rounded-3xl hidden md:block z-20">
                                <span className="text-brand-black text-5xl font-black block">5+</span>
                                <span className="text-brand-black font-bold uppercase tracking-widest text-sm">Years of Results</span>
                            </div>
                        </motion.div>

                        <div className="space-y-8">
                            <h2 className="text-4xl font-black uppercase italic leading-tight">
                                Our Mission: Build the <span className="text-brand-yellow">strongest version</span> of Meerut.
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Founded in 2020, Fitness Yard Gym was born from a simple belief: everyone deserves a elite-level training environment regardless of their starting point.
                            </p>
                            <p className="text-lg text-white/70">
                                We've combined world-class equipment with a team of trainers who are as invested in your goals as you are. At Fitness Yard, you're not just a membership number—you're part of a community that pushes each other to be better every single day.
                            </p>
                            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex gap-4">
                                    <div className="p-3 bg-brand-yellow/10 text-brand-yellow rounded-xl h-fit">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 uppercase">Top-Tier Safety</h4>
                                        <p className="text-sm text-muted-foreground">Highest standards of hygiene and equipment maintenance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-3 bg-brand-yellow/10 text-brand-yellow rounded-xl h-fit">
                                        <Heart size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 uppercase">Vibrant Community</h4>
                                        <p className="text-sm text-muted-foreground">A supportive environment where everyone belongs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 bg-brand-black border-y border-brand-yellow/10">
                <div className="container mx-auto px-4 md:px-8 text-center mb-20">
                    <span className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm">Our Core Values</span>
                    <h2 className="text-4xl md:text-6xl font-black mt-4 uppercase italic">The Yard Mentality</h2>
                </div>
                <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            icon: <Target className="w-10 h-10 text-brand-yellow" />,
                            title: "Consistency",
                            text: "We believe in progress over perfection. Showing up is 80% of the battle."
                        },
                        {
                            icon: <Award className="w-10 h-10 text-brand-yellow" />,
                            title: "Expertise",
                            text: "Our trainers are certified and experienced, focusing on proper form and science-based methods."
                        },
                        {
                            icon: <ArrowRight className="w-10 h-10 text-brand-yellow" />,
                            title: "Transformation",
                            text: "We don't just change bodies; we build confidence and discipline that lasts."
                        }
                    ].map((value, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-10 rounded-3xl bg-brand-white/5 border border-brand-white/10 text-center"
                        >
                            <div className="mb-6 flex justify-center">{value.icon}</div>
                            <h3 className="text-2xl font-black mb-4 uppercase">{value.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{value.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Facility Highlights Grid */}
            <section className="py-32 bg-[#080808]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-xl">
                            <span className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm">Our Space</span>
                            <h2 className="text-4xl md:text-6xl font-black mt-4 uppercase italic">Elite Environment.</h2>
                        </div>
                        <Link to="/gallery" className="text-brand-yellow font-bold flex items-center gap-2 hover:translate-x-2 transition-transform mb-2">
                            VIEW FULL GALLERY <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
                        <div className="md:col-span-8 overflow-hidden rounded-3xl relative group">
                            <img
                                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                alt="Facility 1"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-10 flex flex-col justify-end">
                                <h4 className="text-2xl font-black uppercase">Heavy Weight Zone</h4>
                                <p className="text-brand-yellow font-bold uppercase tracking-wider text-sm">Full rack of dumbbells & barbells</p>
                            </div>
                        </div>
                        <div className="md:col-span-4 overflow-hidden rounded-3xl relative group">
                            <img
                                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                alt="Facility 2"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-10 flex flex-col justify-end">
                                <h4 className="text-xl font-black uppercase">Cardio Arena</h4>
                            </div>
                        </div>
                        <div className="md:col-span-4 overflow-hidden rounded-3xl relative group">
                            <img
                                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                alt="Facility 3"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-10 flex flex-col justify-end">
                                <h4 className="text-xl font-black uppercase">Personal Training Hub</h4>
                            </div>
                        </div>
                        <div className="md:col-span-8 overflow-hidden rounded-3xl relative group">
                            <img
                                src="https://images.unsplash.com/photo-1434681908211-3f19706785b9?q=80&w=2070&auto=format&fit=crop"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                alt="Facility 4"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-10 flex flex-col justify-end">
                                <h4 className="text-2xl font-black uppercase">Recovery Station</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-brand-yellow">
                <div className="container mx-auto px-4 md:px-8 text-center text-brand-black">
                    <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-8">Meet our trainers.</h2>
                    <p className="text-xl font-bold mb-12 max-w-2xl mx-auto opacity-80">
                        Our elite team is ready to guide you. Discover the experts behind Fitness Yard's results.
                    </p>
                    <Link to="/trainers" className="bg-brand-black text-brand-white px-12 py-6 rounded-full font-black text-2xl hover:bg-white hover:text-black transition-all transform hover:scale-105 inline-block">
                        DISCOVER TRAINERS
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;

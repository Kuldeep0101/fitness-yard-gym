import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Youtube, MessageCircle, Clock } from 'lucide-react';
import SEO from '../components/shared/SEO';

const Contact = () => {
    return (
        <div className="pt-32 lg:pt-40">
            <SEO title="Contact Us | Fitness Yard Gym Meerut" description="Find us in Meerut. Get our address, phone number, and WhatsApp. We're located at Rishi Nagar, Baghpat Road. Visit the yard today!" />
            {/* Header */}
            <section className="bg-brand-black py-20 border-b border-brand-yellow/10">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm">Get in Touch</span>
                        <h1 className="text-5xl md:text-7xl font-black mt-4 uppercase italic leading-none">We're Here for <br /><span className="text-brand-yellow">Your Success.</span></h1>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 bg-[#080808]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Contact Details */}
                        <div className="space-y-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="p-8 rounded-3xl bg-brand-black border border-brand-white/10 hover:border-brand-yellow/30 transition-all">
                                    <Phone className="text-brand-yellow mb-4" size={32} />
                                    <h4 className="font-black uppercase mb-2">Call Us</h4>
                                    <a href="tel:+917217861996" className="text-xl font-bold text-white/70 hover:text-brand-yellow">+91 72178 61996</a>
                                </div>
                                <div className="p-8 rounded-3xl bg-brand-black border border-brand-white/10 hover:border-brand-yellow/30 transition-all">
                                    <MessageCircle className="text-brand-yellow mb-4" size={32} />
                                    <h4 className="font-black uppercase mb-2">WhatsApp</h4>
                                    <a href="https://wa.me/917217861996" className="text-xl font-bold text-white/70 hover:text-brand-yellow">Chat with us</a>
                                </div>
                                <div className="p-8 rounded-3xl bg-brand-black border border-brand-white/10 hover:border-brand-yellow/30 transition-all">
                                    <Mail className="text-brand-yellow mb-4" size={32} />
                                    <h4 className="font-black uppercase mb-2">Email</h4>
                                    <a href="mailto:info@fitnessyard.com" className="text-xl font-bold text-white/70 hover:text-brand-yellow">info@fitnessyard.com</a>
                                </div>
                                <div className="p-8 rounded-3xl bg-brand-black border border-brand-white/10 hover:border-brand-yellow/30 transition-all">
                                    <Clock className="text-brand-yellow mb-4" size={32} />
                                    <h4 className="font-black uppercase mb-2">Gym Hours</h4>
                                    <p className="text-brand-white/70 font-bold uppercase text-sm">Mon-Sat: 5AM - 10PM</p>
                                    <p className="text-brand-yellow font-black uppercase text-sm">Sunday: Closed</p>
                                </div>
                            </div>

                            <div className="p-10 rounded-[40px] bg-brand-yellow text-brand-black relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-black/10 rounded-full translate-x-12 -translate-y-12" />
                                <MapPin size={48} className="mb-6 opacity-30" />
                                <h3 className="text-3xl font-black uppercase italic mb-4">Visit the yard.</h3>
                                <p className="text-xl font-bold leading-relaxed mb-8 opacity-80">
                                    Siddhi Vinayakam Complex, Rishi Nagar, Baghpat Road, Meerut 250002
                                </p>
                                <div className="flex gap-4">
                                    <a href="https://www.instagram.com/fitness_yard_gym/?hl=en" className="p-3 bg-brand-black text-brand-white rounded-full hover:bg-white hover:text-brand-black transition-all">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="#" className="p-3 bg-brand-black text-brand-white rounded-full hover:bg-white hover:text-brand-black transition-all">
                                        <Youtube size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="h-[600px] w-full rounded-[40px] overflow-hidden border border-brand-white/10 relative group shadow-2xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111718.358509355!2d77.62121379726563!3d28.9845014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c67e800000001%3A0xe53ef8d8c36395b!2sFitness%20Yard%20Gym!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale group-hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100"
                            ></iframe>
                            <div className="absolute top-6 left-6 p-4 bg-brand-black/80 backdrop-blur-md rounded-2xl border border-brand-white/10 pointer-events-none">
                                <span className="text-brand-yellow font-black uppercase text-xs tracking-widest block mb-1">Location Meerut</span>
                                <span className="font-bold text-white text-sm">Baghpat Road, 250002</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mini FAQ CTA */}
            <section className="py-20 bg-brand-black">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h4 className="text-2xl font-black uppercase italic mb-6">Have questions?</h4>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="tel:+917217861996" className="bg-brand-white/5 border border-brand-white/10 px-8 py-4 rounded-full font-bold hover:bg-brand-yellow hover:text-brand-black transition-all">CALL US DIRECTLY</a>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-brand-yellow text-brand-black px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(255,212,0,0.3)]"
                        >
                            SEE COMMON QUESTIONS
                        </motion.button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

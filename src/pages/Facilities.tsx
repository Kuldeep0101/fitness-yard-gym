import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Filter, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryImages } from '../data/mockData';
import SEO from '../components/shared/SEO';

const categories = ["All", "Equipment", "Powerlifting", "Cardio", "Gym Interior", "Personal Training"];

const Facilities = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredImages = activeFilter === "All"
        ? galleryImages
        : galleryImages.filter(img => img.tag === activeFilter);

    return (
        <div className="pt-32 lg:pt-40">
            <SEO title="Gym Facilities & Interior Gallery | Fitness Yard Meerut" description="Take a virtual tour of Fitness Yard Gym. Explore our elite weight lifting zone, cardio arena, and advanced equipment in Meerut." />
            {/* Page Header */}
            <section className="bg-brand-black py-24 border-b border-brand-yellow/10">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <span className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm italic">Gallery</span>
                        <h1 className="text-5xl md:text-8xl font-black mt-4 uppercase italic">The Pro Space.</h1>
                        <p className="text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
                            Step inside Meerut's most advanced fitness facility. High-end equipment, massive space, and a vibe that pushes you to your limits.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="sticky top-20 z-40 bg-brand-black/80 backdrop-blur-md border-b border-brand-yellow/10 py-6">
                <div className="container mx-auto px-4 md:px-8 flex flex-wrap items-center justify-center gap-4">
                    <div className="flex items-center gap-2 text-brand-yellow mr-4 hidden md:flex">
                        <Filter size={18} />
                        <span className="font-bold uppercase tracking-widest text-xs">Filter:</span>
                    </div>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeFilter === cat
                                ? 'bg-brand-yellow text-brand-black'
                                : 'bg-brand-white/5 text-brand-white/40 hover:text-brand-white hover:bg-brand-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Masonry-like Grid */}
            <section className="py-20 bg-[#080808]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        <AnimatePresence>
                            {filteredImages.map((img, i) => (
                                <motion.div
                                    key={img.url}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="relative group rounded-3xl overflow-hidden border border-brand-white/10 cursor-pointer"
                                    onClick={() => setSelectedImage(img.url)}
                                >
                                    <img
                                        src={img.url}
                                        alt={img.tag}
                                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="p-4 bg-brand-yellow text-brand-black rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                            <Maximize2 size={24} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-brand-black/60 backdrop-blur-md text-brand-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-brand-white/10">
                                            {img.tag}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-brand-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-10 right-10 text-brand-white hover:text-brand-yellow transition-colors p-2">
                            <X size={48} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            src={selectedImage}
                            className="max-h-full max-w-full rounded-2xl shadow-2xl border-4 border-brand-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA section */}
            <section className="py-32 bg-brand-black relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
                    <div className="p-4 bg-brand-yellow/10 text-brand-yellow rounded-full w-fit mx-auto mb-8">
                        <Camera size={40} />
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-8">Experience it Live.</h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto italic font-bold">
                        Photos don't do justice to the energy at Fitness Yard. Book a free trial and see for yourself.
                    </p>
                    <Link
                        to="/booking"
                        className="inline-flex bg-brand-yellow text-brand-black px-12 py-6 rounded-full font-black text-2xl hover:bg-white transition-all transform hover:scale-105"
                    >
                        BOOK A VISIT
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Facilities;

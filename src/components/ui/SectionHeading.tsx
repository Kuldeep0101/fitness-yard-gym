import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
    badge: string;
    title: string | React.ReactNode;
    subtitle?: string;
    align?: 'left' | 'center';
    className?: string;
}

const SectionHeading = ({
    badge,
    title,
    subtitle,
    align = 'left',
    className
}: SectionHeadingProps) => {
    return (
        <div className={cn(
            'max-w-3xl mb-16 md:mb-20',
            align === 'center' ? 'mx-auto text-center' : '',
            className
        )}>
            <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm inline-block mb-4"
            >
                {badge}
            </motion.span>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic leading-[1.1]"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-muted-foreground mt-6 leading-relaxed italic"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionHeading;

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
    disabled?: boolean;
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    onClick,
    type = 'button',
    disabled = false
}: ButtonProps) => {
    const variants = {
        primary: 'bg-brand-yellow text-brand-black hover:bg-white shadow-[0_4px_20px_rgba(255,212,0,0.2)]',
        secondary: 'bg-brand-black text-brand-white border border-brand-white/10 hover:border-brand-yellow/50',
        outline: 'bg-transparent border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-black',
        ghost: 'bg-transparent text-brand-white/60 hover:text-brand-white hover:bg-brand-white/5'
    };

    const sizes = {
        sm: 'px-6 py-2 text-sm',
        md: 'px-8 py-4 text-base',
        lg: 'px-12 py-6 text-xl'
    };

    return (
        <motion.button
            type={type}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            disabled={disabled}
            onClick={onClick}
            className={cn(
                'rounded-full font-black uppercase tracking-widest transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
                variants[variant],
                sizes[size],
                className
            )}
        >
            {children}
        </motion.button>
    );
};

export default Button;

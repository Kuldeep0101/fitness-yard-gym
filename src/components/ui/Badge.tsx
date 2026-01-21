import { cn } from '../../utils/cn';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'yellow' | 'white' | 'dark';
    className?: string;
}

const Badge = ({ children, variant = 'yellow', className }: BadgeProps) => {
    const variants = {
        yellow: 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow/20',
        white: 'bg-brand-white/10 text-brand-white border-brand-white/20',
        dark: 'bg-brand-black text-brand-white border-brand-white/5'
    };

    return (
        <span className={cn(
            'px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border',
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
};

export default Badge;

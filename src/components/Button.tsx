import { cn } from "@udecode/cn";

export const Button = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <button
        className={cn(
            "rounded-full bg-primary px-6 py-2.5 text-lg font-bold text-white transition-transform hover:scale-105",
            className,
        )}
    >
        {children}
    </button>
);

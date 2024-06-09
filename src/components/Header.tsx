import { cn } from "@udecode/cn";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "./Button";

export const Header = () => {
    const links = ["Overview", "Examples", "Tour", "Blog", "Help"];
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4 before:absolute before:inset-0 before:-z-50 before:bg-white/60 before:backdrop-blur-xl lg:px-16">
            <a href="#">
                <Logo className="w-20" />
            </a>
            <div
                className={cn(
                    "right-0 top-full transition-[grid-template-rows] max-md:absolute max-md:grid max-md:w-full max-md:overflow-hidden max-md:rounded-b-xl max-md:bg-white/60 max-md:backdrop-blur-xl",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
            >
                <div
                    className={cn(
                        "flex min-h-0 items-center gap-5 transition-all max-md:flex-col max-md:items-stretch max-md:border-t max-md:px-7 md:gap-[calc((100vw-40px-2*127.09px)/2-464.71px/2)] lg:gap-[calc((100vw-128px-2*127.09px)/2-464.71px/2)]",
                        open
                            ? "max-md:border-gray/20"
                            : "max-md:border-transparent",
                    )}
                >
                    <nav className="flex gap-12 max-md:mt-7 max-md:flex-col max-md:gap-8">
                        {links.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className={cn(
                                    "text-lg font-semibold transition-all md:hover:scale-105",
                                    link !== "Tour" &&
                                        "opacity-80 hover:opacity-100",
                                )}
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                    <Button className="max-md:mb-7">Download</Button>
                </div>
            </div>
            <button
                onClick={() => setOpen(!open)}
                className="relative block size-10 rounded-full bg-[#eef0f2] md:hidden"
            >
                {Array.from({ length: 3 }, (_, i) => (
                    <div
                        key={i}
                        className={cn(
                            "absolute left-1/2 h-1 w-5 -translate-x-1/2 rounded-full bg-gray transition-all",
                            open &&
                                "first:rotate-45 last:-rotate-45 even:opacity-0",
                        )}
                        style={{
                            top: open ? 19.5 : 12 + i * (8 - 0.5 * i),
                        }}
                    />
                ))}
            </button>
        </header>
    );
};

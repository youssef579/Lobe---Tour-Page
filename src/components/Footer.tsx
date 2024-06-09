import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import Facebook from "@/assets/images/facebook-logo-24.png";
import Twitter from "@/assets/images/twitter-logo-24.png";
import Youtube from "@/assets/images/youtube-logo-24.png";

export const Footer = () => {
    const about = ["Download", "Overview", "Examples", "Blog"];
    const general = ["Notice", "License", "Press Inquiry", "Press Images"];
    const resources = ["Help", "Tour", "Contact", "Privacy"];

    return (
        <footer className="m-auto flex max-w-5xl flex-wrap justify-around gap-x-14 gap-y-8 border-t border-t-gray/20 p-5 md:p-10">
            <div className="space-y-4">
                <Logo className="w-16 -translate-y-3" />
                <p className="!m-0">A product by Microsoft.</p>
                <p>All rights reserved.</p>
                <p>© Microsoft 2021</p>
            </div>
            <div className="flex flex-col items-start gap-4">
                <p className="mb-2 font-semibold">About</p>
                {about.map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="transition-transform hover:scale-105"
                    >
                        {link}
                    </a>
                ))}
            </div>
            <div className="flex flex-col items-start gap-4">
                <p className="mb-2 font-semibold">General</p>
                {general.map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="transition-transform hover:scale-105"
                    >
                        {link}
                    </a>
                ))}
            </div>
            <div className="flex flex-col items-start gap-4">
                <p className="mb-2 font-semibold">Resources</p>
                {resources.map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="transition-transform hover:scale-105"
                    >
                        {link}
                    </a>
                ))}
            </div>
            <div className="flex items-start gap-4">
                <Button className="relative grid aspect-square place-content-center p-4">
                    <img
                        src={Facebook}
                        alt="Facebook"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 invert"
                    />
                </Button>
                <Button className="relative grid aspect-square place-content-center p-4">
                    <img
                        src={Twitter}
                        alt="Twitter"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 invert"
                    />
                </Button>
                <Button className="relative grid aspect-square place-content-center p-4">
                    <img
                        src={Youtube}
                        alt="Youtube"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 invert"
                    />
                </Button>
            </div>
        </footer>
    );
};

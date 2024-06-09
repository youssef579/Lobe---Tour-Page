import videoThumbnail from "@/assets/images/thumbnail.jpg";
import { Button } from "@/components/Button";

export const Hero = () => {
    return (
        <main className="space-y-10 px-5 py-5 md:space-y-16 md:py-12">
            <div className="m-auto max-w-lg space-y-3 text-center">
                <h1 className="text-6xl font-extrabold md:text-7xl">
                    Lobe <span className="text-primary">Tour</span>
                </h1>
                <p className="text-balance text-center text-xl md:text-2xl">
                    Build your first machine learning model in ten minutes. No
                    code or experience required.
                </p>
            </div>
            <div className="m-auto max-w-4xl overflow-hidden rounded-2xl transition-all hover:scale-105 hover:shadow-[0_100px_140px_-50px_rgba(0,0,0,.25),0_0_20px_0_rgba(0,0,0,.03)]">
                <img src={videoThumbnail} alt="Video Thumbnail" />
            </div>
            <div className="m-auto max-w-lg space-y-3 text-center md:space-y-7">
                <h2 className="text-balance text-4xl font-extrabold md:text-6xl">
                    Train your app with Lobe
                </h2>
                <Button>Download</Button>
            </div>
        </main>
    );
};

import { useState, useEffect } from "react";
import profile from "../assets/profile.png";

export default function Hero() {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const fadePoint = 400;
            const newOpacity = Math.max(1 - scrollY / fadePoint, 0);
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-[600px] bg-black text-white flex flex-col items-center justify-center px-4" style={{ opacity }}>
                <div className="text-5xl font-medium">hey there im spencer</div>
                <div className="text-xl text-subgray font-medium mt-4">full stack developer</div>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-12 text-center text-lg font-medium">
                    <a href="https://github.com/spencerhum04" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center text-white w-48 h-10 bg-amber-600 hover:bg-amber-700 rounded">Resume</a>
                    <a href="https://github.com/spencerhum04" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center text-amber-600 w-48 h-10 border border-amber-600 hover:bg-amber-950 rounded">GitHub</a>
                </div>
            </div>
            <div className="relative flex flex-col items-center justify-center pt-[514.3px] z-40" style={{ pointerEvents: opacity > 0 ? "none" : "auto" }}>
                <div className="h-[600px] flex items-center justify-center">
                    <img src={profile} className="w-[900px] rounded-xl" />
                </div>
            </div>
        </div>
    );
}

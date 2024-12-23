import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

export default function NavBar() {

    const [scroll, setScroll] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`w-full flex flex-col justify-center bg-black text-white fixed h-24 px-6 transition-all duration-500 ${scroll && !menu ? "h-16 bg-opacity-80" : "h-24"} ${scroll && menu ? " h-16 bg-opacity-100" : ""}`}>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-x-8">
                    <div className="flex flex-row items-center gap-x-4">
                        <img src={logo} className="h-8" />
                        <div className="hidden sm:block text-xl font-semibold">Spencer Hum</div>
                    </div>
                    <div className="hidden sm:block text-sm font-medium">Projects</div>
                    <div className="hidden sm:block text-sm font-medium">Experience</div>
                    <div className="hidden sm:block text-sm font-medium">Contact</div>
                </div>
                <div className="flex flex-row items-center gap-x-8">
                    <div className="text-sm">Sign up</div>
                    <div className="text-sm">Log in</div>
                    <div className="hidden sm:block bg-sand font-medium p-2.5 rounded-xl text-black">Get started</div>
                    <div className="sm:hidden cursor-pointer" onClick={() => setMenu((prev) => !prev)}>
                        <div className="w-4 h-4 flex flex-col justify-between">
                            <span className="w-full h-0.5 bg-white"></span>
                            <span className="w-full h-0.5 bg-white"></span>
                            <span className="w-full h-0.5 bg-white"></span>
                        </div>
                    </div>
                </div>
                {menu && (
                    <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col gap-y-4 p-6">
                        <div className="font-medium">Projects</div>
                        <div className="font-medium">Experience</div>
                        <div className="font-medium">Contact</div>
                    </div>
                )}
            </div>
        </div>
    )
}
"use client";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: -50,
            }}
            animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
            }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 container z-50 bg-background/80 backdrop-blur-sm border-primary flex items-center justify-between px-4 py-3"
        >
            <a
                href="/"
                className="text-2xl font-bold text-primary mr-8 select-none"
            >
                <img src="/logo.png" className="w-16" />
            </a>

            <div className="hidden md:flex items-center space-x-6">
                <a
                    href="/"
                    className="border-b-[3px] border-b-transparent select-none hover:border-b-black duration-300"
                >
                    Need insurance?
                </a>
                <a
                    href="/"
                    className="border-b-[3px] border-b-transparent select-none hover:border-b-black duration-300"
                >
                    Our solution
                </a>
                <a
                    href="/"
                    className="border-b-[3px] border-b-transparent select-none hover:border-b-black duration-300"
                >
                    FAQ
                </a>
            </div>

            <div className="hidden md:flex">
                <button className="cursor-none inline-flex select-none items-center justify-center whitespace-nowrap rounded-full text-sm font-medium h-10 px-4 py-2 bg-black text-white hover:bg-black/60 duration-300">
                    Appelez-nous
                </button>
            </div>
        </motion.nav>
    );
}

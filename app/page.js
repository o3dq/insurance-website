"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CustomCursor from "@/components/CustomCursor";


export default function Home() {

    return (
        <main className="min-h-screen flex items-center justify-center bg-white overflow-hidden relative">
            <div className="absolute inset-0 z-0 halo-bg opacity-20"></div>

            <Navbar />

            <Hero />

            <CustomCursor />
        </main>
    );
}

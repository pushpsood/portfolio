"use client";

import { navItems} from "@/src/data";
import Hero from "@/src/components/Hero";
import {FloatingNav} from "@/src/components/ui/FloatingNav";
import Grid from "@/src/components/Grid"
import Projects from "@/src/components/Projects";
import Experience from "@/src/components/Experience";
import Footer from "@/src/components/Footer";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <Projects />
                <Experience />
                <Footer />
            </div>
        </main>
    );
}

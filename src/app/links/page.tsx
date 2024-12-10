"use client";
import { navItemsLinks, socialList } from "@/src/data";
import { FloatingNav } from "@/src/components/ui/FloatingNav";
import { LinkTree } from "@/src/components/LinkTree";
import Footer from "@/src/components/Footer";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItemsLinks} />
                <LinkTree itemList= {socialList}/>
                <Footer />
            </div>
        </main>
    );
}
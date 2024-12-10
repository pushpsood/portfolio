"use client";
import React, { createContext, useContext, useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import {ScrollContextType} from "@/src/model/ScrollContextType";

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScrollContext must be used within a ScrollProvider");
    }
    return context;
};

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    return (
        <ScrollContext.Provider value={{ scrollYProgress }}>
            <div ref={containerRef}>{children}</div>
        </ScrollContext.Provider>
    );
};

// ContainerScroll component
export const ContainerScroll = ({
                                    titleComponent,
                                    children,
                                }: {
    titleComponent: string | React.ReactNode;
    children: React.ReactNode;
}) => {
    return (
        <ScrollProvider>
            <div className="md:pt-2 h-[60rem] md:h-[80rem] flex items-center justify-center relative px-2 md:px-20">
                <div
                    className="py-10 md:py-40 w-full relative"
                    style={{
                        perspective: "1000px",
                    }}
                >
                    <Header>{titleComponent}</Header>
                    <Card>{children}</Card>
                </div>
            </div>
        </ScrollProvider>
    );
};

// Header component
export const Header = ({ children }: { children: React.ReactNode }) => {
    const { scrollYProgress } = useScrollContext();
    const translateHeader = useTransform(scrollYProgress, [0, 0.8], [0, -20]);

    return (
        <motion.div
            style={{
                translateY: translateHeader,
            }}
            className="div max-w-5xl mx-auto text-center relative"
        >
            {children}
        </motion.div>
    );
};

// Card component
export const Card = ({ children }: { children: React.ReactNode }) => {
    const { scrollYProgress } = useScrollContext();
    const rotate = useTransform(scrollYProgress, [0, 0.8], [20, 0]);
    const translate = useTransform(scrollYProgress, [0, 0.8], [0, 20]);

    return (
        <motion.div
            style={{
                rotateX: rotate,
                translateY: translate,
                boxShadow:
                    "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2
            md:p-6 bg-[#222222] rounded-[30px] shadow-2xl relative"
        >
            <div className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl px-1 md:px-4 ">
                {children}
            </div>
        </motion.div>
    );
};
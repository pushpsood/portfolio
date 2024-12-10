"use client";
import React from "react";
import {Spotlight} from "@/src/components/ui/Spotlight";
import {HoverEffect} from "@/src/components/ui/CardHoverEffect";
import {ContainerScroll} from "@/src/components/ui/ContainerScrollAnimation";
import {LinkTreeProps} from "@/src/model/LinkTreeProps";
import {GenerateLinks} from "@/src/components/ui/LinkPreview";

export function LinkTree({ itemList }: LinkTreeProps) {
    return (
        <div>
            <div className="px-10">
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight
                    className="left-80 top-28 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div>
            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
                           absolute top-0 left-0 flex items-center justify-center"
            >
                {/* Radial gradient for the container to give a faded look */}
                <div
                    // change the bg to bg-black-100, so it matches the bg color and will blend in
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
                               bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>
            <div className="flex flex-col relative">
                <ContainerScroll
                    titleComponent = {
                            <HoverEffect imageUrl="pictures/professional_dp.png" />
                    }
                    children= {
                        <GenerateLinks itemList={itemList}/>
                    }
                >
                </ContainerScroll>
            </div>
        </div>
    );
}
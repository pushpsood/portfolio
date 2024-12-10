import React from "react";

interface LinkPreviewPropsBase {
    children: React.ReactNode;
    url: string;
    id: string;
    className?: string;
    width?: number;
    height?: number;
    quality?: number;
}

export interface LinkPreviewPropsStatic extends LinkPreviewPropsBase {
    isStatic: true;
    imageSrc: string;
}

export interface LinkPreviewPropsDynamic extends LinkPreviewPropsBase {
    isStatic?: false;
    imageSrc?: never;
}
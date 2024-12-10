import { motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
                                imageUrl,
                                className,
                            }: {
    imageUrl: string;
    className?: string;
}) => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className = "justify-center items-center flex"
        >
            <motion.img
                src={imageUrl}
                alt="Hover effect image"
                className="w-1/2 h-1/2  object-cover"
                initial={{ scale: 1 }}
                animate={{ scale: hovered ? 1.05 : 1 }}
                transition={{ duration: 0.15 }}
            />
        </div>
    );
};
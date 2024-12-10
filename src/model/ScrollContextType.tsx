import {MotionValue} from "framer-motion";

// Create a context to hold the scroll progress state
// To avoid passing non-serializable props like scrollYProgress, managing the scroll progress
// within each component independently by using a shared context. This way, you can keep the
// scroll progress state in a context provider and access it in the Header and Card components.
export interface ScrollContextType {
    scrollYProgress: MotionValue<number>;
}
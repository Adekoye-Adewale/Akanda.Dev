"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";

export function FadeInLeft({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, 
                                // { once: true }
                            );

  return (
    <div 
        ref={ref} 
        style={{
            transform: isInView ? "translateX(0px)" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)`,
            transitionDelay: delay
        }}
    >
            {children}
    </div>
  );
}

export function FadeInRight({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, 
                                // { once: true }
                            );

  return (
    <div 
        ref={ref} 
        style={{
            transform: isInView ? "translateX(0px)" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)`,
            transitionDelay: delay
        }}
    >
            {children}
    </div>
  );
}

export function FadeIn({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div 
        ref={ref} 
        style={{
            transform: isInView ? "scale(1)" : "scale(0.7)",
            opacity: isInView ? 1 : 0,
            filter: isInView ? "blur(0px)" : "blur(10px)",
            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)`,
            transitionDelay: delay
        }}
    >
            {children}
    </div>
  );
}
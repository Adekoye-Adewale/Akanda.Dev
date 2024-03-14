'use client';
import { useRef } from "react";
// import { ReactLenis } from '@/studio-freight/react-lenis'
import HeaderComp from "@/components/header";
import StickyCursor from "@/components/stickyCursor";

export default function MainLayout() {

    // const lenis = useLenis(({ scroll }) => {
    //     // called every scroll
    // })
    const stickyElement = useRef(null);

    return (
        <>
                <HeaderComp ref={stickyElement}/>
                <StickyCursor stickyElement={stickyElement} />
            
        </>
    )
}

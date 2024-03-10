'use client';
import { useRef } from "react";
import HeaderComp from "@/components/header";
import StickyCursor from "@/components/stickyCursor";

export default function MainLayout() {

    const stickyElement = useRef(null);

    return (
        <>
            <HeaderComp ref={stickyElement}/>
            <StickyCursor stickyElement={stickyElement} />
        </>
    )
}

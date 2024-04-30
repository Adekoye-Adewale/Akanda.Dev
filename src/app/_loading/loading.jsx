import React from "react"
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { loadingContents, loadingEntrance, loadingProgress } from "./anim"
import { handleSeeMoreClick, setRandomOpacity } from "./library"
import { entranceFacts as EntranceFacts } from "./copyContent"

export default function Loading() {

    const [facts, setFacts] = useState(EntranceFacts.map(fact => ({ ...fact, opacity: 0 }))); 
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        setFacts(EntranceFacts.map(fact => ({ ...fact, opacity: 0 })));
        setRandomOpacity(facts, setFacts); 
        
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationComplete(true);
        }, 6000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="grid__center full__size loading__page">
            <motion.div 
                className="opening__ball" 
                variants={loadingEntrance}
                initial="initial"
                animate={animationComplete ? "exit" : "enter"}
                exit="exit"
            >
            </motion.div>
            <motion.div 
                className="loading__contents__wrapper"
                variants={loadingContents}
                initial="initial"
                animate={animationComplete ? "exit" : "enter"}
                exit="exit"
            >
                <div className="loading__contents__inner__wrapper">
                    <div className="facts__wrapper">
                        {facts.map((fact, index) => (
                            <div 
                                key={index} 
                                className="fact__wrapper"
                                style={{ opacity: fact.opacity }}
                            >
                                <h4>
                                    {fact.title}
                                </h4>
                                <p>
                                    {fact.fact}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div 
                        className="see__more" 
                        onClick={() => handleSeeMoreClick(facts, setFacts)}
                    >
                        See More
                    </div>
                </div>
                <motion.div 
                    className="loading__progress"
                    variants={loadingProgress}
                    initial="initial"
                    animate={animationComplete ? "exit" : "enter"}
                    exit="exit"
                >

                </motion.div>
            </motion.div>
        </div>
    )
}

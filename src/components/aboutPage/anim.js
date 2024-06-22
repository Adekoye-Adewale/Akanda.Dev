export const tabCopy = {
    desktop: {
        initial: {
            height: 0,
            opacity: 0,
            y: 10,
        },
        enter: {
            height: 90,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.75,
                delay: 0,
                ease: "linear",
                y: {
                    duration: 0.75,
                    delay: 0.25,
                },
                opacity: {
                    duration: 1.5,
                    delay: 0.35,
                }
            }
        },
        exit: {
            height: 0,
            opacity: 0,
            y: -20,
            transition: {
                delay: 0.35,
                duration: 0.5,
                type: "tween",
                ease: [0.17, 0.67, 0.83, 0.67],
                opacity: {
                    duration: 1,
                    delay: 0.25,
                }
            }
        }
    },
    mobile: {
        initial: {
            height: 0,
            opacity: 0,
            y: 10,
        },
        enter: {
            height: 150,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.75,
                delay: 0,
                ease: "linear",
                y: {
                    duration: 0.75,
                    delay: 0.25,
                },
                opacity: {
                    duration: 1.5,
                    delay: 0.35,
                }
            }
        },
        exit: {
            height: 0,
            opacity: 0,
            y: -20,
            transition: {
                delay: 0.35,
                duration: 0.5,
                type: "tween",
                ease: [0.17, 0.67, 0.83, 0.67],
                opacity: {
                    duration: 1,
                    delay: 0.25,
                }
            }
        }
    } 
}
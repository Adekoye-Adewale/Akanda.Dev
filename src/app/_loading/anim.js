export const loadingEntrance = {
    initial: {
        scale: 1,
        opacity: 1,
        y: 15,
        x: -14,
        width: 100,
        height: 40,
    },
    enter: {
        scale: 60, 
        width: 200,
        height: 200,
        opacity: 1,
        x: 25,
        y: 25,
        transition: { 
            duration: 2,
            delay: 0, 
            ease: [.215,.01,.355,1],
        }
    },
    exit: {
        scale: .25,
        width: 200,
        height: 200,
        opacity: 0,
        left: 0,
        x: 10,
        y: 10,
        transformOrigin: "left top",
        transition: { 
            delay: .35,
            duration: 0.5, 
            type: "tween", 
            ease: [.215,.01,.003,1],
            opacity: {
                duration: 1,
                delay: 2.25,
            }
        }
    }
}

export const loadingContents = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: { 
            duration: 2,
            delay: 0.75, 
            ease: [.215,.01,.355,1],
        }
    },
    exit: {
        opacity: 0,
        transition: { 
            duration: 0.5, 
            type: "tween", 
            ease: [.215,.01,.003,1]
        }
    }
}

export const loadingProgress = {
    initial: {
        width: '10%',
        height: 10,
    },
    enter: {
        width: '100%',
        height: 30,
        transition: { 
            duration: 6,
            delay: 0.55, 
            ease: [.215,.01,.355,1],
        }
    },
    exit: {
        opacity: 0,
        transition: { 
            duration: 0.5, 
            type: "tween", 
            ease: [.215,.01,.003,1]
        }
    }
}
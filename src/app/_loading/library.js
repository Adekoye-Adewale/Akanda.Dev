export const handleSeeMoreClick = (facts, setFacts) => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const updatedFacts = facts.map((fact, index) => {
        if (index === randomIndex) {
            return { ...fact, opacity: 1 }; 
        }
        return { ...fact, opacity: 0 };
    });
    setFacts(updatedFacts);
};


export const setRandomOpacity = (facts, setFacts) => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const updatedFacts = facts.map((fact, index) => {
        if (index === randomIndex) {
            return { ...fact, opacity: 1 };
        }
        return { ...fact, opacity: 0 };
    });
    setFacts(updatedFacts);
};

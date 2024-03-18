export const handleSeeMoreClick = (facts, setFacts) => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const updatedFacts = facts.map((fact, index) => {
        if (index === randomIndex) {
            return { ...fact, opacity: 1 }; // Update opacity to 1 for the randomly selected fact
        }
        return { ...fact, opacity: 0 }; // Reset opacity to 0 for other facts
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

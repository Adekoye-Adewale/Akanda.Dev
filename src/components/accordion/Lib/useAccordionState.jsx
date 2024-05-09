import { useEffect, useState } from 'react';

export const useAccordionState = ({ Content }) => {
    const [activeTab, setActiveTab] = useState(Content[0]);

    useEffect(() => {
        setActiveTab(Content[0]);
    }, []);

    return { activeTab, setActiveTab };
};

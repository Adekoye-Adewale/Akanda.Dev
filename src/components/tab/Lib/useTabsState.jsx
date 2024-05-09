import { useEffect, useState } from 'react';
import { Tabs } from '@/webContents/skills';

const useTabsState = () => {
    const [activeTab, setActiveTab] = useState(Tabs[0]);

    useEffect(() => {
        setActiveTab(Tabs[0]);
    }, []);

    return { activeTab, setActiveTab };
};

export default useTabsState;

'use client'
import React from 'react'
import { motion } from 'framer-motion'
import TabTitleBtn from './tabTitle'
import useTabsState from './Lib/useTabsState'
import { Tabs } from '@/webContents/skills'
import style from './tab.module.css'

export default function Tab() {

    const { activeTab, setActiveTab } = useTabsState();
    const isSelected = (tab) => activeTab.title === tab.title;

    return (
        <div className={style.tab__boxes__wrap}>
            <div className={style.tab__box}>
                <div className={style.title__btns__wrap}>
                    {Tabs.map((tab) => (
                        <div
                            className={`${isSelected(tab) ? style.active : ''}`}
                            key={tab.title}
                            onClick={() => setActiveTab(tab)}
                        >
                            <TabTitleBtn text={tab.label} />
                        </div>
                    ))}
                </div>
                
                <motion.div
                    key={activeTab.title || "empty"} 
                    className={style.tabContent}
                >
                    {activeTab.component(
                        { 
                            img: activeTab.img,
                            text: activeTab.text,
                            link: activeTab.link
                        })
                    }
                </motion.div>
            </div>
        </div>
    )
}

'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import TabContent from './tabContent'
import TabTitleBtn from './tabTitle'
import style from './tab.module.css'

const Tabs = [
	{
		title: 'tab1',
		label: 'Tab 1',
		render: () => {
			return (<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eveniet asperiores beatae cumque quae repudiandae sequi expedita eum architecto hic. Quidem dolores quaerat nemo pariatur modi aspernatur eum blanditiis repellat?</p>)
		}
	},
	{
		title: 'tab2',
		label: 'Tab 2',
		render: () => {
			return (<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita in non earum natus explicabo est aspernatur porro molestias fugiat eaque dignissimos, accusantium qui fugit praesentium ad cumque dolore temporibus excepturi.</p>)
		}
	},
	{
		title: 'tab3',
		label: 'Tab 3',
		render: () => {
			return (<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos sequi ducimus voluptas, accusamus amet? Ducimus, velit doloremque atque est quidem ullam nisi quod. Aut quisquam ipsa exercitationem mollitia ratione?</p>)
		}
	}
];

const tabContentVariants = {
	initial: {
		y: 10,
		opacity: 0
	},
	enter: {
		y: 0,
		opacity: 1
	},
	exit: {
		y: -10,
		opacity: 0
	}
}

export default function Tab() {

    const [activeTab, setActiveTab] = useState(Tabs[0])

    useEffect(() => {
        const handleClick = (copy) => {
            setActiveTab(copy)
        }
        handleClick()
    }, [])

	const isSelected = () => activeTab.name === copy.title

    return (
        <div className={style.tab__boxes__wrap}>
            
                <div key={index} className={style.tab__box}>
                    <div className={style.title__btns__wrap}>

                        {Tabs.map((copy) => (
                            <div 
                                className={[style.title__btn__wrap, isSelected() ? style.active : ''].join(' ')} 
                                key={copy.title}
                                onClick={() => handleClick(copy)}
                            >
                                <TabTitleBtn 
                                    text={copy.title}
                                />
                            </div>
                        ))}

                    </div>

                    <div className={style.tabContent}>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeTab.name || "empty"}
                                variants={tabContentVariants}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                transition={{
                                    duration: .3
                                }}
                            >
                                {activeTab && activeTab?.render()}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* <div className={style.content__boxes__wrap}>
                        <div className={style.content__wrap}>
                            <TabContent 
                                img={copy.img} 
                                text={copy.text} 
                                link={copy.link}
                            />
                        </div>
                        <div className={style.content__wrap}>
                            <TabContent 
                                img={copy.img} 
                                text={copy.text} 
                                link={copy.link}
                            />
                        </div>
                        <div className={style.content__wrap}>
                            <TabContent 
                                img={copy.img} 
                                text={copy.text} 
                                link={copy.link}
                            />
                        </div>
                        <div className={style.content__wrap}>
                            <TabContent 
                                img={copy.img} 
                                text={copy.text} 
                                link={copy.link}
                            />
                        </div>
                    </div> */}
                </div>
            
        </div>
    )
}

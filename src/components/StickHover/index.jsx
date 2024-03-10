import React, { forwardRef } from 'react';
// import styles from './styles.module.css';
import Magnetic from '@/components/magnetic'

const StickHover = forwardRef(function StickHover(props, ref) {
    const { children } = props;

    return (
        <div>
            <Magnetic>
                <div className='ccursor' ref={ref}>
                    {children}
                </div>

            </Magnetic>
        </div>
    );
});

export default StickHover;
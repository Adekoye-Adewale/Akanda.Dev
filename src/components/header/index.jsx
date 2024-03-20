import { forwardRef } from 'react';
import Magnetic from '../magnetic';
import NavMenu from './navMenu';
import Logo from './logo';
import styles from './header.module.css';

const HeaderComp = forwardRef(function index(props, ref) {
  return (
    <header className={styles.header}>
      <div className='img__wrap'>
        <Logo/>
      </div>
      <div className={styles.menu__button}>
        <NavMenu/>
        <Magnetic>
            <div className={styles.burger}>
                <div ref={ref} className={styles.bounds}></div>
            </div>
        </Magnetic>
      </div>
    </header>
  )}
)

export default HeaderComp

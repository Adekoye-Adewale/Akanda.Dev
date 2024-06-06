import { forwardRef } from 'react';
import Magnetic from '../magnetic';
import NavMenu from './navMenu';
import Logo from './logo';
import styles from './header.module.css';

const HeaderComp = forwardRef(function index(props, ref) {
  return (
    <header className={styles.header}>
      <div className={`img__wrap ${styles.logo__wrap}`}>
        <Logo/>
      </div>
      <div className={`${styles.menu__button} ${styles.menu__wrap}`}>
        <NavMenu/>
        <div className={styles.burger}>
            <div ref={ref} className={styles.bounds}></div>
        </div>
      </div>
    </header>
  )}
)

export default HeaderComp

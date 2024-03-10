import Image from 'next/image';
import styles from './header.module.css';
import { logoCopy } from '@/webContents/header';

export default function Logo() {
    return (
        <>
            <Image
                {...logoCopy}
                className={styles.logo}
                priority
            />
        </>
    )
}

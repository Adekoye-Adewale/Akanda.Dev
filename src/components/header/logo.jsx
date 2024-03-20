import Link from 'next/link';
import Image from 'next/image';
import { logoCopy } from '@/webContents/header';
import styles from './header.module.css';

export default function Logo() {
    return (
        <>
            <Link 
                href="/" 
                title="Akanda Dev Home Page Link"
            >
                <Image
                    {...logoCopy}
                    className={styles.logo}
                    priority
                />
            </Link>
        </>
    )
}

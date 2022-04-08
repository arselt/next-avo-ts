import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link href='/'>
                            <a className={styles.a}>🥑 Next Avo</a>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <a className={styles.a} href='https://arselt.com' target='_blank'>🌐 Arselt.com</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
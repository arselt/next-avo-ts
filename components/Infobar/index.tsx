import React from 'react'
import styles from './Infobar.module.css'

function Infobar() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.footer_container}>
                <ul className={styles.footer_section}>
                    <li>About avocados</li>
                    <li>Know more</li>
                </ul>
                <ul className={styles.footer_section}>
                    <li>Services</li>
                    <li>All our avocados</li>
                </ul>
                <ul className={styles.footer_section}>
                    <li>Info</li>
                    <li>
                        Made on Next.js with the
                        Platzi course from
                        @jonalvarezz
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Infobar
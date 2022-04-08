import React from 'react'
import Image from 'next/image'
import styles from './Avotainer.module.css'

function Avotainer() {
    return (
        <figure className={styles.figure}>
            <div className={styles.img}>
                <Image src="/images/bacon.jpg" alt="" width="333" height="333" />
            </div>
            <figcaption className={styles.figcaption}>
                <h2 className={styles.h2}>Variety Avocado</h2>
                <h3 className={styles.h3}>🥑🥑🥑🥑🥑</h3>
            </figcaption>
        </figure>
    )
}

export default Avotainer
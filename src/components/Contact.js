import React from 'react';
import styles from './Contact.module.css'

const Contact = () => {
    return(
        <div className={styles.contact}>
            <div className={styles.contactAbout}>
                <div className={styles.contactImage}>
                    <img src="https://storage.googleapis.com/album-images/imf_pecos.jpg" alt="imf performing at trans pecos"></img>
                </div>
                <p className={styles.contactBio}>
                    Ian M Fraser (b. 1980) is a composer working in the field of computer music.
                    He lives in New York City with his wife and cat.
                </p>
            </div>
            <div className={styles.contactEmail}> 
                <p>Contact me at: <a href="mailto:imf@ianmfraser.computer">imf@ianmfraser.computer</a></p>
            </div>
        </div>
    )
}

export default Contact
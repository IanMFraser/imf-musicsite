import React from 'react';
import styles from './Contact.module.css'
import Figure from 'react-bootstrap/Figure'

const Contact = () => {
    return(
        <div className={styles.contact}>
            <div className={styles.contactAbout}>
                <Figure>
                    <Figure.Image src="https://storage.googleapis.com/album-images/IanFraser_TransPecos-20150805-04317.jpeg" alt="imf performing at trans pecos" className={styles.contactImage}></Figure.Image>
                    <Figure.Caption><span className={styles.photoCredit}>Photo by Billy Gomberg</span></Figure.Caption>
                </Figure>
                <p className={styles.contactBio}>
                    Ian M Fraser (b. 1980) is a composer working in the field of computer music. His work primarily focuses on generative structures, stochastic processes, and nonlinear feedback systems.
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
'use client'

import { useEffect, useRef } from 'react';
import styles from './footer.module.scss'
import Link from 'next/link';



export default function Footer() {
    return (
        <footer className={styles.footer} id='about'>
            <div className={styles.top}>
                <div className={styles.right}>
                    <h2>التواصل الاجتماعي</h2>
                    <div>
                        <Link href="https://www.instagram.com/turkiana_restaurant6/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                        <Link href="https://www.facebook.com/people/Turkiana/61558233836109/" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                    </div>
                </div>
                <div className={styles.left}>
                    <div className={styles.contactCard}>
                        <i className="fa-brands fa-whatsapp"></i>
                        <div>
                            <h3>واتساب</h3>
                            <p>01284219090</p>
                        </div>
                    </div>
                    <div className={styles.contactCard}>
                        <i className="fa-solid fa-phone"></i>
                        <div>
                            <h3>هاتف</h3>
                            <p>01284219090</p>
                        </div>
                    </div>
                    <div className={styles.contactCard}>
                            <i className="fa-solid fa-phone-office"></i>                        <div>
                            <h3>هاتف ارضي</h3>
                            <p>035525214</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>جميع الحقوق محفوظة لـ <a href="https://turkiana.com">تركيانا</a> &copy; 2023</p>
            </div>
        </footer>
    )
}
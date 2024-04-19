"use client";

import Link from "next/link";
import styles from './style.module.scss'


export default function ContactSection() {
    return(
        <section className={styles.contactSection} id="contact">
            <h2 className={styles.title}>تواصل معنا</h2>
            <div className={styles.container}>
                <div className={styles.contactCard}>
                    <h3 className={styles.infoTitle}>معلومات التواصل</h3>
                    <div className={styles.infoCard}>
                        <i className="fa-brands fa-whatsapp"></i>
                        <Link href="tel:01284219090">
                            <h3>واتساب</h3>
                            <p>01284219090</p>
                        </Link>
                    </div>
                    <div className={styles.infoCard}>
                        <i className="fa-solid fa-phone"></i>
                        <Link href="tel:01284219090">
                            <h3>هاتف</h3>
                            <p>01284219090</p>
                        </Link>
                    </div>
                    <div className={styles.infoCard}>
                        <i className="fa-solid fa-phone-office"></i>
                        <Link href="tel:01284219090">
                            <h3>هاتف ارضي</h3>
                            <p>035525214</p>
                        </Link>
                    </div>
                    <div className={styles.infoCard}>
                        <i className="fa-solid fa-map"></i>
                        <Link href="tel:01284219090">
                            <h3>الموقع</h3>
                            <p>العصافرة - جمال عبدالناصر - امام مدرسة عزيز اباظة</p>
                        </Link>
                    </div>
                </div>
                <form action="" className={styles.form}>
                    <h3>لا تتردد في الاستفسار</h3>
                    <p>قم بملئ النموذج وسنتواصل معك في اقرب وقت</p>
                    <div className={styles.formBox}>
                        <div className={styles.inputBox}>
                            <label htmlFor="name">الاسم</label>
                            <input type="text" name="name" id="name" placeholder="الاسم"/>
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor="phoneNumber">{'رقم الهاتف (اختياري)'}</label>
                            <input type="text" name="phoneNumber" id="phoneNumber" placeholder="رقم الهاتف"/>
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor="email">{'البريد الالكتروني'}</label>
                            <input type="text" name="email" id="email" placeholder="البريد الالكتروني"/>
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor="message">رسالتك</label>
                            <textarea name="message" id="message" cols={30} rows={10} placeholder="رسالتك"></textarea>
                        </div>
                        <button>ارسال</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
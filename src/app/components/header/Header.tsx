"use client";
import logo from '../../../../public/logo.png'
import Image from 'next/image';
import styles from './header.module.scss'
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
export default function Header() {
    const [listOpen, setListOpen] = useState(false);
    const listRef:any = useRef(null);
    const listBtn:any = useRef(null);

    useEffect(() => {
        function handleClickOutside(event:any) {
            if(event.target !== listRef.current && event.target !== listBtn.current && listOpen) {
                setListOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image  src={logo} alt="Turkiana Logo"></Image>
            </div>
            <nav className={styles.navigation} dir='rtl'>
                <Link href="#home">الصفحة الرئيسية</Link>
                <Link href="#about">من نحن </Link>
                <Link href="#contact">تواصل معنا</Link>
            </nav>
            <label className={styles.hamburger} ref={listBtn}>
                <input type="checkbox" checked={listOpen} onChange={(e:any)=>setListOpen(e.target.checked)}/>
                <svg viewBox="0 0 32 32">
                    <path className={`${styles.line} ${styles.lineTopBottom}`} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className={styles.line} d="M7 16 27 16"></path>
                </svg>
            </label>
            <div className={styles.list}  ref={listRef} style={{height: listOpen ? '150px' : '0', opacity: listOpen ? 1 : 0}}>
                <li className={styles.listItem}>
                    <Link href="/">الصفحة الرئيسية</Link>
                    <ChevronRight />
                </li>
                <li className={styles.listItem}>
                    <Link href="#about">من نحن</Link>
                    <ChevronRight />
                </li>
                <li className={styles.listItem}>
                    <Link href="#contact">تواصل معنا</Link>
                    <ChevronRight />
                </li>
            </div>
        </header>
    )
}
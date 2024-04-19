"use client";

import Lenis from "@studio-freight/lenis";
import Header from "./components/header/Header";
import styles from "./page.module.scss";
import { useEffect } from "react";
import ImagesSlider from "./components/imagesSlider/ImagesSlider";
import Image from "next/image";
import meatImage from '../../public/meat.jpg'
import Footer from "./components/footer/Footer";
import ContactSection from "./components/contact/ContactSection";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -15 * t))  
      })
      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
}, []);
  return (
    <main className={styles.main}>
      <div className={styles.shine1}></div>
      <div style={{
        left: '-370px',
        top: '440px'
      }} className={styles.shine1}></div>
      <Header />
      <section className={styles.heroSection} id="home">
          <div className={styles.top}>
            <h2>غيرنا مفهوم المشوي في <span>اسكندرية</span></h2>
          </div>
          <ImagesSlider />
      </section>
      <section className={styles.typesSection}>
      <div className={styles.middleShine}></div>
        <h2 className={styles.title}>اطباق متنوعة</h2>
        <div className={styles.container}>
          <div className={styles.card}>
              <Image width={300} height={300} src="https://i.ytimg.com/vi/tiSkGemleF0/maxresdefault.jpg" alt="Turkiana Logo"></Image>
              <div className={styles.text}>
                <h3>الأكل البحري</h3>
                <p>اختر من بين مجموعة متنوعة من الأطباق البحرية الطازجة واللذيذة.</p>
              </div>
          </div>
          <div className={styles.card}>
              <Image width={300} height={300} src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Turkiana Logo"></Image>
              <div className={styles.text}>
                <h3>العصائر</h3>
                <p>اختر من بين مجموعة متنوعه من العصائر الطازجة والمنعشة</p>
              </div>
          </div>
          <div className={styles.card}>
              <Image width={300} height={300} src="https://images.unsplash.com/photo-1628294896516-344152572ee8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Turkiana Logo"></Image>
              <div className={styles.text}>
                <h3>المشاوي</h3>
                <p>استمتع بتشكيلة واسعة من المشاوي الطازجة والمميزة .</p>
              </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </main> 
  );
}
"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './imageslider.module.scss'
import styleMain from '../../page.module.scss'
const images = [
    'https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/18574189/pexels-photo-18574189/free-photo-of-lobster-on-salad.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.unsplash.com/photo-1616486447077-f8d3f7bae6b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1659275798977-6eee03f687a2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/8112967/pexels-photo-8112967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.unsplash.com/photo-1592164773890-f0126fce756b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1598515213692-5f252f75d785?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1549892898-79ac97b31fb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];


export default function ImagesSlider() {
    const slidersRef:any = useRef([]);
    const slidersReftwo: any = useRef([]);
    
    const slider1:any = useRef();
    const slider2:any = useRef();
    
    const slider1Images:any = useRef([]);
    const slider2Images:any = useRef([]);


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: styleMain.main,
              start: '0',
              end: 'bottom center',
              scrub: true,
            },
          });
          slidersRef.current.forEach((slider:any, index:any) => {
            tl.fromTo(slider, {
              xPercent: -140,
              duration: 0.3,
              ease: 'none'
            },{xPercent: -100, duration: 0.3},0);
          });
      
          slidersReftwo.current.forEach((slider:any, index:any) => {
            tl.fromTo(slider, {
              xPercent: -100,
              duration: 0.3,
              ease: 'none'
            },{xPercent: -140, duration: 0.3},0);
          });
      
        //   slider1Images.current.forEach((slider:any, index:any) => {
        //     tl.to(slider, {
        //       xPercent: 30,
        //       scale: 2,
        //       duration:1,
        //       ease: 'none'
        //     },0)
        //   })
        //   slider2Images.current.forEach((slider:any, index:any) => {
        //     tl.to(slider, {
        //       xPercent: 30,
        //       scale: 2,
        //       duration:1,
        //       ease: 'none'
        //     },0)
            
        //   })
    }, [])

    return (
        <div className={styles.slidersContainer}>
            <div className={styles.slider1} ref={slider1} >
            {images.map((src: any, index: number) => (
              <div key={index} className={styles.imageContainer} ref={(el:any) => slidersRef.current[index] = el}>
                <img onError={(e:any)=>{e.target.src = 'https://img.freepik.com/premium-photo/grilled-meat-kabab-hd-8k-wallpaper-stock-photographic-image_890746-24528.jpg'}} key={index} src={src} alt={`Image ${index}`} ref={(el:any) => slider1Images.current[index] = el} />
              </div>
            ))}
            </div>
            <div className={styles.slider2} ref={slider2} >
              {images.reverse().map((src: any, index: number) => (
                <div key={index} className={styles.imageContainer} ref={(el:any) => slidersReftwo.current[index] = el}>
                  <img key={index} src={src} alt={`Image ${index}`} ref={(el:any) => slider2Images.current[index] = el}/>
                </div>
              ))}
            </div>
        </div>
    )
}
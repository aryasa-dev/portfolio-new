"use client";
import React, { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import Hero from "./hero";
import About from "./about";

type Props = {
  heroData: WelcomeMe[];
  aboutData: AboutMe[];
};

export default function Top({ aboutData, heroData }: Props) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <div ref={containerRef} className="relative">
      <Hero data={heroData} scale={scale} opacity={opacity} />
      <About data={aboutData} />
    </div>
  );
}

import React from "react";
// import Section from "./section";
// import Divider from "./divider";
import SectionTitle from "./section-title";
// import Image from "next/image";
// import { urlForImage } from "@/sanity/lib/image";
import {
  ChartNoAxesCombinedIcon,
  LightbulbIcon,
  PaletteIcon,
  RocketIcon,
  ZapIcon,
} from "lucide-react";
import { motion } from "motion/react";

type TechProps = {
  data: TechStack[];
};

const cardVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    },
  },
};

const Tech: React.FC<TechProps> = ({ data }) => {
  const dd = [
    {
      icon: (
        <RocketIcon
          size={62}
          className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        />
      ),
      title: "Modern Frontend Development",
      description:
        "I build fast, responsive, and scalable websites using React & Next.js — ensuring smooth performance across all devices.",
    },
    {
      icon: (
        <ChartNoAxesCombinedIcon
          size={62}
          className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        />
      ),
      title: "SEO-Friendly & Optimized",
      description:
        "Clean structure, optimized speed, and SEO best practices so your website ranks higher and gets discovered easily.",
    },
    {
      icon: (
        <PaletteIcon
          size={62}
          className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        />
      ),
      title: "Pixel-Perfect UI to Code",
      description:
        "I transform design files into interactive websites with animations and seamless user experience.",
    },
    {
      icon: (
        <LightbulbIcon
          size={62}
          className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        />
      ),
      title: "Conversion-Focused Landing Pages",
      description:
        "Every element — from headlines to CTA buttons — is crafted to maximize engagement and boost conversions.",
    },
    {
      icon: (
        <ZapIcon
          size={62}
          className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        />
      ),
      title: "Scalable & Maintainable Code",
      description:
        "Reusable components, clean architecture, and future-proof development for long-term growth.",
    },
  ];

  return (
    <section id="expertise" className="py-[200px]">
      <div className="container">
        <SectionTitle>What I Do Best</SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 flex flex-col md:flex-row flex-wrap justify-center gap-5"
        >
          {dd.map((d, id) => (
            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.7 }}
              className="w-full md:w-[48%] lg:w-[31.5%] xl:w-[32%] flex flex-col justify-between transition-all duration-300 p-7 rounded-xl border border-neutral-300/60 group cursor-default"
              key={id}
            >
              <div className="flex items-start">
                <div className="w-[30%]">{d.icon}</div>
                <div className="w-[70%]">
                  <p className="">{d.description}</p>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <p className="text-xl font-bold">{d.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;

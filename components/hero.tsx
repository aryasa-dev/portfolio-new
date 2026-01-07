// import { typingData } from "@/constants";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import { TypeAnimation } from "react-type-animation";
// import Container from "./container";
// import { Controls, Player } from "@lottiefiles/react-lottie-player";
import Button from "./button";
import { ContactModal } from "./modal";
import { motion } from "motion/react";

interface HeroProps {
  data: WelcomeMe[];
  scale?: any
  opacity?: any
}

const Hero: React.FC<HeroProps> = ({ data,opacity,scale }) => {
  const [open, setOpen] = useState(false);
  // const text = splitText("Building Clean & Modern Frontends");
  const line1 = "Building Clean &";
  const line2 = "Modern Frontends";
  const line1TotalDelay = line1.length * 0.02 + 0.4;

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col place-content-center"
    >
      <motion.div style={{scale, opacity}} className="container">
        {data &&
          data.map((dt) => (
            <div key={dt._id} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  duration: 0.6,
                }}
                // transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                viewport={{ once: true }}
              >
                <Image
                  src={urlForImage(dt.image.asset._ref).url()}
                  alt="Arya Saputra - Frontend Developer"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-16 h-16 mx-auto"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  duration: 0.6,
                  delay: 0.15,
                }}
                viewport={{ once: true }}
                className="font-medium text-base tracking-[.3em] text-opacity-70 uppercase mt-5 mb-3"
              >
                {dt.role}
              </motion.p>

              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                // viewport={{ once: true, amount: 0.6 }}
                className="lg:max-w-4xl mx-auto mt-6 lg:mb-4 text-4xl lg:text-7xl uppercase font-bold"
              >
                {line1.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, scale: 0.5 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.35,
                          ease: [0.16, 1, 0.3, 1],
                          delay: i * 0.04,
                        },
                      },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                // viewport={{ once: true, amount: 0.6 }}
                className="lg:max-w-4xl mx-auto mt-2 lg:mt-6 mb-4 text-4xl lg:text-7xl uppercase font-bold"
              >
                {line2.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, scale: 0.5 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.35,
                          ease: [0.16, 1, 0.3, 1],
                          delay: line1TotalDelay + i * 0.04,
                        },
                      },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                viewport={{ once: true }}
                className="text-neutral-500 max-w-2xl mx-auto text-xl"
              >
                Specializing in modern frontend technologies, delivering clean
                UI and optimal performance
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: .15 }}
                viewport={{ once: true }}
                className="mt-10 flex items-center justify-center gap-4"
              >
                <Link href={"/#projects"}>
                  <Button>See My Works</Button>
                </Link>
                <Button onClick={() => setOpen(true)}>Contact Me</Button>
              </motion.div>
            </div>
          ))}

        <ContactModal isOpen={open} setIsOpen={setOpen} />
      </motion.div>
    </section>
  );
};

export default Hero;

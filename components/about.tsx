import React from "react";
// import Divider from "./divider";
// import SectionTitle from "./section-title";
// import Image from "next/image";
// import { urlForImage } from "@/sanity/lib/image";
// import { PortableText } from "@portabletext/react";
// import { RichTextComponent } from "./rich-text-component";
import Link from "next/link";
import Button from "./button";
import { motion } from "motion/react";
// import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
// import Section from "./section";
// import { ArrowRightIcon, MoveRightIcon } from "lucide-react";

type Props = {
  data: AboutMe[];
};

const About: React.FC<Props> = ({ data }) => {
  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "10+", label: "Happy Clients" },
  ];
  return (
    <section
      id="about"
      className="py-[120px] flex flex-col place-content-center relative bg-[#F3F4FA]"
    >
      {/* <Divider /> */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-indigo-500/80 via-cyan-500/20 to-transparent blur-3xl rounded-full" />
      </div> */}
      {/* <SectionTitle>Behind The Code</SectionTitle> */}
      <div className="container">
        {data &&
          data.map((about) => (
            <React.Fragment key={about._id}>
              {/* <div className="flex flex-col gap-y-5 lg:flex-row my-10 items-center">
                <div className="flex-1">
                  <Image
                    src={urlForImage(about.image.asset._ref).url()}
                    alt="Arya Saputra - Frontend Developer"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto max-w-full h-[400px] mx-auto"
                  />
                  <div className="flex items-center justify-center lg:hidden">
                    <label htmlFor="love" className="love" title="Like">
                      <input type="checkbox" id="love" className="check-love" />
                      <div className="heart" />
                    </label>

                    <Link href="#contact" title="Contact me">
                      <PaperAirplaneIcon className="w-10 h-10 transition-transform text-gray-500 duration-500 hover:-rotate-45" />
                    </Link>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-lg lg:w-[75%] space-y-3">
                    <PortableText
                      value={about.description}
                      components={RichTextComponent}
                    />
                  </div>
                </div>
              </div> */}
              <div className="mt-8 flex items-start flex-wrap lg:flex-nowrap gap-6">
                <div className="w-full lg:w-[30%]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-80 h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto flex flex-col items-center justify-center text-white rounded-full text-center bg-neutral-700 aspect-square"
                  >
                    <h2 className="text-8xl">2+</h2>
                    <span className="text-lg">Years Experience</span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="w-[70%] lg:w-[50%]"
                >
                  <div className="max-w-[80%] space-y-3 text-xl font-light">
                    <p>
                      Hi, I’m Arya 👉 a frontend developer who turns ideas into
                      beautiful, performant web experiences.
                    </p>
                    <p>
                      I specialize in crafting responsive, SEO-friendly websites
                      using React, Next.js, and TailwindCSS. My goal is to help
                      startups and creative teams build digital products that
                      not only look great but also convert better and load
                      faster.
                    </p>
                    <p>
                      Beyond clean code, I focus on details 👌 motion, layout,
                      and the feeling every interaction creates. Because a great
                      interface isn’t just seen, it’s felt.
                    </p>
                    <p>
                      When I’m not coding, I love exploring design systems, UI
                      animation, and the art of good coffee.
                    </p>
                    <p>
                      Let’s collaborate and build something meaningful together.
                    </p>
                  </div>

                  <div className="!mt-10">
                    <Link href={`${about.cvUrl}?dl=`}>
                      <Button>Download CV</Button>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="w-[20%]"
                >
                  <div className="w-1/2 flex flex-col items-center gap-8">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <p className="text-3xl font-bold text-gray-900">
                          {stat.number}
                        </p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </React.Fragment>
          ))}
      </div>
    </section>
  );
};

export default About;

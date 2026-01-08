import React from "react";
// import Section from "./section";
// import Divider from "./divider";
import SectionTitle from "./section-title";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Button from "./button";
import { motion } from "motion/react";
import { ExternalLinkIcon } from "lucide-react";

type ProjectsProps = {
  data: Project[];
};

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="py-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-5 justify-between">
          <div className="xl:max-w-[80%]">
            <SectionTitle>Take a look at my projects</SectionTitle>
          </div>
          <Link href={"/project"} className="lg:ml-auto">
            <Button>Browse All</Button>
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
        >
          {data &&
            data.slice(0, 6).map((project) => (
              <motion.div
                variants={cardVariants}
                transition={{ duration: 0.7 }}
                className="flex flex-col-reverse lg:flex-row justify-between gap-7 border border-neutral-300/60 rounded-md overflow-hidden relative"
                key={project._id}
              >
                {/* <div className="w-full lg:w-1/2 flex flex-col justify-between p-4 lg:p-0">
                  <div>
                    <b className="font-bold text-xl mb-1 block">
                      {project.cover_title}
                    </b>
                    <p>{project.description}</p>
                  </div>

                  <Link
                    href={`/project/${project.slug.current}`}
                    className="w-fit relative font-medium after:content-[''] after:h-[1px] after:w-0 after:bg-transparent after:absolute after:left-0 after:right-0 after:bottom-0 after:transition-all after:duration-300 after:hover:bg-neutral-500 after:hover:w-full"
                  >
                    Case Study
                  </Link>
                </div> */}

                <div className="w-full relative h-60">
                  <Image
                    src={urlForImage(project.cover.asset._ref).url()}
                    alt={project.cover_title}
                    fill
                    sizes="100vw"
                    className="w-auto h-auto lg:rounded-md object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-md bg-neutral-300 bg-opacity-90 flex flex-col items-center place-content-center transition duration-300 opacity-0 hover:opacity-100 p-4 lg:p-0">
                  <Link href={`/project/${project.slug.current}`} className="flex items-center gap-x-2 font-medium transition duration-300 hover:underline">Case Study <ExternalLinkIcon size={18} /></Link>
                </div>
              </motion.div>
              // <Link
              //   href={`/project/${project.slug.current}`}
              //   key={project._id}
              //   className="drop-shadow-md rounded-md relative"
              // >
              //   <Image
              //     src={urlForImage(project.cover.asset._ref).url()}
              //     alt={project.cover_title}
              //     width={0}
              //     height={0}
              //     sizes="100vw"
              //     className="w-auto h-60 lg:h-60 lg:w-full object-cover rounded-md"
              //   />
              //   <div className="absolute inset-0 rounded-md bg-neutral-300 bg-opacity-90 flex flex-col items-center place-content-center transition duration-300 hover:opacity-0">
              //     <div className="w-[75%] text-center">
              //       <h2 className="text-xl lg:text-3xl mb-5">
              //         {project.cover_title}
              //       </h2>
              //       <p className="text-base lg:text-lg font-medium mb-5">
              //         {project.description}
              //       </p>

              //       <div className="flex items-center gap-3 flex-wrap justify-center">
              //         {project.tags.map((tag, id) => (
              //           <span
              //             key={id}
              //             className="bg-[#f1f8ff] text-blue-500 text-xs lg:text-base rounded-full px-3 py-1 font-semibold lowercase"
              //           >
              //             {tag}
              //           </span>
              //         ))}
              //       </div>
              //     </div>
              //   </div>
              // </Link>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import SectionTitle from "./section-title";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { ExternalLinkIcon } from "lucide-react";

type Props = {
  data: Project[];
};

export function ProjectList({ data }: Props) {
  return (
    <section className="py-[140px]">
      <div className="container">
        <SectionTitle>My Projects</SectionTitle>
        <p className="lg:text-lg mt-2">
          A curated collection of projects I’ve built 👇 from client work to
          personal experiments.
        </p>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {data &&
            data.map((project) => (
              <div
                className="flex justify-between gap-7 border border-neutral-300/60 rounded-md relative"
                key={project._id}
              >
                {/* <div className="w-1/2 flex flex-col justify-between">
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
                  <Link
                    href={`/project/${project.slug.current}`}
                    className="flex items-center gap-x-2 font-medium transition duration-300 hover:underline"
                  >
                    Case Study <ExternalLinkIcon size={18} />
                  </Link>
                </div>
              </div>
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
        </div>
      </div>
    </section>
  );
}

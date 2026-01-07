import Footer from "@/components/footer";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  project: Project;
  contactData: Contact[];
};

type ParamsProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;

const ProjectDetail = ({ project, contactData }: Props) => {
  const router = useRouter();
  // const { slug } = router.query;

  return (
    <div>
      <Head>
        <title>
          {`Arya's Project - ${project?.cover_title}` ||
            "Arya - Frontend Developer"}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Arya.sa Portfolio Website" />
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>

      <main>
        <section className="container mb-[120px]">
          <div className="py-10">
            <button onClick={() => router.back()}>
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="space-y-6">
              <div>
                <p className="label">project</p>
              </div>
              <h1 className="text-4xl">{project?.title}</h1>
              <div>
                <p className="label">built with</p>
                <ul>
                  {project?.tags.map((stack, id) => (
                    <li key={id} className="pl-3">
                      {stack}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="label">about this project</p>
                <div className="lg:w-[80%] text-base leading-relaxed">
                  <PortableText value={project?.detail} />
                </div>
              </div>

              <div>
                <p className="label">demo</p>
                <Link
                  target="_blank"
                  href={project?.demo}
                  className="underline flex gap-x-2 items-center"
                >
                  <span>Visit Live Site Here</span>
                  <span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </span>
                </Link>
              </div>

              <div>
                <p className="label">screenshots</p>
                <div className="mt-10 gap-10 grid grid-cols-1 lg:grid-cols-2">
                  {project?.images_detail.map((image, id) => (
                    <Image
                      key={id}
                      src={urlForImage(image.asset._ref).url()}
                      alt="project detail"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[90%] lg:w-auto h-auto shadow-lg rounded-xl"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-20 space-y-10">
            {project?.images_detail.map((image, id) => (
              <Image
                key={id}
                src={urlForImage(image.asset._ref).url()}
                alt="project detail"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[90%] lg:w-auto h-auto mx-auto shadow-lg rounded-xl"
              />
            ))}
          </div> */}
        </section>
        <Footer data={contactData} />
      </main>
    </div>
  );
};

export default ProjectDetail;

// export const getStaticPaths = async () => {
//   const query = groq`*[_type=='projects']{
//           slug
//       }`;

//   const projects = await client.fetch(query);

//   const paths = projects.map((project: Project) => {
//     return {
//       params: { slug: project.slug.current },
//     };
//   });

//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

export const getServerSideProps = async ({ params: { slug } }: ParamsProps) => {
  const query = groq`*[_type=='projects' && slug.current == '${slug}'][0]`;
  const contactQuery = groq`*[_type == "contact"]{
    _id,
    email,
    phone,
    linkedin,
    github
  }`

  const project = await client.fetch(query);
  const contactData = await client.fetch(contactQuery);

  return {
    props: { project, contactData },
  };
};

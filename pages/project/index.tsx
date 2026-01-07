import Footer from "@/components/footer";
import Header from "@/components/header";
import { ProjectList } from "@/components/projects-list";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Head from "next/head";
import React from "react";

type Props = {
  projectsData: Project[];
  contactData: Contact[];
};

export default function ProjectPage({ projectsData,contactData }: Props) {
  return (
    <div>
      <Head>
        <title>Arya.sa - Frontend Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Arya.sa Portfolio Website" />
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>
      <main>
        <Header />
        <ProjectList data={projectsData} />
        <Footer data={contactData} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const projectsQuery = groq`*[_type == "projects"]{
    _id,
    cover,
    title,
    cover_title,
    slug,
    description,
    detail,
    images_detail,
    tags,
    demo,
    github
  }`;
  const contactQuery = groq`*[_type == "contact"]{
    _id,
    email,
    phone,
    linkedin,
    github
  }`

  const projectsData = await client.fetch(projectsQuery);
  const contactData = await client.fetch(contactQuery);

  return {
    props: {
      projectsData,
      contactData,
    },
  };
}

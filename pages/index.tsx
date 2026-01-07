import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Process from "@/components/process";
import Projects from "@/components/projects";
import Tech from "@/components/tech";
import Top from "@/components/top";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Head from "next/head";
import React from "react";

interface HomeProps {
  heroData: WelcomeMe[];
  aboutData: AboutMe[];
  techData: TechStack[]
  projectsData: Project[]
  contactData: Contact[]
}

const Home: React.FC<HomeProps> = ({ heroData, aboutData, techData, projectsData, contactData }) => {
  // const data = await client.fetch(query)
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
        {/* <Top heroData={heroData} aboutData={aboutData} /> */}
        <Hero data={heroData} />
        <About data={aboutData} />
        <Tech data={techData} />
        {/* <Process /> */}
        <Projects data={projectsData} />
        {/* <Contact data={contactData} /> */}
        <Footer data={contactData} />
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const welcomeQuery = groq`*[_type == "welcome"]{
    _id,
    image,
    title,
    role
  }`;
  const aboutQuery = groq`*[_type == "about"] {
    image,
    _id,
    description,
    "cvUrl": cv.asset->url
  }`;
  const techQuery = groq`*[_type == "technologies"]{
    _id,
    stack
  }`
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
  }`
  const contactQuery = groq`*[_type == "contact"]{
    _id,
    email,
    phone,
    linkedin,
    github
  }`

  const heroData = await client.fetch(welcomeQuery);
  const aboutData = await client.fetch(aboutQuery);
  const techData = await client.fetch(techQuery);
  const projectsData = await client.fetch(projectsQuery);
  const contactData = await client.fetch(contactQuery);

  return {
    props: {
      heroData,
      aboutData,
      techData,
      projectsData,
      contactData
    },
  };
}

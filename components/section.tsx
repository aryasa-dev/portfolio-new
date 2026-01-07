import React from "react";
import Container from "./container";

type SectionProps = {
  children: React.ReactNode;
  id: string;
};

const Section: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <section id={id} className="min-h-screen relative py-10">
      <Container>{children}</Container>
    </section>
  );
};

export default Section;

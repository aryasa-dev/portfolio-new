import React from "react";
import SectionTitle from "./section-title";

type Props = {};

export default function Process({}: Props) {
  const data = [
    {
      title: "Research",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellat explicabo inventore, error officiis dolores, sint, aliquam autem possimus quos qui odit. Maiores, ipsa eaque.",
    },
    {
      title: "Research",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellat explicabo inventore, error officiis dolores, sint, aliquam autem possimus quos qui odit. Maiores, ipsa eaque.",
    },
    {
      title: "Research",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellat explicabo inventore, error officiis dolores, sint, aliquam autem possimus quos qui odit. Maiores, ipsa eaque.",
    },
  ];
  return (
    <section className="py-[120px]">
      <div className="container">
        <SectionTitle>My Working Process</SectionTitle>

        <div className="mt-10 space-y-6">
          {data.map((item, id) => (
            <div className="grid grid-cols-4 gap-5 items-start" key={id}>
              <div className="col-span-1">
                <p className="font-bold">0{id + 1}.</p>
              </div>
              <div className="col-span-1">
                <h4 className="text-2xl">{item.title}</h4>
              </div>
              <div className="col-span-2">
                <p className="max-w-lg ml-auto">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

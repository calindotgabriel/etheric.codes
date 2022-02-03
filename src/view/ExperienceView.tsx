import React from "react";
import cv from "../data/cv";
import { H3 } from "../template/H3";
import { DescriptionView } from "./DescriptionView";

type ExperienceViewProps = {
  experience: typeof cv.experience
}

export const ExperienceView: React.FC<ExperienceViewProps> = (props) => {
  return (
    <section className="">
      <H3>Experience</H3>
      <ul>
      {cv.experience.map((exp, i) =>
        <li className="mt-3 first:mt-2 md:mt-4 md:first:mt-2" key={'exp'+i}>
          <p><span className="font-bold tracking-wide">{exp.office}</span> - <span className="italic">{exp.period}</span></p>
          <DescriptionView index={i} description={exp.description}/>
        </li>)}
      </ul>
    </section>
  )
}

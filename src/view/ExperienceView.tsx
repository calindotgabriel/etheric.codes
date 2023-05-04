import React from "react";
import cv from "../data/cv";
import { H3 } from "../template/H3";
import { DescriptionView } from "./DescriptionView";

type ExperienceViewProps = {
  experience: typeof cv.experience
}

export const ExperienceView: React.FC<ExperienceViewProps> = (props) => {
  const { experience } = props;
  return (
    <section className="">
      <div className="mb-2">
        <H3>Experience</H3>
      </div>
      <ul>
        {cv.experience.map((exp, i) =>
          <li className="mt-5 first:mt-1 mb" key={'exp' + i}>
            <p><span className="font-bold">{exp.office}</span> - <span className="italic">{exp.period}</span></p>
            <DescriptionView index={i} description={exp.description} />
          </li>)}
      </ul>
    </section>
  )
}

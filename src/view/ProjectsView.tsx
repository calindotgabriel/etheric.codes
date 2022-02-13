import React from "react";
import cv from "../data/cv";
import { H3 } from "../template/H3";
import { H4 } from "../template/H4";
import { DescriptionView } from "./DescriptionView";

type ProjectsViewProps = {
  projects: typeof cv.projects
}

export const ProjectsView: React.FC<ProjectsViewProps> = (props) => {
  const { projects } = props;  
  return (
    <section className=""> 
        <H3>Projects</H3>
        <ul>
        {cv.projects.map((proj, i) =>
          <li className="mt-4 first:mt-2" key={'proj'+i}>
            <H4><span className="font-bold">{proj.title} {proj.client ? " - " + proj.client : ""}</span> - <span className="italic">{proj.period}</span></H4>
            <DescriptionView description={proj.description} index={i} />
          </li>)}
          </ul>
      </section>
  )
}

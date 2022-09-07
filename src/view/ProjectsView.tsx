import cv from "../data/cv";
import { H3 } from "../template/H3";
import { DescriptionView } from "./DescriptionView";

type ProjectsViewProps = {
  projects: typeof cv.projects
}

export const ProjectsView: React.FC<ProjectsViewProps> = (props) => {
  return (
    <section className=""> 
        <H3>Projects</H3>
   
      </section>
  )
}

/**
 * 
 *         <ul>
        {cv.projects.map((proj, i) =>
          <li className="mt-3 first:mt-1" key={'proj'+i}>
            <p><span className="font-bold">{proj.title} {proj.client ? " - " + proj.client : ""}</span> - <span className="italic">{proj.period}</span></p>
            <DescriptionView description={proj.description} index={i} />
          </li>)}
          </ul>
 */
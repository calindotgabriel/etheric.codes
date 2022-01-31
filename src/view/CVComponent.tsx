import { Main } from "../template/Main";
import cv from "../data/cv";
import React, { Fragment } from "react";
import { ProjectsView } from "./ProjectsView";
import { ExperienceView } from "./ExperienceView";

const CurriculumVitaeComponent = () => (
  <Main className="pl-10 pt-8 pr-5 lg:text-lg">
    <div className="text-3xl tracking-widest">
      {cv.name}
    </div>
    <div className="grid grid-cols-2 gap-8 mt-2 break-words">
      <div>
        <p>{cv.headline}</p>
        <p>{cv.phoneNr}</p>
        <p>{cv.email}</p>
        {/* <p>website: {cv.website}</p> */}
      </div>
      <div className="">
        <h3 className="uppercase text-xl font-bold">Education</h3>
        <div>
        {cv.education.map((ed, i) => 
          <Fragment key={'ed'+i}>
            <p>{ed.name}, {ed.period}</p>
            <p>{ed.description}</p>
          </Fragment>
        )}
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-8 mt-3">
      <ExperienceView experience={cv.experience}/>
      <ProjectsView projects={cv.projects}/>
    </div>
  </Main>
);

export default CurriculumVitaeComponent;
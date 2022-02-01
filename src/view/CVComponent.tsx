import { Main } from "../template/Main";
import cv from "../data/cv";
import React, { Fragment } from "react";
import { ProjectsView } from "./ProjectsView";
import { ExperienceView } from "./ExperienceView";
import { FaArrowLeft, FaArrowCircleLeft, FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";

const CurriculumVitaeComponent = () => (
  <Main className="lg:pl-10 lg:pt-8 lg:pr-5 lg:text-lg pl-4 pt-3 pr-3">
    <Link to="/">
    <div className="fixed left-3 bottom-5 cursor-pointer text-xl">
      <FaArrowLeft/>
    </div>
    </Link>
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
    <div className="grid grid-cols-2 gap-8 mt-2">
      <ExperienceView experience={cv.experience}/>
      <ProjectsView projects={cv.projects}/>
    </div>
  </Main>
);

export default CurriculumVitaeComponent;

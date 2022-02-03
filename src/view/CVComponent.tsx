import { Main } from "../template/Main";
import cv from "../data/cv";
import React, { Fragment } from "react";
import { ProjectsView } from "./ProjectsView";
import { ExperienceView } from "./ExperienceView";
import { FaArrowLeft, FaArrowCircleLeft, FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { H3 } from "../template/H3";
import { EducationView } from "./EducationView";

const CurriculumVitaeComponent = () => (
  <Main className="pl-5 pt-6 pr-4 md:p-6 md:pt-12 lg:pl-10 lg:pr-5 lg:text-lg">
    <Link to="/">
    <div className="fixed left-3 bottom-5 cursor-pointer text-sm lg:text-md print:hidden">
      <FaArrowLeft/>
    </div>
    </Link>
    <div className="text-3xl lg:text-4xl tracking-widest font-light">
      {cv.name}
    </div>
    <div className="grid grid-cols-2 gap-8 break-words mt-4 md:pt-6 leading-normal">
      <div>
        <p>{cv.headline}</p>
        <p>{cv.phoneNr}</p>
        <p>{cv.email}</p>
        {/* <p>website: {cv.website}</p> */}
      </div>
      <div className="md:pt-2">
        <EducationView education={cv.education}/>        
      </div>
    </div>
    <div className="grid grid-cols-2 gap-8 mt-2">
      <ExperienceView experience={cv.experience}/>
      <ProjectsView projects={cv.projects}/>
    </div>
  </Main>
);

export default CurriculumVitaeComponent;

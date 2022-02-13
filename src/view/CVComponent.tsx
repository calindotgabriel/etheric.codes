import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowCircleLeft,
  FaLongArrowAltLeft,
} from "react-icons/fa";

import cv from "../data/cv";
import { Main } from "../template/Main";
import { ProjectsView } from "./ProjectsView";
import { ExperienceView } from "./ExperienceView";
import { EducationView } from "./EducationView";

type CurriculumVitaeComponentProps = {
}

const CurriculumVitaeComponent = (props: CurriculumVitaeComponentProps) => {
  return (
    <Main className="pl-8 pt-10 pr-4 md:p-6 md:pt-12 lg:pl-10 lg:pr-5 lg:text-lg">
      <Link to="/">
        <div className="fixed left-3 bottom-5 cursor-pointer text-xs md:text-sm print:hidden">
          <FaArrowLeft />
        </div>
      </Link>
      <div id="cv-component">
        <div className="text-3xl lg:text-4xl tracking-widest font-light">
          {cv.name}
        </div>
        <div className="grid grid-cols-2 gap-8 break-words mt-4 md:pt-6 leading-normal">
          <div>
            <p>{cv.headline}</p>
            <p>{cv.phoneNr}</p>
            <p>{cv.personalEmail}</p>
          </div>
          <div className="md:pt-2">
            <EducationView education={cv.education} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-2 lg:mt-8">
          <ExperienceView experience={cv.experience} />
          <ProjectsView projects={cv.projects} />
        </div>
      </div>
    </Main>
  );
}

export default CurriculumVitaeComponent;

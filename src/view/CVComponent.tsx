import { Main } from "../template/Main";
import cv from "../data/cv";
import React, { Fragment } from "react";
import { ExperienceView } from "./ExperienceView";
import { FaArrowLeft, FaArrowCircleLeft, FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";

const CurriculumVitaeComponent = () => (
  <Main className="pl-16 pt-16 pr-5 text-xl">
    <Link to="/">
      <div className="fixed left-3 bottom-5 cursor-pointer text-xl print:hidden" >
        <FaArrowLeft />
      </div>
    </Link>
    <div className="text-3xl tracking-widest mb-10 mt-5">
      {cv.name} {' // software developer'}
    </div>
    <div className="grid md:grid-cols-3 print:grid-cols-3 gap-8 mt-2 break-words max-w-screen-lg	print:max-w-screen-xs">
      <div>
        {/* <p>🪪</p> */}
        {/* <p>{cv.headline}</p> */}
        <p>{cv.phoneNr}</p>
        <p>{cv.email}</p>
        <p>{cv.website}</p>
      </div>
      <div className="">
        <h3 className="uppercase text-xl font-bold">Education</h3>
        <div>
          {cv.education.map((ed, i) =>
            <Fragment key={'ed' + i}>
              <p>{ed.name}, {ed.period}</p>
              <p>{ed.description}</p>
            </Fragment>
          )}
        </div>
      </div>
      <div className="">
        <p>#Spring</p>
        <p>#Java</p>
        <p>#SQL</p>
        <p>#Ruby on Rails</p>
      </div>
    </div>
    <div className="grid gap-8 mt-6 max-w-screen-lg	print:max-w-screen-xs">
      <ExperienceView experience={cv.experience} />
      <p className="mt-4">See full experience at <a className="color-blue text-blue" href={`https://www.${cv.website}`}>LinkedIn</a></p>

    </div>
  </Main>
);

export default CurriculumVitaeComponent;

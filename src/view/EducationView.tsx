import React from "react";
import cv from "../data/cv";
import { H3 } from "../template/H3";
import { DescriptionView } from "./DescriptionView";

type EducationViewProps = {
  education: typeof cv.education
}

export const EducationView: React.FC<EducationViewProps> = (props) => {
  return (
    <div className="leading-normal">
        <H3>Education</H3>
        <ul>
        {cv.education.map((ed, i) => 
        <li className="pt-1 md:pt-2" key={'ed'+i}>
            <p>{ed.name}, {ed.period}</p>
            <p>{ed.description}</p>
        </li>
        )}
        </ul>
    </div>
    )
}

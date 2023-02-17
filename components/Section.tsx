import React from "react";
import { Section as ISection } from "../data/types";
import InputBuilder from "./InputBuilder";

interface IInputBuilder {
  section: ISection;
}
const Section: React.FC<IInputBuilder> = ({ section }) => {
  console.log(section);

  return (
    <div>
      <h2>{section.title}</h2>
      {section.description && <p>{section.description}</p>}
      {section.fields.map((field) => {
        return <InputBuilder field={field} key={field.name} />;
      })}
    </div>
  );
};

export default Section;

import React from "react";
import { Field } from "../data/types";
import Section from "./Section";

interface IInputBuilder {
  field: Field;
}
const InputBuilder: React.FC<IInputBuilder> = ({ field }) => {
  if (field.component === "checkbox") {
    return (
      <div>
        <label>checkbox</label>
        <input type="checkbox"></input>
      </div>
    );
  }
  if (field.component === "text") {
    return (
      <div>
        <label>text</label>
        <input type="text"></input>
      </div>
    );
  }
  if (field.component === "number") {
    return (
      <div>
        <label>number</label>
        <input type="number"></input>
      </div>
    );
  }
  if (field.component === "url") {
    return (
      <div>
        <label>url</label>
        <input type="text"></input>
      </div>
    );
  }
  if (field.component === "select") {
    return (
      <div>
        <label>url</label>
        <input type="select"></input>
      </div>
    );
  }

  if (field.component === "section") {
    return (
      <div>
        <Section section={field} />
      </div>
    );
  }
  return null;
};

export default InputBuilder;

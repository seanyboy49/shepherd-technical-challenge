import React from "react";
import { Field } from "../data/types";
import Section from "./Section";
import TextNumberInput from "./TextInput";

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
  if (
    field.component === "text" ||
    field.component === "number" ||
    field.component === "url"
  ) {
    return <TextNumberInput text={field} />;
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

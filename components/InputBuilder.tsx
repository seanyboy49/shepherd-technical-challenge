import React from "react";
import { Field } from "../data/types";
import CheckboxInput from "./CheckboxInput";
import Section from "./Section";
import SelectInput from "./SelectInput";
import TextNumberInput from "./TextInput";

interface IInputBuilder {
  field: Field;
}
const InputBuilder: React.FC<IInputBuilder> = ({ field }) => {
  if (field.component === "checkbox") {
    return <CheckboxInput checkbox={field} />;
  }
  if (
    field.component === "text" ||
    field.component === "number" ||
    field.component === "url"
  ) {
    return <TextNumberInput text={field} />;
  }

  if (field.component === "select") {
    return <SelectInput select={field} />;
  }

  if (field.component === "section") {
    return <Section section={field} />;
  }
  return null;
};

export default InputBuilder;

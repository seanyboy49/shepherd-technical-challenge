import { TextField, useFormControl } from "@mui/material";
import { Field } from "react-final-form";

import { TextNumberURL } from "../data/types";
import { getValidationObject } from "../utility/validate";

interface ITextInput {
  text: TextNumberURL;
}
const TextInput: React.FC<ITextInput> = ({ text }) => {
  const validations = getValidationObject(text.validate);
  const type = text.component === "number" ? "number" : "text";
  const name = text.name;

  return (
    <Field name={text.name}>
      {({ input, meta }) => {
        return (
          <TextField
            {...input}
            type={type}
            label={text.label}
            sx={{ width: "100%" }}
          />
        );
      }}
    </Field>
  );
};

export default TextInput;

import { TextField } from "@mui/material";
import { Field } from "react-final-form";

import { TextNumberURL } from "../data/types";
import { getValidators } from "../utility/validate";

interface ITextInput {
  text: TextNumberURL;
}
const TextInput: React.FC<ITextInput> = ({ text }) => {
  const type = text.component === "number" ? "number" : "text";

  const validators = getValidators(text.validate);

  return (
    <Field name={text.name} validate={validators}>
      {({ input, meta, ...rest }) => {
        const hasError = meta.error && meta.touched;

        return (
          <TextField
            {...input}
            error={hasError}
            type={type}
            label={text.label}
            sx={{ width: "100%" }}
            helperText={meta.error}
          />
        );
      }}
    </Field>
  );
};

export default TextInput;

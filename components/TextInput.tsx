import { TextField, useFormControl } from "@mui/material";
import { useFormContext } from "react-hook-form";

import { TextNumberURL } from "../data/types";

interface ITextInput {
  text: TextNumberURL;
}
const TextInput: React.FC<ITextInput> = ({ text }) => {
  const { register } = useFormContext();

  const validations = text.validate?.reduce((a, b) => {
    if (b.type === "required") {
      return {
        ...a,
        required: true,
      };
    }
    if (b.type === "min") {
      return {
        ...a,
        min: b.value,
      };
    }
  }, {});

  const type = text.component === "text" ? "text" : "number";

  return (
    <TextField
      type={type}
      {...register(text.name, validations)}
      label={text.label}
      sx={{ width: "100%" }}
    />
  );
};

export default TextInput;

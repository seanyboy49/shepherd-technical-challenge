import { TextField, useFormControl } from "@mui/material";
import { useFormContext } from "react-hook-form";

import { TextNumberURL } from "../data/types";

interface ITextInput {
  text: TextNumberURL;
}
const TextNumberInput: React.FC<ITextInput> = ({ text }) => {
  const { register } = useFormContext();

  return (
    <TextField
      {...register(text.name)}
      label={text.label}
      sx={{ width: "100%" }}
    />
  );
};

export default TextNumberInput;

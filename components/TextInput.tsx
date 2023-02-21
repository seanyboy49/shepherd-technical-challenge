import { TextField, useFormControl } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import { TextNumberURL } from "../data/types";
import { getValidationObject } from "../utility/validate";

interface ITextInput {
  text: TextNumberURL;
}
const TextInput: React.FC<ITextInput> = ({ text }) => {
  const { register, formState, control } = useFormContext();

  const validations = getValidationObject(text.validate);
  const type = text.component === "number" ? "number" : "text";
  const name = text.name;

  const isValid = formState.errors[name];
  console.log("isValid", isValid);
  // console.log("validations", validations);
  return (
    <TextField
      {...register(text.name, validations)}
      error={formState.errors[text.name] ? true : false}
      type={type}
      label={text.label}
      sx={{ width: "100%" }}
    />
    // <Controller
    //   name={name}
    //   control={control}
    //   rules={validations}
    //   render={({ field }) => <TextField {...field} sx={{ width: "100%" }} />}
    // />
  );
};

export default TextInput;

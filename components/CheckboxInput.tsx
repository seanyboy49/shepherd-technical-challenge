import { FormControlLabel, Checkbox as MUICheckbox } from "@mui/material";
import { useFormContext } from "react-hook-form";

import { Checkbox } from "../data/types";

interface ICheckboxInput {
  checkbox: Checkbox;
}
const CheckboxInput: React.FC<ICheckboxInput> = ({ checkbox }) => {
  const { register } = useFormContext();
  return (
    <FormControlLabel
      label={checkbox.label}
      control={<MUICheckbox {...register(checkbox.name)} />}
      sx={{ width: "100%" }}
    />
  );
};

export default CheckboxInput;

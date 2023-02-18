import { FormControlLabel, Checkbox as MUICheckbox } from "@mui/material";

import { Checkbox } from "../data/types";

interface ICheckboxInput {
  checkbox: Checkbox;
}
const CheckboxInput: React.FC<ICheckboxInput> = ({ checkbox }) => {
  return <FormControlLabel label={checkbox.label} control={<MUICheckbox />} />;
};

export default CheckboxInput;

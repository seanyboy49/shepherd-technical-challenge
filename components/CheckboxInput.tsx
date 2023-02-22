import { FormControlLabel, Checkbox as MUICheckbox } from "@mui/material";
import { Field } from "react-final-form";

import { Checkbox } from "../data/types";
import { getValidators } from "../utility/validate";

interface ICheckboxInput {
  checkbox: Checkbox;
}
const CheckboxInput: React.FC<ICheckboxInput> = ({ checkbox }) => {
  return (
    <FormControlLabel
      label={checkbox.label}
      sx={{ width: "100%" }}
      control={
        <Field type="checkbox" name={checkbox.name}>
          {({ input, meta }) => {
            return <MUICheckbox {...input} />;
          }}
        </Field>
      }
    />
  );
};

export default CheckboxInput;

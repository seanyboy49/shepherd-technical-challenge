import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  FormHelperText,
} from "@mui/material";
import { Field } from "react-final-form";

import { Select } from "../data/types";
import { getValidators } from "../utility/validate";

interface ISelectInput {
  select: Select;
}
const SelectInput: React.FC<ISelectInput> = ({ select }) => {
  const validators = getValidators(select.validate);

  return (
    <Box>
      <Field name={select.name} validate={validators}>
        {({ input, meta }) => {
          const hasError = meta.error && meta.touched;

          return (
            <FormControl fullWidth>
              <InputLabel>{select.label}</InputLabel>
              <MuiSelect
                {...input}
                color="secondary"
                error={hasError}
                label={select.label}
                sx={{ width: "100%" }}
              >
                {select.options.map((option) => {
                  return (
                    <MenuItem value={option} key={option}>
                      {option}
                    </MenuItem>
                  );
                })}
              </MuiSelect>
              {<FormHelperText error={hasError}>{meta.error}</FormHelperText>}
            </FormControl>
          );
        }}
      </Field>
    </Box>
  );
};

export default SelectInput;

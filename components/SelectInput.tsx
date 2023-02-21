import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

import { Select } from "../data/types";

interface ISelectInput {
  select: Select;
}
const SelectInput: React.FC<ISelectInput> = ({ select }) => {
  const { register } = useFormContext();
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>{select.label}</InputLabel>
        <MuiSelect
          {...register(select.name)}
          label={select.label}
          sx={{ width: "100%" }}
        >
          {select.options.map((option) => {
            return <MenuItem value={option}>{option}</MenuItem>;
          })}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};

export default SelectInput;

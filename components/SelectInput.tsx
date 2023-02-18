import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import { Select } from "../data/types";

interface ISelectInput {
  select: Select;
}
const SelectInput: React.FC<ISelectInput> = ({ select }) => {
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>{select.label}</InputLabel>
        <MuiSelect label={select.label} sx={{ width: "100%" }}>
          {select.options.map((option) => {
            return <MenuItem value={option}>{option}</MenuItem>;
          })}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};

export default SelectInput;

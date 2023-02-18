import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  TextField,
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
        <MuiSelect label={select.label}>
          {select.options.map((option) => {
            return <MenuItem value={option}>{option}</MenuItem>;
          })}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};

export default SelectInput;

import { TextField } from "@mui/material";
import { TextNumberURL } from "../data/types";

interface ITextInput {
  text: TextNumberURL;
}
const TextNumberInput: React.FC<ITextInput> = ({ text }) => {
  return <TextField label={text.label} sx={{ width: "100%" }} />;
};

export default TextNumberInput;

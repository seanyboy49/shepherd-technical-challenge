import { TextField } from "@mui/material";
import { TextNumberURL as ITextNumberURL } from "../data/types";

interface ITextInput {
  text: ITextNumberURL;
}
const TextNumberInput: React.FC<ITextInput> = ({ text }) => {
  return <TextField label={text.label} />;
};

export default TextNumberInput;

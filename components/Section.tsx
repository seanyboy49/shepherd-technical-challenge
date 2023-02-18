import { Box, Typography } from "@mui/material";
import React from "react";
import { Section as ISection } from "../data/types";
import InputBuilder from "./InputBuilder";

interface IInputBuilder {
  section: ISection;
}
const Section: React.FC<IInputBuilder> = ({ section }) => {
  return (
    <Box sx={{ margin: "1rem" }}>
      <Typography variant="h5">{section.title}</Typography>
      {section.description && (
        <Typography variant="h6">{section.description}</Typography>
      )}
      <Box display={"flex"} flexDirection="column">
        {section.fields.map((field) => {
          return (
            <Box key={field.name} margin="0.5rem">
              <InputBuilder field={field} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Section;

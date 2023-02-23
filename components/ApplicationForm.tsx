import { GetStaticProps } from "next";
import React, { useMemo } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Form } from "react-final-form";

import InputBuilder from "./InputBuilder";
import { ApplicationTemplate } from "../data/types";
import Layout from "./Layout";

interface IApplicationTemplate {
  applicationTemplate: ApplicationTemplate;
  handleSubmit: (data: any) => Promise<void>;
  initialValues?: any;
}
const ApplicationForm: React.FC<IApplicationTemplate> = ({
  applicationTemplate,
  handleSubmit,
  initialValues,
}) => {
  return (
    <Layout>
      <Form
        initialValues={initialValues}
        onSubmit={handleSubmit}
        render={({ handleSubmit, values, valid, ...rest }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Typography variant="h4">Shepherd Application Builder</Typography>
              {applicationTemplate.fields.map((field) => {
                return (
                  <Box key={field.name} margin="0.5rem">
                    <InputBuilder field={field} />
                  </Box>
                );
              })}
              <Button disabled={!valid} onClick={handleSubmit}>
                Submit
              </Button>
            </form>
          );
        }}
      />
    </Layout>
  );
};

export default ApplicationForm;

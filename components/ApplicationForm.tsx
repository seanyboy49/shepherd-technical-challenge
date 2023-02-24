import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Form } from "react-final-form";

import InputBuilder from "./InputBuilder";
import { ApplicationTemplate } from "../data/types";
import Layout from "./Layout";

interface IApplicationTemplate {
  applicationTemplate: ApplicationTemplate;
  handleSubmit: (data: any) => Promise<void>;
  submissionError?: string;
  initialValues?: any;
}
const ApplicationForm: React.FC<IApplicationTemplate> = ({
  applicationTemplate,
  handleSubmit,
  initialValues,
  submissionError,
}) => {
  return (
    <Layout>
      <Box sx={{ padding: "1rem" }}>
        <Form
          initialValues={initialValues}
          onSubmit={handleSubmit}
          render={({ handleSubmit, values, valid, ...rest }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Typography variant="h4">
                  Shepherd Application Builder
                </Typography>
                {applicationTemplate.fields.map((field) => {
                  return (
                    <Box key={field.name} margin="0.5rem">
                      <InputBuilder field={field} />
                    </Box>
                  );
                })}
                <Button
                  sx={{ mt: "1rem" }}
                  variant="contained"
                  size="large"
                  disabled={!valid}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </form>
            );
          }}
        />
        {{ submissionError } && (
          <Typography variant="h4" color="red">
            {submissionError}
          </Typography>
        )}
      </Box>
    </Layout>
  );
};

export default ApplicationForm;

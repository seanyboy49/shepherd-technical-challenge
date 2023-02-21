import { GetStaticProps } from "next";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import InputBuilder from "../../components/InputBuilder";
import applications from "../../data/applicationTemplates";
import { ApplicationTemplate } from "../../data/types";
import Layout from "../../components/Layout";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: "Company application" } },
      { params: { type: "Employee application" } },
      { params: { type: "Auto application" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const applicationTemplate = applications.find(
    (application) => application.name === params.type
  );
  return {
    props: { applicationTemplate },
  };
};

interface IApplicationTemplate {
  applicationTemplate: ApplicationTemplate;
}
const ApplicationTemplate: React.FC<IApplicationTemplate> = ({
  applicationTemplate,
}) => {
  const methods = useForm();
  console.log(methods.formState);

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <Layout>
      <FormProvider {...methods}>
        <form>
          <Typography variant="h4">Shepherd Application Builder</Typography>
          {applicationTemplate.fields.map((field) => {
            return (
              <Box key={field.name} margin="0.5rem">
                <InputBuilder field={field} />
              </Box>
            );
          })}
          <Button onClick={methods.handleSubmit(onSubmit)}>Submit</Button>
        </form>
      </FormProvider>
    </Layout>
  );
};

export default ApplicationTemplate;

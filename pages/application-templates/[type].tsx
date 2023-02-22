import { GetStaticProps } from "next";
import React, { useMemo } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Form } from "react-final-form";

import InputBuilder from "../../components/InputBuilder";
import applications from "../../data/applicationTemplates";
import { ApplicationTemplate } from "../../data/types";
import Layout from "../../components/Layout";
import { CompanyApplication, CompanyApplicationDto } from "../../data/dto";
import { useRouter } from "next/router";

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
  const { query } = useRouter();

  const onSubmit = useMemo(() => {
    async function onCompanyApplicationSubmit(data: CompanyApplication) {
      const dto = new CompanyApplicationDto(data);
      try {
        const response = await fetch(`/api/company-application`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dto),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("data", data);
        }
      } catch (error) {
        console.log("error", error);
      }
    }

    if (query.type === "Company application") return onCompanyApplicationSubmit;
  }, [query.type]);

  return (
    <Layout>
      <Form
        onSubmit={onSubmit}
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

export default ApplicationTemplate;

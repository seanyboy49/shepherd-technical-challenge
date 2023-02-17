import { GetStaticProps } from "next";
import React from "react";
import InputBuilder from "../../components/InputBuilder";

import Layout from "../../components/Layout";
import applications from "../../data/applicationTemplates";
import { ApplicationTemplate } from "../../data/types";

export async function getStaticPaths() {
  return {
    paths: [{ params: { type: "Company application" } }],
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
  return (
    <Layout>
      <div>
        <h2>Hello</h2>
        {applicationTemplate.fields.map((field) => {
          return <InputBuilder field={field} key={field.name} />;
        })}
      </div>
    </Layout>
  );
};

export default ApplicationTemplate;

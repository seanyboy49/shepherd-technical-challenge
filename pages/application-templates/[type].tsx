import { GetStaticProps } from "next";
import React from "react";

import Layout from "../../components/Layout";
import applications from "../../data/applicationTemplates";

export async function getStaticPaths() {
  return {
    paths: [{ params: { type: "Company application" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const applicationConfig = applications.find(
    (application) => application.name === params.type
  );
  return {
    props: { applicationConfig },
  };
};

const ApplicationTemplate = ({ applicationConfig }) => {
  console.log(applicationConfig);
  return (
    <Layout>
      <div>
        <h2>Hello</h2>
      </div>
    </Layout>
  );
};

export default ApplicationTemplate;

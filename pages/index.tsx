import React from "react";
import { GetStaticProps } from "next";
import NextLink from "next/link";
import { Box, Typography } from "@mui/material";

import Layout from "../components/Layout";
import applicationTemplates from "../data/applicationTemplates";
import { ApplicationTemplate, URLs } from "../data/types";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { applicationTemplates },
  };
};

interface IHome {
  applicationTemplates: ApplicationTemplate[];
}

const Home: React.FC<IHome> = ({ applicationTemplates }) => {
  return (
    <Layout>
      <>
        <Typography variant="h3">Welcome to Shepherd</Typography>
        <Typography variant="h6">
          Select one of the options below to create a new application
        </Typography>

        <Box>
          {applicationTemplates.map((applicationTemplate) => {
            return (
              <div key={applicationTemplate.name}>
                <NextLink href={`${URLs[applicationTemplate.name]}/new`}>
                  {applicationTemplate.name}
                </NextLink>
              </div>
            );
          })}
        </Box>
      </>
    </Layout>
  );
};

export default Home;

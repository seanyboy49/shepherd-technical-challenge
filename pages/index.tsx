import React from "react";
import { GetStaticProps } from "next";
import NextLink from "next/link";
import { Box, Typography, List, ListItem, ListItemButton } from "@mui/material";

import { StyledAnchor } from "../components/Styled";

import Layout from "../components/Layout";
import applicationTemplates from "../data/applicationTemplates";
import { ApplicationTemplate, ApplicationTypeUrl } from "../data/types";

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
          <List>
            {applicationTemplates.map((applicationTemplate) => {
              return (
                <ListItem key={applicationTemplate.name}>
                  <ListItemButton>
                    <NextLink
                      href={`/${
                        ApplicationTypeUrl[applicationTemplate.name]
                      }/new`}
                    >
                      <StyledAnchor>{applicationTemplate.name}</StyledAnchor>
                    </NextLink>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </>
    </Layout>
  );
};

export default Home;

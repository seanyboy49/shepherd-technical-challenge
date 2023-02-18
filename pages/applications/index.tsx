import { GetServerSideProps, GetStaticProps } from "next";
import React from "react";
import Link from "next/link";

import { Box, Typography, Button } from "@mui/material";

import InputBuilder from "../../components/InputBuilder";
import applications from "../../data/applicationTemplates";
import { ApplicationTemplate } from "../../data/types";
import Layout from "../../components/Layout";
import prisma from "../../lib/prisma";
import { Company } from "@prisma/client";

export const getServerSideProps: GetServerSideProps = async () => {
  // TODO - fetch auto and employee as well
  const companies = await prisma.company.findMany();

  return {
    props: { applications: [...companies] },
  };
};

interface IApplicationTemplate {
  applications: Company[];
}
const ApplicationTemplates: React.FC<IApplicationTemplate> = ({
  applications,
}) => {
  return (
    <Layout>
      {applications.map((application) => {
        return (
          <Link href={`/applications/${application.id}`} key={application.id}>
            <a>{application.id}</a>
          </Link>
        );
      })}
    </Layout>
  );
};

export default ApplicationTemplates;

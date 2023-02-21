import { GetServerSideProps } from "next";
import React from "react";
import Link from "next/link";

import Layout from "../../components/Layout";
import prisma from "../../lib/prisma";
import { Auto, Company, Employee } from "@prisma/client";

export const getServerSideProps: GetServerSideProps = async () => {
  const companies = await prisma.company.findMany();
  const autos = await prisma.auto.findMany();
  const employees = await prisma.employee.findMany();

  return {
    props: { applications: [...companies, ...autos, ...employees] },
  };
};

interface IApplicationTemplate {
  applications: Array<Company | Auto | Employee>;
}
const ApplicationTemplates: React.FC<IApplicationTemplate> = ({
  applications,
}) => {
  return (
    <Layout>
      <ul>
        {applications.map((application) => {
          return (
            <li key={application.id}>
              <Link href={`/applications/${application.id}`}>
                <a>{application.id}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default ApplicationTemplates;

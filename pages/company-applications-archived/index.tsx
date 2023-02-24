import { GetServerSideProps } from "next";
import React from "react";
import Link from "next/link";
import { Company } from "@prisma/client";

import Layout from "../../components/Layout";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async () => {
  const companies = await prisma.company.findMany();

  return {
    props: { companies },
  };
};

interface ICompanyApplications {
  companies: Company[];
}
const CompanyApplications: React.FC<ICompanyApplications> = ({ companies }) => {
  return (
    <Layout>
      <ul>
        {companies.map((company) => {
          return (
            <li key={company.id}>
              <Link href={`/company-applications/${company.id}`}>
                <a>{company.company_name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default CompanyApplications;

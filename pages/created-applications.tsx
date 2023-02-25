import { List } from "@mui/material";
import { Auto, Company, Employee } from "@prisma/client";
import { GetServerSideProps } from "next";
import ApplicationsList from "../components/ApplicationsList";

import Layout from "../components/Layout";
import { ApplicationTypeUrl } from "../data/types";
import prisma from "../lib/prisma";

export const getServerSideProps: GetServerSideProps = async () => {
  const companies = await prisma.company.findMany();
  const autos = await prisma.auto.findMany();
  const employees = await prisma.employee.findMany();

  return {
    props: { companies, autos, employees },
  };
};

interface ICreatedApplications {
  companies: Array<Company>;
  autos: Array<Auto>;
  employees: Array<Employee>;
}
const CreatedApplications: React.FC<ICreatedApplications> = ({
  companies,
  autos,
  employees,
}) => {
  return (
    <Layout>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ApplicationsList
          applications={companies}
          applicationType={ApplicationTypeUrl["Company application"]}
        />
        <ApplicationsList
          applications={autos}
          applicationType={ApplicationTypeUrl["Auto application"]}
        />
        <ApplicationsList
          applications={employees}
          applicationType={ApplicationTypeUrl["Employee application"]}
        />
      </List>
    </Layout>
  );
};

export default CreatedApplications;

import { Auto, Company, Employee } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

import ApplicationForm from "../../components/ApplicationForm";
import prisma from "../../lib/prisma";
import applications from "../../data/applicationTemplates";
import { ApplicationTemplate, ApplicationTypeUrl } from "../../data/types";
import { CompanyApplication } from "../../data/dto";
import { getApplicationBody } from "../../utility/dto";
import Layout from "../../components/Layout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const applicationType = context.params["application-type"];

  const applicationTemplate = applications.find(
    (application) => ApplicationTypeUrl[application.name] === applicationType
  );

  let entity: Company | Auto | Employee;

  if (applicationType === ApplicationTypeUrl["Company application"]) {
    entity = await prisma.company.findUnique({
      where: {
        id: context.params?.id as string,
      },
    });
  }
  if (applicationType === ApplicationTypeUrl["Auto application"]) {
    entity = await prisma.auto.findUnique({
      where: {
        id: context.params?.id as string,
      },
    });
  }
  if (applicationType === ApplicationTypeUrl["Employee application"]) {
    entity = await prisma.employee.findUnique({
      where: {
        id: context.params?.id as string,
      },
    });
  }

  return {
    props: { entity, applicationTemplate, applicationType },
  };
};

interface ICompanyApplication {
  entity: Company | Auto | Employee;
  applicationTemplate: ApplicationTemplate;
  applicationType: ApplicationTypeUrl;
}

const ApplicationDetail: React.FC<ICompanyApplication> = ({
  entity,
  applicationTemplate,
  applicationType,
}) => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>(undefined);

  async function handleSubmit(data: CompanyApplication) {
    const body = getApplicationBody(applicationType, data);

    try {
      const response = await fetch(`/api/${applicationType}/${entity.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const err = await response.json();

        throw new Error(
          `${response.status}: ${err.message || response.statusText}`
        );
      }

      router.reload();
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <Layout>
      <Typography variant="h4">Edit this {applicationTemplate.name}</Typography>
      <ApplicationForm
        applicationTemplate={applicationTemplate}
        handleSubmit={handleSubmit}
        initialValues={entity}
        submissionError={error}
      />
    </Layout>
  );
};

export default ApplicationDetail;

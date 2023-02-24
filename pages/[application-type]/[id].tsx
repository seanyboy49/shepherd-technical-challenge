import { Auto, Company, Employee } from "@prisma/client";
import { GetServerSideProps } from "next";
import ApplicationForm from "../../components/ApplicationForm";
import prisma from "../../lib/prisma";
import applications from "../../data/applicationTemplates";
import { ApplicationTemplate, ApplicationTypeUrl } from "../../data/types";
import { useRouter } from "next/router";
import { CompanyApplication, CompanyApplicationDto } from "../../data/dto";
import { useState } from "react";
import { getDTOFromApplicationType } from "../../utility/dto";

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
    entity = await prisma.company.findUnique({
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
  const [error, setError] = useState();

  async function handleSubmit(data: CompanyApplication) {
    const applicationDTO = getDTOFromApplicationType(applicationType);
    const body = new applicationDTO(data);

    try {
      const response = await fetch(`/api/${applicationType}/${entity.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      router.reload();
    } catch (error) {
      // todo error state
      console.log("error", error);
      setError(error.message);
    }
  }
  return (
    <>
      <ApplicationForm
        applicationTemplate={applicationTemplate}
        handleSubmit={handleSubmit}
        initialValues={entity}
      />
      {error}
    </>
  );
};

export default ApplicationDetail;

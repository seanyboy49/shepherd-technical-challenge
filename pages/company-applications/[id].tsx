import { Company } from "@prisma/client";
import { GetServerSideProps } from "next";
import ApplicationForm from "../../components/ApplicationForm";
import prisma from "../../lib/prisma";
import applications from "../../data/applicationTemplates";
import { ApplicationTemplate } from "../../data/types";
import { useRouter } from "next/router";
import { CompanyApplication, CompanyApplicationDto } from "../../data/dto";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const applicationTemplate = applications.find(
    (application) => application.name === "Company application"
  );

  const company = await prisma.company.findUnique({
    where: {
      id: context.params?.id as string,
    },
  });

  return {
    props: { company, applicationTemplate },
  };
};

interface ICompanyApplication {
  company: Company;
  applicationTemplate: ApplicationTemplate;
}

const CompanyApplicationDetail: React.FC<ICompanyApplication> = ({
  company,
  applicationTemplate,
}) => {
  const router = useRouter();
  const [error, setError] = useState();

  async function handleSubmit(data: CompanyApplication) {
    const dto = new CompanyApplicationDto(data);
    try {
      const response = await fetch(`/api/company-application/${company.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      await router.push(`${data.id}`);
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
        initialValues={company}
      />
      {error}
    </>
  );
};

export default CompanyApplicationDetail;

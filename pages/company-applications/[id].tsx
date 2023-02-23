import { Company } from "@prisma/client";
import { GetServerSideProps } from "next";
import ApplicationForm from "../../components/ApplicationForm";
import prisma from "../../lib/prisma";
import applications from "../../data/applicationTemplates";
import { ApplicationTemplate } from "../../data/types";
import { useRouter } from "next/router";
import { CompanyApplication, CompanyApplicationDto } from "../../data/dto";

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
  console.log("company", company);
  const router = useRouter();

  async function handleSubmit(data: CompanyApplication) {
    const dto = new CompanyApplicationDto({ id: company.id, ...data });
    try {
      const response = await fetch(`/api/company-application`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      });

      if (response.ok) {
        const data = await response.json();

        await router.push(`${data.id}`);
      }
    } catch (error) {
      // todo error state
      console.log("error", error);
    }
  }
  return (
    <ApplicationForm
      applicationTemplate={applicationTemplate}
      handleSubmit={handleSubmit}
      initialValues={company}
    />
  );
};

export default CompanyApplicationDetail;

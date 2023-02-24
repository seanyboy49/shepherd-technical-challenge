import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import ApplicationForm from "../../components/ApplicationForm";

import applications from "../../data/applicationTemplates";
import { CompanyApplication, CompanyApplicationDto } from "../../data/dto";
import { ApplicationTemplate, URLs } from "../../data/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const applicationType = context.params["application-type"];

  const applicationTemplate = applications.find(
    (application) => URLs[application.name] === applicationType
  );

  return {
    props: { applicationTemplate, applicationType },
  };
};

interface INewApplication {
  applicationTemplate: ApplicationTemplate;
  applicationType: URLs;
}

const NewApplication = ({ applicationTemplate, applicationType }) => {
  console.log("applicationType", applicationType);
  const router = useRouter();
  async function handleSubmit(data: CompanyApplication) {
    const dto = new CompanyApplicationDto(data);
    try {
      const response = await fetch(`/api/company-application`, {
        method: "POST",
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
    />
  );
};

export default NewApplication;

import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import ApplicationForm from "../../components/ApplicationForm";

import applications from "../../data/applicationTemplates";
import { CompanyApplication, CompanyApplicationDto } from "../../data/dto";
import { ApplicationTemplate, ApplicationTypeUrl } from "../../data/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const applicationType = context.params["application-type"];

  const applicationTemplate = applications.find(
    (application) => ApplicationTypeUrl[application.name] === applicationType
  );

  return {
    props: { applicationTemplate, applicationType },
  };
};

function getDTOFromApplicationType(applicationType: ApplicationTypeUrl) {
  if (applicationType === ApplicationTypeUrl["Company application"])
    return CompanyApplicationDto;
}
interface INewApplication {
  applicationTemplate: ApplicationTemplate;
  applicationType: ApplicationTypeUrl;
}

const NewApplication: React.FC<INewApplication> = ({
  applicationTemplate,
  applicationType,
}) => {
  const router = useRouter();

  async function handleSubmit(data: CompanyApplication) {
    const applicationDTO = getDTOFromApplicationType(applicationType);
    const body = new applicationDTO(data);

    try {
      const response = await fetch(`/api/${applicationType}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();

        await router.push(`/${applicationType}/${data.id}`);
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

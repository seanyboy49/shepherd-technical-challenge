import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import ApplicationForm from "../../components/ApplicationForm";
import applications from "../../data/applicationTemplates";
import { ApplicationType } from "../../data/dto";
import { ApplicationTemplate, ApplicationTypeUrl } from "../../data/types";
import { getApplicationBody } from "../../utility/dto";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const applicationType = context.params["application-type"];

  const applicationTemplate = applications.find(
    (application) => ApplicationTypeUrl[application.name] === applicationType
  );

  return {
    props: { applicationTemplate, applicationType },
  };
};

interface INewApplication {
  applicationTemplate: ApplicationTemplate;
  applicationType: ApplicationTypeUrl;
}

const NewApplication: React.FC<INewApplication> = ({
  applicationTemplate,
  applicationType,
}) => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>(undefined);

  async function handleSubmit(data: ApplicationType) {
    const body = getApplicationBody(applicationType, data);

    try {
      const response = await fetch(`/api/${applicationType}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      await router.push(`/${applicationType}/${data.id}`);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <ApplicationForm
      applicationTemplate={applicationTemplate}
      handleSubmit={handleSubmit}
      submissionError={error}
    />
  );
};

export default NewApplication;

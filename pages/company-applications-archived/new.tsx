import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import ApplicationForm from "../../components/ApplicationForm";

import applications from "../../data/applicationTemplates";
import { CompanyApplication, CompanyApplicationDto } from "../../data/dto";

export const getServerSideProps: GetServerSideProps = async () => {
  const applicationTemplate = applications.find(
    (application) => application.name === "Company application"
  );
  return {
    props: { applicationTemplate },
  };
};

const NewCompanyApplication = ({ applicationTemplate }) => {
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

export default NewCompanyApplication;

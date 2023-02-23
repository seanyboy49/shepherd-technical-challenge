import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import applicationTemplates from "../data/applicationTemplates";
import { ApplicationTemplate } from "../data/types";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { applicationTemplates },
  };
};

interface IHome {
  applicationTemplates: ApplicationTemplate[];
}

enum URLs {
  "Company application" = "company-applications",
  "Employee application" = "employee-applications",
  "Auto application" = "auto-applications",
}

const Home: React.FC<IHome> = ({ applicationTemplates }) => {
  console.log("applicationTemplates", applicationTemplates);
  return (
    <Layout>
      <div className="page">
        <h1>Shepherd</h1>
        <main>
          {applicationTemplates.map((applicationTemplate) => {
            return (
              <div key={applicationTemplate.name}>
                <Link href={`${URLs[applicationTemplate.name]}/new`}>
                  {applicationTemplate.name}
                </Link>
              </div>
            );
          })}
        </main>
      </div>
    </Layout>
  );
};

export default Home;

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

const Home: React.FC<IHome> = ({ applicationTemplates }) => {
  return (
    <Layout>
      <div className="page">
        <h1>Shepherd</h1>
        <main>
          {applicationTemplates.map((applicationTemplate) => {
            return (
              <div key={applicationTemplate.name}>
                <Link
                  href={`application-templates/${applicationTemplate.name}`}
                >
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

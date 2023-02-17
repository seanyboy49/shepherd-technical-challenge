import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import applications from "../data/applications";
import { Application } from "../data/types";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { applications },
  };
};

interface IHome {
  applications: Application[];
}

const Home: React.FC<IHome> = ({ applications }) => {
  return (
    <Layout>
      <div className="page">
        <h1>Shepherd</h1>
        <main>
          {applications.map((application) => {
            return (
              <div key={application.name}>
                <Link href={`applications/${application.name}`}>
                  {application.name}
                </Link>
              </div>
            );
          })}
          {/* {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))} */}
        </main>
      </div>
    </Layout>
  );
};

export default Home;

import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import applications from "../data/applications";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { applications },
  };
};

type Props = {
  feed: PostProps[];
};

const Home: React.FC<Props> = (props) => {
  console.log("props", props);
  return (
    <Layout>
      <div className="page">
        <h1>Shepherd</h1>
        <main>
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

import React from 'react';
import Gallery from '../components/Gallery';
import Intro from '../components/Intro';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <Gallery />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

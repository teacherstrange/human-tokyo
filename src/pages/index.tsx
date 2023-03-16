import type { HeadFC } from 'gatsby';
import React from 'react';
import Gallery from '../components/Gallery';
import Intro from '../components/Intro';
import Layout from '../components/Layout';
import Section from '../components/Section';

const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <Gallery />
      <Section step={1} />
      <Section step={2} />
      <Section step={3} />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Human Tokyo</title>;

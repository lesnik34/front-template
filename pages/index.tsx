import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { GetStaticProps } from "next";

import { exampleOperation } from "@store/operations/example";
import ExampleComponent from "@components/example";
import Layout from "@components/global/layout";

interface HomeI {
  locale: string;
}

const Home: React.FC<HomeI> = ({ locale }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exampleOperation());
  }, []);

  return (
    <Layout language={locale}>
      <ExampleComponent />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => ({
  props: { locale: context.locale },
});

export default Home;

import React from "react";
import {Layout} from "../layouts";
import {About, Benefits, MainScreen, Work} from "../../components/main";
import {Feedback} from "../../components/shared";
import Head from "next/head";

const IndexPage = () => {
  return (
      <>
        <Head>
          <title>Honey - Dating solutions</title>
        </Head>
        <Layout footerRed={false}>
          <MainScreen />
          <About />
          <Work />
          <Benefits />
          <Feedback />
        </Layout>
      </>
  )
}

export default IndexPage;
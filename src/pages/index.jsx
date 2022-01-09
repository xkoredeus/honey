import React from "react";
import {Layout} from "../layouts/Layout";
import {About, Benefits, MainScreen, Work} from "../../components/main";
import {Feedback} from "../../components/shared";

const IndexPage = () => {
  return (
      <Layout>
        <MainScreen />
        <About />
        <Work />
        <Benefits />
        <Feedback />
      </Layout>
  )
}

export default IndexPage;
import React from "react";
import {Layout} from "../layouts";
import {Feedback} from "../../components/shared";
import {Offer, Vacancy} from "../../components/careers";
import Head from "next/head";

const CareersPage = () => {
  return (
      <>
        <Head>
          <title>Join our great team - Honey</title>
        </Head>
        <Layout footerRed>
          <Offer />
          <Vacancy />
          <Feedback backgroundDark/>
        </Layout>
      </>
  )
}

export default CareersPage;
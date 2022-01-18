import React from "react";
import {Layout} from "../layouts";
import {Feedback} from "../../components/shared";
import {Offer, Team} from "../../components/team";
import Head from "next/head";

const TeamPage = () => {
  return (
      <>
        <Head>
          <title>Our team - Honey</title>
        </Head>
        <Layout footerRed>
          <Offer />
          <Team />
          <Feedback backgroundDark/>
        </Layout>
      </>
  )
}

export default TeamPage;
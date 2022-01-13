import React from "react";
import {Layout} from "../layouts";
import {Feedback} from "../../components/shared";
import {Offer, Team} from "../../components/team";

const TeamPage = () => {
  return (
      <Layout footerRed>
        <Offer />
        <Team />
        <Feedback backgroundDark/>
      </Layout>
  )
}

export default TeamPage;
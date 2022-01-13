import React from "react";
import {Layout} from "../layouts";
import {Feedback} from "../../components/shared";
import {Offer, Vacancy} from "../../components/careers";

const CareersPage = () => {
  return (
      <Layout footerRed>
        <Offer />
        <Vacancy />
        <Feedback backgroundDark/>
      </Layout>
  )
}

export default CareersPage;
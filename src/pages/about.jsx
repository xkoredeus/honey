import React from "react";
import {Layout} from "../layouts";
import {Feedback} from "../../components/shared";
import {AboutSection, Offer} from "../../components/about";
import {AboutUsStroked1, AboutUsStroked2, AboutUsStroked3, AboutUsStroked4, AboutUsStroked5} from "../../components/shared/Svg";
import Head from "next/head";

const ContactsPage = () => {
  return (
      <>
        <Head>
          <title>What we do - Honey</title>
        </Head>
        <Layout>
          <Offer />
          <AboutSection
              stroked={<AboutUsStroked1 />}
              title={'We make dating business tasks'}
              text={'Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.'}
              imageSrc={'/img/about/aboutPicture1.png'}
          />
          <AboutSection
              stroked={<AboutUsStroked2 />}
              title={'We make apps for real and fake dates'}
              text={'Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.'}
              imageSrc={'/img/about/aboutPicture2.png'}
              rtl={true}
          />
          <AboutSection
              stroked={<AboutUsStroked3 />}
              title={'We make landings and templates'}
              text={'Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.'}
              imageSrc={'/img/about/aboutPicture3.png'}
          />
          <AboutSection
              stroked={<AboutUsStroked4 />}
              title={'We make mail inboxes and domains'}
              text={'Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.'}
              imageSrc={'/img/about/aboutPicture4.png'}
              rtl={true}
          />
          <AboutSection
              stroked={<AboutUsStroked5 />}
              title={'We know your business needs'}
              text={'Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.'}
              imageSrc={'/img/about/aboutPicture5.png'}
          />
          <Feedback backgroundDark={true} />
        </Layout>
      </>
  )
}

export default ContactsPage;
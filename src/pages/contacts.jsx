import React from "react";
import {Layout} from "../layouts";
import {Feedback} from "../../components/shared";
import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import theme from "../assets/theme";
import Image from "next/image";
import {ContactsStroked} from "../../components/shared/Svg";

const useStyles = makeStyles({
  height: {
    position: 'relative',
    height: '100%',
  },
  offer: {
    position: 'relative',
    backgroundColor: '#F3F3F3',
    height: '100vh',
    minHeight: '800px',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      minHeight: 'auto',
    },
  },
  offerSubtitleWrapper: {
    position: 'relative',
    paddingTop: '120px',
    width: '100%',
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'right',

    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      minHeight: 240,
      justifyContent: 'center',
      paddingTop: 70,
      width: '100%',
      '& span': {
        textAlign: 'center',
        color: theme.palette.text.primary,
      }
    },

    '& span': {
      position: 'relative',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      backgroundColor: theme.palette.primary.darkGray,
      width: 'calc(100% + 2600px)',
      height: '100%',

      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },

  },

  offerPictureWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
  },

  offerPicture: {
    position: 'relative',
    paddingTop: 120,
    width: '80%',
    marginLeft: 'auto',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

    '& > span': {
      overflow: 'visible !important',
    },

    '& > span::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '90%',
      height: '80%',
      borderRadius: 40,
      boxShadow: '-14px 0px 17px 11px #00000033',
    }
  },

  offerStroked: {
    '& svg': {
      position: 'absolute',
      left: '-40px',
      top: 130,
      width: 124,
      height: '80%',

      [theme.breakpoints.down(1600)]: {
        left: 0,
        width: 84,
      },

      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    }
  }
})

const ContactsPage = () => {
  const cls = useStyles();
  return (
      <Layout>
        <section className={cls.offer}>
          <Container className={cls.height}>
            <Grid container className={cls.height}>
              <div className={cls.offerStroked}>
                <ContactsStroked />
              </div>
              <Grid item md={7} className={cls.offerPictureWrapper}>
                <div className={cls.offerPicture}>
                  <Image
                      src={'/img/contacts/contactsOffer.png'}
                      alt="contacts picture"
                      layout="responsive"
                      width={866}
                      height={864}
                      priority={true}
                  />
                </div>
              </Grid>
              <Grid item md={5} container className={cls.offerInfoWrapper}>
                <div className={cls.offerSubtitleWrapper}>
                  <Typography variant={'h1'} className={cls.offerSubtitle}>
                    <span className="color-white">Contact Us</span>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
        <div id={'feedback'}>
          <Feedback showCheckboxes={true}/>
        </div>
      </Layout>
  )
}

export default ContactsPage;
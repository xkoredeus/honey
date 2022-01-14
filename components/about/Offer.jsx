import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {AboutUsStroked} from "../shared/Svg";
import Image from "next/image";
import React from "react";
import theme from "../../src/assets/theme";

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

  offerPictureWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
  },

  offerPicture: {
    position: 'relative',
    paddingTop: 120,
    width: '120%',
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
      right: 0,
      bottom: 0,
      width: '85%',
      height: '95%',
      borderRadius: 40,
      boxShadow: '-14px 0px 17px 11px #00000033',
    }
  },

  offerStroked: {
    '& svg': {
      position: 'absolute',
      left: '-40px',
      top: 130,
      width: 90,
      height: '80%',

      [theme.breakpoints.down(1600)]: {
        left: 0,
        width: 64,
        top: 120,
      },

      [theme.breakpoints.down('md')]: {
        left: 0,
        width: 64,
        height: 'auto',
        top: 90,
      },

      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    }
  },

  offerSubtitleWrapper: {
    position: 'relative',
    paddingTop: '120px',
    paddingLeft: '9rem',
    height: '50%',

    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down(1700)]: {
      paddingLeft: '5rem',
    },

    [theme.breakpoints.down('lg')]: {
      paddingLeft: '3rem',
    },

    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      justifyContent: 'center',
      paddingTop: 0,
      paddingLeft: 0,
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
  offerDescriptionWrapper: {
    paddingLeft: '9rem',
    height: '50%',
    paddingRight: '3rem',

    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down(1700)]: {
      paddingLeft: '5rem',
      paddingRight: '2.5rem',
    },

    [theme.breakpoints.down('lg')]: {
      paddingLeft: '3rem',
      paddingRight: '2rem',
    },

    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingRight: '1.5rem',
      paddingLeft: '1.5rem',
      width: '100%',
      '& span': {
        textAlign: 'center',
        color: theme.palette.text.primary,
      }
    },
  },
  offerInfoWrapper: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: '5.5rem',
      paddingBottom: '2rem',
    },
  },
})

export const Offer = () => {
  const cls = useStyles();
  return (
      <section className={cls.offer}>
        <Container className={cls.height}>
          <Grid container className={cls.height}>
            <div className={cls.offerStroked}>
              <AboutUsStroked />
            </div>
            <Grid item md={7} className={cls.offerPictureWrapper}>
              <div className={cls.offerPicture}>
                <Image
                    src={'/img/about/aboutOffer.png'}
                    alt="about offer picture"
                    layout="responsive"
                    width={1111}
                    height={919}
                    priority={true}
                />
              </div>
            </Grid>
            <Grid item md={5} container direction={'column'} className={cls.offerInfoWrapper}>
              <div className={cls.offerSubtitleWrapper}>
                <Typography variant={'h1'} className={cls.offerSubtitle}>
                  <span className="color-white">What We Do</span>
                </Typography>
              </div>
              <div className={cls.offerDescriptionWrapper}>
                <Typography className={cls.offerDescription}>
                  <span className="color-light-gray">Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc, consequat vel aliquam vitae, porta ac mi. Integer commodo sapien lacus, nec interdum nisi vehicula aliquam. Aliquam enim lorem,</span>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
  )
}
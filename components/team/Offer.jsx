import React from "react";
import {Container, Typography, Grid, makeStyles} from "@material-ui/core";
import theme from "../../src/assets/theme";

const useStyles = makeStyles({
  root: {
    position: 'relative',
    background: theme.palette.primary.gray,
    height: '100vh',
    minHeight: '800px',
    overflow: 'hidden',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    [theme.breakpoints.up('md')]: {
      backgroundImage: 'none !important',
    },

    [theme.breakpoints.down('md')]: {
      height: 'auto',
      minHeight: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '70px',
    },
  },
  height: {
    height: '100%',
  },
  offerPicture: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    width: 'calc(100% + 500px)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  offerPictureWrapper: {
    position: 'relative',
    height: '100%',

    [theme.breakpoints.down('md')]: {
      minHeight: 600,
    },

    [theme.breakpoints.down('sm')]: {
      minHeight: 500,
    },
  },
  offerTitle: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,

    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
    gridTemplateRows: 'repeat(2, auto)',

    '& span:nth-child(2)': {
      gridColumn: '2/3',
      gridRow: '2/3',
    },

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  offerTitleGray: {
    color: '#767676',
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
    },
  },
})

export const Offer = () => {
  const cls = useStyles();
  return (
      <section className={cls.root}
         style={{
           backgroundImage: 'url("img/team/teamOffer.jpg")'
         }}
      >
        <Container className={cls.height}>
          <Grid container className={cls.height}>
            <Typography variant={'subtitle2'} className={cls.offerTitle}>
              <span className="color-red">Honey</span>
              <span className={cls.offerTitleGray}>Team</span>
            </Typography>
            <Grid item md={7} className={cls.offerPictureWrapper}>
              <div
                className={cls.offerPicture}
                style={{
                  backgroundImage: 'url("img/team/teamOffer.jpg")'
                }}
              />
            </Grid>
            <Grid item md={5} container direction={'column'} className={cls.offerInfoWrapper}>
              <div className={cls.offerSubtitleWrapper}>
                <Typography variant={'h1'} className={cls.offerSubtitle}>
                  <span className="color-white">Our Team</span>
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
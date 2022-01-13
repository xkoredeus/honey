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
    gridTemplateColumns: 'repeat(4, auto)',
    gridTemplateRows: 'repeat(2, auto)',
    gridColumnGap: '1.5rem',

    '& span:nth-child(3)': {
      gridRow: '2/3',
      gridColumn: '2/3',
    },
    '& span:nth-child(4)': {
      gridRow: '2/3',
      gridColumn: '3/4',
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
    paddingRight: '5rem',
    width: '100%',
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

    [theme.breakpoints.down(1700)]: {
      paddingRight: '4rem',
    },

    [theme.breakpoints.down('lg')]: {
      paddingRight: '3rem',
    },

    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      justifyContent: 'center',
      paddingTop: 0,
      paddingRight: 0,
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
  offerSubtitle: {
    transform: 'translateY(-130px)',

    [theme.breakpoints.down('lg')]: {
      transform: 'translateY(-90px)',
    },

    [theme.breakpoints.down('md')]: {
      marginBottom: 0,
    },

    [theme.breakpoints.down('sm')]: {
      transform: 'translateY(0)',
    },
  }
})

export const Offer = () => {
  const cls = useStyles();
  return (
      <section className={cls.root}
         style={{
           backgroundImage: 'url("img/careers/careersOffer.jpg")'
         }}
      >
        <Container className={cls.height}>
          <Grid container className={cls.height}>
            <Typography variant={'subtitle2'} className={cls.offerTitle}>
              <span className="color-red">Join</span>
              <span className={cls.offerTitleGray}>Our</span>
              <span className={cls.offerTitleGray}>Great</span>
              <span className="color-red">Team</span>
            </Typography>
            <Grid item md={7} className={cls.offerPictureWrapper}>
              <div
                className={cls.offerPicture}
                style={{
                  backgroundImage: 'url("img/careers/careersOffer.jpg")'
                }}
              />
            </Grid>
            <Grid item md={5} container className={cls.offerInfoWrapper}>
              <div className={cls.offerSubtitleWrapper}>
                <Typography variant={'h1'} className={cls.offerSubtitle}>
                  <span className="color-white">Careers</span>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
  )
}
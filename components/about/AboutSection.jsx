import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import {Section} from "../shared";
import React from "react";
import theme from "../../src/assets/theme";

import cx from "clsx";

const useStyles = makeStyles({
  root: {
    position: 'relative',
    overflow: 'hidden',

    [theme.breakpoints.down('sm')]: {
      paddingTop: '3rem',
    },
  },
  rtl: {
    backgroundColor: '#FFF2F3',
    '& $stroked': {
      '& svg': {
        height: 120,
        width: 'auto',
        top: 0,
        left: '-30px',
        right: 'auto',

        [theme.breakpoints.down(1600)]: {
          height: 90,
          left: 0,
        },
        [theme.breakpoints.down('md')]: {
          top: 20,
          left: 20,
          height: 54,
        },

        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      }
    },
    '& $infoWrapper': {
      order: 2,
      display: 'flex',
      justifyContent: 'flex-end',
    },
    '& $pictureWrapper': {
      order: 1,
      display: 'flex',
      justifyContent: 'center',

      '&::before': {
        left: 'auto',
        right: 0,
      },
      '&::after': {
        left: 'auto',
        right: 'calc(-100% / 5)',
      }
    },
    '& $picture': {
      maxWidth: '100%',
      transform: 'translateX(50px)',
      paddingTop: 120,

      [theme.breakpoints.down('sm')]: {
        transform: 'translateX(0)',
        paddingTop: 50,
        width: '70%'
      },
    }
  },
  container: {
    position: 'relative',
  },
  info: {
    maxWidth: '70%',

    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset',
    },
  },
  infoWrapper: {
    [theme.breakpoints.down('sm')]: {
      order: 2,
      paddingTop: '1.5rem',
    },
  },
  pictureWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',

    '&::before': {
      content: '""',
      position: 'absolute',
      width: 'calc(100% + 600px)',
      height: 'calc(100% + 1000px)',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: theme.palette.text.primary,

      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% + 100px) !important',
        left: '-50px !important',
        top: '-20% !important',
        height: '70% !important',
        transform: 'none !important',
      },
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      width: 'calc(100% + calc(100% / 5))',
      height: '100%',
      left: 'calc(-100% / 5)',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: theme.palette.primary.main,

      [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        left: '0 !important',
      },
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center !important',
      width: '100% !important',
      marginBottom: '20 !important',
      order: '1 !important',
    },
  },

  picture: {
    position: 'relative',
    paddingTop: 50,
    width: '100%',
    maxWidth: '70%',
    height: 'auto',
    zIndex: 1,

    [theme.breakpoints.down('sm')]: {
      width: 300,
    },

    [theme.breakpoints.down('xs')]: {
      width: 200,
      paddingTop: 30,
    },

    '& > span': {
      overflow: 'visible !important',
    },

    '& > span::before': {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '95%',
      height: '95%',
      borderRadius: 40,
      boxShadow: '-14px 0px 17px 11px #00000033',
      transform: 'translate(-50%, -50%)'
    },
  },

  stroked: {
    '& svg': {
      position: 'absolute',
      width: 122,
      height: 'auto',
      right: '-20px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,

      [theme.breakpoints.down(1600)]: {
        width: 64,
        right: 10,
      },
      [theme.breakpoints.down('md')]: {
        width: 44,
      },

      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  },
})

export const AboutSection = ({rtl = false, title, text, imageSrc, stroked}) => {
  const cls = useStyles();
  return (
      <Section small classes={cx(cls.root, rtl ? cls.rtl : "")}>
        <Container className={cls.container}>
          <div className={cls.stroked}>
            {stroked}
          </div>
          <Grid container alignItems={'center'}>
            <Grid item md={6} lg={7} className={cls.infoWrapper}>
              <div className={cls.info}>
                <Typography variant={'h2'} className={cls.title}>
                  {title}
                </Typography>
                <Box sx={{marginBottom: {xs: '1.5rem', md: '2rem', lg: '3rem'}}}>
                  <Typography>
                    {text}
                  </Typography>
                </Box>
                <Button
                    variant='contained'
                    color='primary'
                >
                  Start a project
                </Button>
              </div>
            </Grid>
            <Grid item md={6} lg={5} className={cls.pictureWrapper}>
              <div className={cls.picture}>
                <Image
                    src={imageSrc}
                    alt="about testimonial picture"
                    layout="responsive"
                    width={!rtl ? 461 : 632}
                    height={!rtl ? 496 : 413}
                    priority={true}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Section>
  )
}
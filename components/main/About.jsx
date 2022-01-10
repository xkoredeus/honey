import {makeStyles} from "@material-ui/core";
import theme from "../../src/assets/theme";
import {AboutStroked, AboutTitleIcon, Events, Monetization} from "../shared/Svg";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Section} from "../shared";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import cx from "clsx";
import React from "react";

const useStyles = makeStyles({
  about: {
    position: 'relative',
    background: theme.palette.primary.gray,
  },
  aboutInfo: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: '2rem',

    '&::before': {
      content: '""',
      position: 'absolute',
      right: 0,
      bottom: 0,
      backgroundColor: theme.palette.primary.darkGray,
      width: 'calc(100% + 2600px)',
      height: '100%',

      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    }
  },
  aboutInfoIn: {
    position: 'relative',
    maxWidth: '540px',

    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset',
      paddingBottom: '20px',
      '& .color-white': {
        color: theme.palette.text.primary,
      },
      '& .color-light-gray': {
        color: theme.palette.text.primary,
      },
    },
  },
  aboutStroked: {
    '& svg': {
      position: 'absolute',
      width: '272px',
      height: '869px',
      right: 0,
      top: '-490px',
      [theme.breakpoints.down(1899)]: {
        width: 172,
        height: 579,
        top: '-427px',
      },
      [theme.breakpoints.down(1700)]: {
        display: 'none',
      },
    },
  },
  aboutTitleIcon: {
    '& svg': {
      position: 'absolute',
      width: 125,
      height: 497,
      left: 0,
      bottom: '-320px',

      [theme.breakpoints.down(1899)]: {
        bottom: '-210px',
        width: 85,
        height: 327,
      },
      [theme.breakpoints.down(1700)]: {
        display: 'none',
      },
    }
  },
  aboutTestimonialsWrapper: {
    position: 'relative',
    height: '100%',
  },
  aboutPictureWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '5.8rem',
    marginTop: '2rem',
    height: 'calc(100% - 50px)',
    // [theme.breakpoints.down(1600)]: {
    // },

    [theme.breakpoints.down('sm')]: {
      height: 400,
      justifyContent: 'center',
      paddingRight: 0,
      marginTop: 0,
    }
  },
  // aboutPicture: {
  //   width: 464,
  //   height: 680,
  // },
  aboutTestimonials: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    transform: 'translateY(-2rem)',

    [theme.breakpoints.down('sm')]: {
      transform: 'translateY(0)',
    },
  },
  aboutTestimonialsIn: {
    position: 'relative',
    paddingTop: '4rem',
    paddingBottom: '4rem',

    [theme.breakpoints.down('md')]: {
      paddingTop: '2rem',
      paddingBottom: '2rem',
    },

    '&::before': {
      position: 'absolute',
      content: '""',
      left: 'calc(-100% / 5)',
      width: 2500,
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      top: 0,

      [theme.breakpoints.down('md')]: {
        left: '-30px',
      },
    }
  },
  aboutTestimonialItem: {
    position: 'relative',
    color: '#fff',
    display: 'grid',
    gridTemplateColumns: '53px 1fr',
    gridTemplateRows: '50px 1fr',
    gridColumnGap: '10px',
    gridRowGap: '5px',
    alignItems: 'center',
    padding: '1rem',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '30px 1fr',
      gridTemplateRows: '30px 1fr',
    },
  },
  aboutTestimonialItem1: {
    paddingLeft: 0,
    '&::after': {
      position: 'absolute',
      content: '""',
      right: 0,
      width: 1,
      height: '70%',
      backgroundColor: '#B03C3F',
      top: '1rem',
    }
  },
  aboutTestimonialIcon: {
    '& svg': {
      [theme.breakpoints.down('lg')]: {
        width: '40px',
      },
      [theme.breakpoints.down(1280)]: {
        width: '30px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '25px',
        maxHeight: '25px'
      },
    },
  },
  aboutTestimonialTitle: {
    fontWeight: 'bold',
    fontSize: '2.8rem',
    gridColumn: "2/3",
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.9rem',
    },
    [theme.breakpoints.down(1280)]: {
      fontSize: '1.7143rem',
    },
  },
  aboutTestimonialIntro: {
    maxWidth: 189,
    gridColumn: "2/3",
  },
});

export const About = () => {
  const cls = useStyles();
  return (
      <section className={cls.about}>
        <div className={cls.aboutStroked}>
          <AboutStroked />
        </div>
        <Container>
          <Grid container>
            <Grid item xs={12} md={7} className={cls.aboutInfo}>
              <Section classes={cls.aboutInfoIn}>
                <Box sx={{mb: '1.8rem'}}>
                  <Typography variant={'h2'} className="color-white">
                    About Us
                  </Typography>
                </Box>
                <Box sx={{mb: '1.8rem'}}>
                  <Typography className="color-light-gray">
                    <span className="color-light-gray">Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc, consequat vel aliquam vitae, porta ac mi. Integer commodo sapien lacus, nec interdum nisi vehicula aliquam. Aliquam enim lorem,</span>
                  </Typography>
                </Box>
                <Box sx={{mb: '1.8rem'}}>
                  <Typography>
                    <span className="color-light-gray">laoreet ut egestas quis, rutrum sed lectus. Duis et purus in dolor bibendum egestas vel vitae urna. Vestibulum dictum semper laoreet. Nulla augue tellus, aliquam mollis quam eget, maximus iaculis sem. Praesent semper ex tortor, in rhoncus arcu sollicitudin ut. Donec</span>
                  </Typography>
                </Box>
                <Button
                    variant='contained'
                    color='primary'
                >
                  Start a project
                </Button>
              </Section>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className={cls.aboutTestimonialsWrapper}>
                <div className={cls.aboutPictureWrapper}>
                  <Image
                      src="/img/main/aboutPicture.png"
                      alt="slider picture"
                      className={cls.aboutPicture}
                      layout="fill"
                      objectFit="contain"
                  />
                </div>
                <div className={cls.aboutTestimonials}>
                  <Grid container className={cls.aboutTestimonialsIn}>
                    <Grid item xs={6}>
                      <div className={cx(cls.aboutTestimonialItem, cls.aboutTestimonialItem1)}>
                        <div className={cls.aboutTestimonialIcon}>
                          <Monetization />
                        </div>
                        <div className={cls.aboutTestimonialTitle}>80M+</div>
                        <div className={cls.aboutTestimonialIntro}>Turnover of portals created and maintained by us</div>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className={cls.aboutTestimonialItem}>
                        <div className={cls.aboutTestimonialIcon}>
                          <Events />
                        </div>
                        <div className={cls.aboutTestimonialTitle}>2016</div>
                        <div className={cls.aboutTestimonialIntro}>Year of our start and...</div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <div className={cls.aboutTitleIcon}>
          <AboutTitleIcon />
        </div>
      </section>
  )
}
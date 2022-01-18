import React from "react";
import theme from "../../assets/theme";
import cx from "clsx";

import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {
  SliderArrowNext,
  SliderArrowPrev,
  CaseOneStroked,
  External,
  LaravelLogo,
  MysqlLogo,
  Process,
  ReactLogo,
  Wordpresslogo, FeatureStroked, ValuesStroked
} from "../../../components/shared/Svg";
import Image from "next/image";
import {Feedback, Section} from "../../../components/shared";
import {Layout} from "../../layouts";
import Box from "@material-ui/core/Box";


import { Navigation } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import Head from "next/head";

const useStyles = makeStyles({
  height: {
    position: 'relative',
    height: '100%',
  },
  offer: {
    position: 'relative',
  },

  offerStroked: {
    '& svg': {
      position: 'absolute',
      left: 10,
      top: 130,
      width: 161,
      zIndex: 1,

      [theme.breakpoints.down(1600)]: {
        left: 10,
        width: 84,
      },

      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    }
  },

  offerIn: {
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
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: 20,
    },
  },

  offerPicture: {
    position: 'relative',
    paddingTop: 120,
    width: '70%',

    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: 'auto',
    },

    [theme.breakpoints.down('xs')]: {
      width: 200,
      paddingTop: 90,
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
  offerInfoWrapper: {
    display: 'grid',
    gridTemplateRows: '1fr 12% 48%',

    [theme.breakpoints.down('sm')]: {
      gridTemplateRows: 'auto',
    },
  },
  offerInfoSection: {
    position: 'relative',

    display: 'flex',
    alignItems: 'center',
    paddingLeft: '9rem',

    [theme.breakpoints.down(1700)]: {
      paddingLeft: '5rem',
    },

    [theme.breakpoints.down('md')]: {
      paddingLeft: '2rem',
      width: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      width: '100%',
    },

    '& > *': {
      position: 'relative',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 'calc(100% + 2600px)',
      height: '100%',

      [theme.breakpoints.down('sm')]: {
        left: '-25px',
        width: 'calc(100% + 50%)',
      },
    },
  },
  offerTitleWrapper: {
    paddingTop: 120,

    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '2rem',
    },
    '&::before': {
      backgroundColor: theme.palette.primary.darkGray,
    }
  },
  offerLinkWrapper: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: '1rem',
      paddingBottom: '1rem',
      justifyContent: 'center',
    },
    '&::before': {
      backgroundColor: theme.palette.primary.main,
    }
  },
  offerLink: {
    fontSize: '1.3rem',
    transition: '.3s all ease',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      justifyContent: 'center',
    },

    '&:hover': {
      opacity: '.7',
    },
    '& svg': {
      width: 24,
      height: 24,
      fill: '#fff',
      marginRight: '0.5rem',

      [theme.breakpoints.down('sm')]: {
        width: 15,
        height: 15,
      },
    }
  },
  offerCharsWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: '1.3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      alignItems: 'center',
      textAlign: 'center',
    },
    '&::before': {
      backgroundColor: '#FFDEDF',
    }
  },
  offerChar: {
    '&:not(:last-child)': {
      marginBottom: '2rem',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '.5rem',
      },
    },
    '& span': {
      fontFamily: 'Oakes-Bold',
    },
  },
  roadmap: {
    color: '#fff',
    backgroundColor: theme.palette.primary.darkGray,
  },
  roadMapTop: {
    position: 'relative',
    marginBottom: '4rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2rem',
    },
  },
  roadmapStroked: {
    '& svg': {
      position: 'absolute',
      right: '-4rem',
      width: 'auto',
      height: 90,
      top: '50%',
      transform: 'translateY(-50%)',

      [theme.breakpoints.down(1600)]: {
        right: 0,
        height: 54,
      },

      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    }
  },

  processSliderWrapper: {
    position: 'relative',
    paddingLeft: 70,
    paddingRight: 70,

    '&::before': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: 8,
      backgroundColor: '#353434',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
    },

    '& .swiper-slide:nth-child(even) $processIn': {
      gridRow: '2/3',
      paddingTop: 30,
      paddingBottom: 15,
      '&::after': {
        top: 'auto',
        bottom: 0,
      }
    },

    '& .swiper': {
      overflow: 'visible',
    },
    '& .swiper-button-prev, & .swiper-button-next': {
      color: theme.palette.primary.main,

      [theme.breakpoints.down('xl')]: {
        display: 'none',
      },

      '&::after': {
        fontSize: 24,
      },
    },
    '& .swiper-button-prev': {
      left: '-40px',
    },
    '& .swiper-button-next': {
      right: '-40px',
    }
  },
  process: {
    position: 'relative',
    height: 450,
    display: 'grid',
    gridTemplateRows: '225px min-content',
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 0,
      top: '50%',
      left: 1,
      width: 18,
      height: 18,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      border: '5px solid #484848',
      transform: 'translateY(-50%)',
      zIndex: 3,
    },
  },
  processIn: {
    position: 'relative',
    paddingLeft: 40,
    '&::before, &::after': {
      position: 'absolute',
      content: '""',
    },
    '&::after': {
      left: 6,
      top: 0,
      width: 18,
      height: 18,
      borderRadius: '50%',
      backgroundColor: '#484848',
    },
    '&::before': {
      position: 'absolute',
      content: '""',
      width: 1,
      height: '100%',
      borderLeft: '1px dashed #484848',
      left: 15,
      top: 0,
    },
  },
  processDate: {
    fontSize: '0.875rem',
    color: '#AEAEAE',
  },
  processTitle: {
    fontFamily: 'Oakes-Bold',
    marginBottom: '1rem',
  },
  processList: {
    fontSize: '0.875rem',
    color: '#AEAEAE',

    '& > *:not(:last-child)': {
      marginBottom: '6px',
    },
    '& > *': {
      position: 'relative',
      paddingLeft: 16,
    },
    '& > *::before': {
      position: 'absolute',
      content: '""',
      left: 0,
      top: 0,
      width: 4,
      height: 16,
      backgroundColor: '#AEAEAE',
    },
  },

  challenge: {
    fontFamily: 'Oakes-SemiBold',
    paddingLeft: '3rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingTop: '1rem',
    },
  },

  solution: {
    position: 'relative',
    borderBottom: '1px solid #AEAEAE',
    paddingTop: '3.75rem',
    paddingBottom: '3.75rem',

    '&:first-child': {
      borderTop: '1px solid #AEAEAE',
    },

    '&::before': {
      position: 'absolute',
      content: '""',
      width: 19,
      height: 19,
      backgroundColor: theme.palette.primary.main,
      borderRadius: 5,
      left: 0,
    },

    [theme.breakpoints.down(1600)]: {
      paddingTop: '2.75rem',
      paddingBottom: '2.75rem',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '1.75rem',
      paddingBottom: '1.75rem',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '1rem',
      paddingBottom: '1rem',
    },
  },

  solutionTitle: {
    fontFamily: 'Oakes-SemiBold',
    marginTop: '1rem',
    marginBottom: '.2rem',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  features: {
    position: 'relative',
    color: '#fff',
    backgroundColor: theme.palette.primary.darkGray,
    paddingBottom: 0,
    overflow: 'hidden',
  },
  featureStroked: {
    '& svg': {
      position: 'absolute',
      width: 122,
      height: 'auto',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',

      [theme.breakpoints.down(1899)]: {
        width: 72,
      },
      [theme.breakpoints.down(1200)]: {
        display: 'none',
      },
    },
  },
  featuresTop: {
    marginBottom: '4rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2rem',
    },
  },
  featurePictureWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&::before': {
      position: 'absolute',
      content: '""',
      right: 0,
      top: 0,
      width: 'calc(100% + 600px)',
      height: '100%',
      backgroundColor: theme.palette.primary.main,

      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% + 50px)',
        right: '-25px',
        paddingBottom: 20,
      },
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingBottom: 20,
    },
  },

  featurePicture: {
    position: 'relative',
    width: 313,

    [theme.breakpoints.up('lg')]: {
      transform: 'translateY(50px)'
    },

    [theme.breakpoints.down(1600)]: {
      width: 250,
      height: 'auto',
    },

    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
    },

    [theme.breakpoints.down('sm')]: {
      width: 200,
      height: 'auto',
    },

    [theme.breakpoints.down('xs')]: {
      width: 150,
      paddingTop: 40,
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
  featureInfoWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',

    [theme.breakpoints.down('sm')]: {
      paddingTop: '2.5rem',
      paddingBottom: '2.5rem',
    },
  },
  featureSliderWrapper: {
    maxWidth: 431,

    [theme.breakpoints.down('md')]: {
      width: '100%',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      maxWidth: 'unset',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingLeft: 0,
      paddingRight: 0,
      maxWidth: 'unset',
    },
  },
  featureSliderNavigation: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '3rem',

    [theme.breakpoints.down('md')]: {
      marginTop: '1.5rem',
    },
  },
  featureSliderButton: {
    cursor: 'pointer',
    '& svg': {
      fill: '#AEAEAE',
      transition: '.3s all ease',


      [theme.breakpoints.down('sm')]: {
        width: 15,
        height: 15,
      },
    },
    '&:hover svg': {
      fill: theme.palette.primary.main,
    },
  },
  featuresSliderCount: {
    fontFamily: 'Oakes-Bold',
    color: '#AEAEAE',
    marginLeft: 15,
    marginRight: 15,
  },
  featureInfo: {
    paddingTop: 10,
  },
  featureInfoTitle: {
    position: 'relative',
    fontFamily: 'Oakes-Bold',
    marginBottom: '1.5rem',
    paddingLeft: 50,

    [theme.breakpoints.down('md')]: {
      marginBottom: '0.7rem',
    },

    '&::before': {
      position: 'absolute',
      content: '""',
      width: 32,
      height: 28,
      backgroundColor: theme.palette.primary.main,
      borderRadius: 5,
      left: 0,
      top: '-5px',
    },
  },
  featureText: {
    color: '#AEAEAE'
  },

  tech: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  techLogo: {
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '.5rem',
    },

    '& svg': {
      height: 113,
      [theme.breakpoints.down('md')]: {
        height: 70,
      },
      [theme.breakpoints.down('sm')]: {
        height: 50,
      },
    },
  },
  techTitle: {
    fontFamily: 'Oakes-Bold',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '.5rem',
    },
  },

  value: {
    position: 'relative',
    overflow: 'hidden',
    color: '#fff',
    backgroundColor: theme.palette.primary.darkGray,
  },

  valueStroked: {
    '& svg': {
      position: 'absolute',
      width: 'auto',
      height: 90,
      left: '50%',
      bottom: 50,
      transform: 'translateX(-50%)',
      zIndex: 1,

      [theme.breakpoints.down(1600)]: {
        height: 60,
      },
      [theme.breakpoints.down(1200)]: {
        display: 'none',
      },
    }
  },

  client: {
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem',
    },
  },
  clientPicture: {
    width: 122,
    height: 'auto',
    marginRight: 27,

    [theme.breakpoints.down('md')]: {
      width: 90,
      marginRight: 18,
    },

    [theme.breakpoints.down('sm')]: {
      width: 60,
      marginRight: 14,
    },
  },
  clientTitle: {
    marginBottom: '0.6rem',
  },
  clientPosition: {
    color: '#AEAEAE',
  },
  review: {
    maxWidth: 600,
    paddingRight: 40,

    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
  },
  reviewTitle: {
    marginBottom: '0.6rem',
  },
  reviewText: {
    color: '#AEAEAE',
  },

  values: {
    position: 'relative',
    color: '#fff',
    paddingLeft: '9rem',

    [theme.breakpoints.down(1700)]: {
      paddingLeft: '5rem',
    },

    [theme.breakpoints.down('md')]: {
      paddingLeft: '2rem',
    },

    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingTop: 30,
      paddingBottom: 30,
      marginTop: 20,
    },

    '& > *': {
      position: 'relative',
    },

    '&::before': {
      position: 'absolute',
      content: '""',
      left: 0,
      top: '-100%',
      width: 'calc(100% + 600px)',
      height: '400%',
      backgroundColor: theme.palette.primary.main,

      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% + 50px)',
        left: '-25px',
        height: '100%',
        top: 0,
      },
    },

  },

  valueItemTitle: {
    marginBottom: '0.6rem',

    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  valueItemSubtitle: {
    fontFamily: 'Oakes-Regular',
    fontWeight: 400,
    [theme.breakpoints.down('md')]: {
      marginBottom: 0,
    },
  },
})

const CaseOnePage = () => {
  const cls = useStyles();

  const swiperParams = {
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      960: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
    speed: 1000,
    spaceBetween: 30,
  };

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const [slidesLength, setSlidesLength] = React.useState("");
  const [activeSlide, setActiveSlide] = React.useState("");

  return (
      <>
        <Head>
          <title>Finde dein abeteuer - Honey</title>
        </Head>
        <Layout>
        <section className={cls.offer}>
          <div className={cls.offerStroked}>
            <CaseOneStroked />
          </div>
          <div className={cls.offerIn}>
            <Container className={cls.height}>
              <Grid container className={cls.height}>
                <Grid item md={7} xl={6} className={cls.offerPictureWrapper}>
                  <div className={cls.offerPicture}>
                    <Image
                        src={'/img/cases/caseOne/caseOffer.png'}
                        alt="case picture"
                        layout="responsive"
                        width={575}
                        height={797}
                        priority={true}
                    />
                  </div>
                </Grid>
                <Grid item xs={false} xl={1} />
                <Grid item md={5} container className={cls.offerInfoWrapper}>
                  <div className={cx(cls.offerInfoSection, cls.offerTitleWrapper)}>
                    <Typography variant={'h1'} className={cls.offerTitle}>
                      <span className="color-white">Finde Dein Abenteuer</span>
                    </Typography>
                  </div>
                  <div className={cx(cls.offerInfoSection, cls.offerLinkWrapper)}>
                    <a href={'/'} target={'_blank'} className={cls.offerLink}>
                      <External />
                      <span className="color-white">www.findedeinabenteuer.de</span>
                    </a>
                  </div>
                  <div className={cx(cls.offerInfoSection, cls.offerCharsWrapper)}>
                    <div className={cls.offerChar}>
                      Region <span>Germany</span>
                    </div>
                    <div className={cls.offerChar}>
                      Platform <span>Web</span>
                    </div>
                    <div className={cls.offerChar}>
                      Project Volume <span>1 100 man/hours</span>
                    </div>
                    <div className={cls.offerChar}>
                      Team Size <span>5 people</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </section>
        <Section>
          <Container>
            <Grid container>
              <Grid item md={5} lg={7}>
                <Typography variant={'h2'}>
                  About Client
                </Typography>
              </Grid>
              <Grid item md={7} lg={5}>
                <Typography className="color-medium-gray">
                  Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc, consequat vel aliquam vitae, porta ac mi. Integer commodo sapien lacus, nec interdum nisi vehicula aliquam. Aliquam enim lorem, Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc, consequat vel aliquam vitae, porta ac mi. Integer commodo sapien lacus, nec interdum nisi vehicula aliquam. Aliquam enim lorem, Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc, consequat vel aliquam vitae, porta ac mi. Integer commodo sapien lacus, nec interdum nisi vehicula aliquam. Aliquam enim lorem,
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Section>
        <Section small classes={cls.roadmap}>
          <Container>
            <div className={cls.roadMapTop}>
              <Typography variant={'h2'}>
                Roadmap
              </Typography>
              <div className={cls.roadmapStroked}>
                <Process />
              </div>
            </div>
            <div className={cls.processSliderWrapper}>
              <Swiper
                {...swiperParams}
              >
                <SwiperSlide>
                  <div className={cls.process}>
                    <div className={cls.processIn}>
                      <div className={cls.processDate}>June - July 2018</div>
                      <Typography variant={'h5'} className={cls.processTitle}>
                        Preparation values
                      </Typography>
                      <div className={cls.processList}>
                        <div>Lorem Ipsum dolor</div>
                        <div>Lorem Ipsum dolor</div>
                        <div>Lorem Ipsum dolor</div>
                        <div>Lorem Ipsum dolor</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={cls.process}>
                    <div className={cls.processIn}>
                      <div className={cls.processDate}>June - July 2018</div>
                      <Typography variant={'h5'} className={cls.processTitle}>
                        Front-End Development
                      </Typography>
                      <div className={cls.processList}>
                        <div>Lorem Ipsum dolor</div>
                        <div>Lorem Ipsum dolor</div>
                        <div>Lorem Ipsum dolor</div>
                        <div>Lorem Ipsum dolor</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={cls.process}>
                    <div className={cls.processIn}>
                      <div className={cls.processDate}>June - July 2018</div>
                      <Typography variant={'h5'} className={cls.processTitle}>
                        Back-End Development
                      </Typography>
                      <div className={cls.processList}>
                        <div>Lorem Ipsum dolor</div>
                        <div>Lorem Ipsum dolor</div>
                        <div>Lorem Ipsum dolor</div>
                        <div>Lorem Ipsum dolor</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={cls.process}>
                    <div className={cls.processIn}>
                      <div className={cls.processDate}>June - July 2018</div>
                      <Typography variant={'h5'} className={cls.processTitle}>
                        Release
                      </Typography>
                      <div className={cls.processList}>
                        <div>Lorem Ipsum dolor</div>
                        <div>Lorem Ipsum dolor</div>
                        <div>Lorem Ipsum dolor</div>
                        <div>Lorem Ipsum dolor</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <Box sx={{ mb: ['1rem', '1.5rem', '2rem', '2.5rem']}}>
              <Typography variant={'h2'}>
                Challenges & Solutions
              </Typography>
            </Box>

            <Box
              sx={{ mb: ['1rem', '1.5rem', '2rem', '3rem']}}
              display={{ xs: 'none', md: 'block'}}
            >
              <Grid container>
                <Grid item xs={false} md={7}>
                  <Typography variant={'h5'}>
                    Challenge
                  </Typography>
                </Grid>
                <Grid item xs={false} md={5}>
                  <Typography variant={'h5'}>
                    Solution
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <div>
              <Grid container className={cls.solution}>
                <Grid item xs={12} md={7}>
                  <div className={cls.challenge}>
                    <div className={cls.solutionTitle}>Challenge</div>
                    <div className="color-medium-gray">Create from a scratch a platform for the selection of copywriters/designers for projects.</div>
                  </div>
                </Grid>
                <Grid item xs={12} md={5}>
                  <div className={cls.solutionTitle}>Solution</div>
                  <div className="color-medium-gray">In 6 month we launched the first version of Contentoo platform. The platform is functioning and we are still maintaining it.</div>
                </Grid>
              </Grid>
              <Grid container className={cls.solution}>
                <Grid item xs={12} md={7}>
                  <div className={cls.challenge}>
                    <div className={cls.solutionTitle}>Challenge</div>
                    <div className="color-medium-gray">Make it convenient for both content creators and clients.</div>
                  </div>
                </Grid>
                <Grid item xs={12} md={5}>
                  <div className={cls.solutionTitle}>Solution</div>
                  <div className="color-medium-gray">We created different access levels for each role. Say, if you are a client you’ll have access to pages with projects, freelancers and brainstorms.</div>
                </Grid>
              </Grid>
              <Grid container className={cls.solution}>
                <Grid item xs={12} md={7}>
                  <div className={cls.challenge}>
                    <div className={cls.solutionTitle}>Challenge</div>
                    <div className="color-medium-gray">Automate the manual process of forming tasks</div>
                  </div>
                </Grid>
                <Grid item xs={12} md={5}>
                  <div className={cls.solutionTitle}>Solution</div>
                  <div className="color-medium-gray">Now clients choose the kind of project they need to be performed, fill in the briefing with tasks’ info and choose writer or designer.</div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Section>
        <Section classes={cls.features}>
          <div className={cls.featureStroked}>
            <FeatureStroked />
          </div>
          <Container>
            <div className={cls.featuresTop}>
              <Typography variant={'h2'}>
                Key Features
              </Typography>
            </div>
            <Grid container>
              <Grid item xs={12} md={6} className={cls.featurePictureWrapper}>
                <div className={cls.featurePicture}>
                  <Image
                      src={'/img/cases/caseOne/feature.png'}
                      alt="feature picture"
                      layout="responsive"
                      width={313}
                      height={635}
                      priority={true}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={cls.featureInfoWrapper}>
                  <div className={cls.featureSliderWrapper}>
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={30}
                      navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                      }}
                      onBeforeInit={
                        (swiper) => {
                          setTimeout(() => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            setSlidesLength(swiper.slides.length);
                            setActiveSlide(swiper.activeIndex + 1);
                          }, 0)
                        }
                      }
                      onSlideChange={(swiper) => {
                        setActiveSlide(swiper.activeIndex + 1);
                      }}
                    >
                      <SwiperSlide>
                        <div className={cls.featureInfo}>
                          <Typography variant={'h5'} className={cls.featureInfoTitle}>Personalized Access</Typography>
                          <div className={cls.featureText}>Personalized access to features by specific users’ roles. The level of access to pages varies among clients, writers, and designers.</div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={cls.featureInfo}>
                          <Typography variant={'h5'} className={cls.featureInfoTitle}>Personalized Access</Typography>
                          <div className={cls.featureText}>Personalized access to features by specific users’ roles. The level of access to pages varies among clients, writers, and designers.</div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div className={cls.featureSliderNavigation}>
                      <button className={cls.featureSliderButton} ref={navigationPrevRef}>
                        <SliderArrowPrev />
                      </button>
                      <div className={cls.featuresSliderCount}>{activeSlide} / {slidesLength}</div>
                      <button className={cls.featureSliderButton} ref={navigationNextRef}>
                        <SliderArrowNext />
                      </button>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Section>
        <Section>
          <Container>
            <Typography variant={'h2'} align={'center'}>
              Technologies we used
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <div className={cls.tech}>
                  <div className={cls.techLogo}>
                    <ReactLogo />
                  </div>
                  <Typography variant={'h5'} className={cls.techTitle}>React</Typography>
                  <div className="color-medium-gray">
                    Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div className={cls.tech}>
                  <div className={cls.techLogo}>
                    <LaravelLogo />
                  </div>
                  <Typography variant={'h5'} className={cls.techTitle}>Laravel</Typography>
                  <div className="color-medium-gray">
                    Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div className={cls.tech}>
                  <div className={cls.techLogo}>
                    <MysqlLogo />
                  </div>
                  <Typography variant={'h5'} className={cls.techTitle}>MySQL</Typography>
                  <div className="color-medium-gray">
                    Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div className={cls.tech}>
                  <div className={cls.techLogo}>
                    <Wordpresslogo />
                  </div>
                  <Typography variant={'h5'} className={cls.techTitle}>WordPress</Typography>
                  <div className="color-medium-gray">
                    Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Section>
        <Section classes={cls.value}>
          <Container>
            <Box sx={{ mb: ['1rem', '1.5rem', '2rem', '2.5rem']}}>
              <Typography variant={'h2'}>
                Delivered Value
              </Typography>
            </Box>
            <Grid container>
              <Grid item xs={12} md={6}>
                <div className={cls.review}>
                  <div className={cls.client}>
                    <div className={cls.clientPicture}>
                      <Image
                          src={'/img/cases/caseOne/client.png'}
                          alt="client picture"
                          layout="responsive"
                          width={122}
                          height={122}
                          priority={true}
                      />
                    </div>
                    <div className={cls.clientInfo}>
                      <Typography variant={'h4'} className={cls.clientTitle}>
                        Arnold Sweike
                      </Typography>
                      <div className={cls.clientPosition}>Product Owner Finde Dein Abenteuer</div>
                    </div>
                  </div>
                  <Typography variant={'h5'} className={cls.reviewTitle}>
                    "They believe in our success and are willing to go the extra mile every day."
                  </Typography>
                  <div className={cls.reviewText}>
                    As the project nears completion, Honey remains engaged and dedicated. Although they can more clearly delineate their scope involvement, the team has demonstrated exceptional flexibility and creative thinking as project needs have changed and maintains efficient, transparent communication.
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} className={cls.values}>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <div className={cls.valueItem}>
                      <Typography className={cls.valueItemTitle} variant={'h3'}>
                        $1million
                      </Typography>
                      <Typography className={cls.valueItemSubtitle} variant={'h5'}>
                        Guarantee
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className={cls.valueItem}>
                      <Typography className={cls.valueItemTitle} variant={'h3'}>
                        $1,413,650
                      </Typography>
                      <Typography className={cls.valueItemSubtitle} variant={'h5'}>
                        Total jackpot raised
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className={cls.valueItem}>
                      <Typography className={cls.valueItemTitle} variant={'h3'}>
                        $82,705
                      </Typography>
                      <Typography className={cls.valueItemSubtitle} variant={'h5'}>
                        Average jackpot
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className={cls.valueItem}>
                      <Typography className={cls.valueItemTitle} variant={'h3'}>
                        1609%
                      </Typography>
                      <Typography className={cls.valueItemSubtitle} variant={'h5'}>
                        An increase of
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className={cls.valueItem}>
                      <Typography className={cls.valueItemTitle} variant={'h3'}>
                        $82,705
                      </Typography>
                      <Typography className={cls.valueItemSubtitle} variant={'h5'}>
                        Average jackpot
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className={cls.valueItem}>
                      <Typography className={cls.valueItemTitle} variant={'h3'}>
                        1609%
                      </Typography>
                      <Typography className={cls.valueItemSubtitle} variant={'h5'}>
                        An increase of
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <div className={cls.valueStroked}>
              <ValuesStroked />
            </div>
          </Container>
        </Section>
        <Feedback title="Like what you saw?" backgroundDark={true}/>
      </Layout>
      </>
  )
}

export default CaseOnePage;
import React, {useState} from "react";

import { Thumbs, EffectCreative, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative"

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Section} from "../shared";
import {BenefitsStroked} from "../shared/Svg";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import cx from "clsx";
import {makeStyles} from "@material-ui/core";
import theme from "../../src/assets/theme";

const useStyles = makeStyles({
  benefits: {
    position: 'relative',
    backgroundColor: theme.palette.primary.darkGray,
  },
  benefitsTitleWrapper: {
    position: 'relative',
    height: '100%',
    '&::before': {
      content: '""',
      position: 'absolute',
      right: 0,
      bottom: 0,
      backgroundColor: theme.palette.primary.main,
      width: 'calc(100% + 2600px)',
      height: '100%',
    },
  },
  benefitsStroked: {
    '& svg': {
      position: 'absolute',
      width: 124,
      height: 641,
      top: '50%',
      left: '-2.8rem',
      transform: 'translateY(-50%)',
    }
  },
  benefitsPicture: {
    position: 'relative',
    height: '100%',
    maxWidth: 313,
    minHeight: 542,
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '70%',
      height: '100%',
      borderRadius: 40,
      boxShadow: '-14px 11px 19px 12px #00000052',
      transform: 'translate(-50%, -50%)',
    }
  },
  benefitsTitle: {
    color: '#fff',
  },
  benefitsCardWrapper: {
    paddingLeft: '5rem',
    [theme.breakpoints.down(1600)]: {
      paddingLeft: '2.6rem',
    },
    [theme.breakpoints.down(1280)]: {
      paddingLeft: '1.5rem',
    },
  },
  benefitsCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: '3.75rem',
    [theme.breakpoints.down(1600)]: {
      padding: '2.5rem',
    },
    [theme.breakpoints.down(1280)]: {
      padding: '1.5rem',
    },
  },
  benefitsCardDescription: {
    color: '#767676',
  },
  benefitsPoints: {
    // display: 'flex',
    // flexDirection: 'column',
    height: '100%',
    marginTop: '10px',

    [theme.breakpoints.down('lg')]: {
      paddingLeft: '1.5rem',
    },
    '& $benefitsPoint.swiper-slide-thumb-active': {
      color: theme.palette.primary.main,
      '&::before': {
        width: 16,
        backgroundColor: theme.palette.primary.main,
      },
      '& span': {
        transform: 'translateX(0.7rem)',
      }
    }
  },
  benefitsPoint: {
    fontSize: '1.125rem',
    position: 'relative',
    color: '#828282',
    transition: '.3s all ease',
    paddingLeft: '1.5rem',
    paddingRight: '0.7rem',
    cursor: 'pointer',
    '& span': {
      transition: '.5s all ease',
      display: 'inline-block'
    },
    '&::before': {
      position: 'absolute',
      content: '""',
      height: 40,
      width: 4,
      transition: '.5s all ease',
      backgroundColor: '#828282',
      left: 0,
      top: '-10px',
      transformOrigin: 'left center',
    },
    '&:hover': {
      '&::before': {
        width: 16,
      }
    }
  },
});

export const Benefits = () => {
  const cls = useStyles();
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
      <section className={cls.benefits}>
        <Container>
          <Grid container>
            <Grid item lg={3}>
              <Section classes={cls.benefitsTitleWrapper} small>
                <div className={cls.benefitsStroked}>
                  <BenefitsStroked />
                </div>
                <div className={cls.benefitsPicture}>
                  <Image
                      src="/img/main/benefitsPicture.png"
                      alt="benefits device"
                      objectFit="contain"
                      layout="fill"
                  />
                </div>
              </Section>
            </Grid>
            <Grid item lg={9}>
              <Section small classes={cls.benefitsCardWrapper}>
                <div className={cls.benefitsTitle}>
                  <Typography variant={'h2'}>
                    What We Do
                  </Typography>
                </div>
                <Grid container>
                  <Grid item lg={7}>
                    <Swiper
                        modules={[Thumbs, EffectCreative, Autoplay]}
                        thumbs={{ swiper: thumbsSwiper }}
                        effect={'creative'}
                        creativeEffect={{
                          "prev": {
                            "shadow": true,
                            "translate": [
                              0,
                              0,
                              -400
                            ],
                            "opacity": 0
                          },
                          "next": {
                            "translate": [
                              "102%",
                              0,
                              0
                            ]
                          }
                        }}
                        speed={1000}
                        autoplay={{
                          "delay": 2500,
                          "disableOnInteraction": true,
                        }}
                        spaceBetween={30}
                        loop={true}
                        className={cls.benefitsCardSlider}
                    >
                      <SwiperSlide>
                        <div className={cls.benefitsCard}>
                          <Typography variant={'h4'}>
                            We make dating business tasks
                          </Typography>
                          <Box sx={{mb: '1.8rem'}}>
                            <Typography className={cls.benefitsCardDescription}>
                              Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.
                            </Typography>
                          </Box>
                          <Button
                              variant='contained'
                              color='primary'
                          >
                            Start a project
                          </Button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={cls.benefitsCard}>
                          <Typography variant={'h4'}>
                            We make dating business tasks
                          </Typography>
                          <Box sx={{mb: '1.8rem'}}>
                            <Typography className={cls.benefitsCardDescription}>
                              Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum
                            </Typography>
                          </Box>
                          <Button
                              variant='contained'
                              color='primary'
                          >
                            Start a project
                          </Button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={cls.benefitsCard}>
                          <Typography variant={'h4'}>
                            We make dating business tasks
                          </Typography>
                          <Box sx={{mb: '1.8rem'}}>
                            <Typography className={cls.benefitsCardDescription}>
                              Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.
                            </Typography>
                          </Box>
                          <Button
                              variant='contained'
                              color='primary'
                          >
                            Start a project
                          </Button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={cls.benefitsCard}>
                          <Typography variant={'h4'}>
                            We make dating business tasks
                          </Typography>
                          <Box sx={{mb: '1.8rem'}}>
                            <Typography className={cls.benefitsCardDescription}>
                              Velit enim nulla nisi deserunt minim dolor ipsum eu.
                            </Typography>
                          </Box>
                          <Button
                              variant='contained'
                              color='primary'
                          >
                            Start a project
                          </Button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={cls.benefitsCard}>
                          <Typography variant={'h4'}>
                            We make dating business tasks
                          </Typography>
                          <Box sx={{mb: '1.8rem'}}>
                            <Typography className={cls.benefitsCardDescription}>
                              Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.
                            </Typography>
                          </Box>
                          <Button
                              variant='contained'
                              color='primary'
                          >
                            Start a project
                          </Button>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </Grid>
                  <Grid item xl={1} xs={false}/>
                  <Grid item lg={5} xl={4}>
                    <Swiper
                        modules={[Thumbs]}
                        watchSlidesProgress
                        slidesPerView={5}
                        onSwiper={setThumbsSwiper}
                        className={cls.benefitsPoints}
                        direction={'vertical'}
                        autoHeight={true}
                    >
                      <SwiperSlide className={cls.benefitsPoint}>
                        <span>We make dating business tasks</span>
                      </SwiperSlide>
                      <SwiperSlide className={cls.benefitsPoint}>
                        <span>We make apps for real dates</span>
                      </SwiperSlide>
                      <SwiperSlide className={cls.benefitsPoint}>
                        <span>We make landings and templates</span>
                      </SwiperSlide>
                      <SwiperSlide className={cls.benefitsPoint}>
                        <span>We made mail inboxes and domains</span>
                      </SwiperSlide>
                      <SwiperSlide className={cls.benefitsPoint}>
                        <span>We know your business needs</span>
                      </SwiperSlide>
                    </Swiper>
                  </Grid>
                </Grid>
              </Section>
            </Grid>
          </Grid>
        </Container>
      </section>
  )
}
import React from "react";
import { Pagination, EffectFade, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {MainScreenStroked} from "../shared/Svg";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import theme from "../../src/assets/theme";

import 'swiper/css';
import "swiper/css/effect-fade"
import "swiper/css/pagination"

const useStyles = makeStyles({
  mainScreen: {
    position: 'relative',
    background: theme.palette.primary.gray,
    paddingTop: '120px',
    height: '100vh',
    minHeight: '800px',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      minHeight: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '70px',
    },
  },
  mainScreenContainer: {
    height: '100%',
  },
  mainScreenInfo: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '9rem',

    [theme.breakpoints.down(1700)]: {
      paddingLeft: '5rem',
    },

    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingTop: '3rem',
      paddingBottom: '3rem',
      width: '100%',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      backgroundColor: theme.palette.primary.darkGray,
      width: 'calc(100% + 2600px)',
      height: 'calc(100% + 800px)',

      [theme.breakpoints.down('sm')]: {
        height: '100%',
        left: '-50px',
        width: 'calc(100% + 200px)',
      },
    }
  },
  mainScreenInfoIn: {
    position: 'relative',
  },
  mainScreenTitle: {
    color: "#fff",
  },
  mainScreenSlider: {
    height: '100%',
  },
  mainScreenItem: {
    position: 'relative',
    paddingTop: '100px',
    paddingLeft: '65px',
    minHeight: 'calc(100vh - 80px)',
    [theme.breakpoints.down('md')]: {
      minHeight: 600,
      paddingLeft: '45px',
      paddingTop: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto',
      paddingTop: 10,
      paddingLeft: 0,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  },
  mainScreenPicture: {
    objectPosition: 'bottom right',

    [theme.breakpoints.down('md')]: {
      objectPosition: 'bottom center',
    },
  },
  mainScreenPictureWrapper: {
    position: 'relative',
    width: 771,
    height: 1041,
    [theme.breakpoints.down('lg')]: {
      width: 591,
      height: 791,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 442,
    },
    [theme.breakpoints.down(495)]: {
      width: '60%',
      height: 342,
    },
    [theme.breakpoints.down(420)]: {
      height: 281,
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '90%',
      height: '100%',
      borderRadius: 40,
      boxShadow: '16px 15px 18px 11px #00000052',
      transform: 'translate(-50%, -50%)',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    }
  },
  mainScreenProgress: {
    position: 'absolute',
    content: '""',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: 4,
    height: '50%',

    [theme.breakpoints.down('md')]: {
      objectPosition: 'bottom center',
    },

    '&::before, &::after': {
      position: 'absolute',
      content: '""',
      left: 0,
      top: 0,
      width: 4,
    },
    '&::before': {
      height: '100%',
      backgroundColor: '#D1D1D1',
    },
  },
  mainScreenStroked: {
    '& svg': {
      position: 'absolute',
      width: '500px',
      height: '165px',
      left: '1rem',
      top: '140px',
      [theme.breakpoints.down(1899)]: {
        width: 320,
        height: 105,
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    }
  },
  mainScreenSliderIn: {
    position: 'relative',
    height: '100%',
    '& .swiper-pagination': {
      width: 291,
      height: 95,
      backgroundColor: '#fff',
      left: 'auto',
      bottom: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      [theme.breakpoints.down('sm')]: {
        width: 150,
        height: 40,
        left: '50%',
        right: 'auto',
        transform: 'translateX(-50%)',
      },
    },
    '& .swiper-pagination-bullet': {
      width: 51,
      height: 4,
      borderRadius: 0,
      backgroundColor: '#D1D1D1',
      transition: 'all .5s ease',
      opacity: 1,
      margin: 0,

      [theme.breakpoints.down('sm')]: {
        width: 15,
        height: 2,
      },
    },
    '& .swiper-pagination-bullet-active': {
      width: 69,
      backgroundColor: theme.palette.primary.main,

      [theme.breakpoints.down('sm')]: {
        width: '30px !important',
      }
    }
  },
  mainScreenItemSlide: {
    '&.swiper-slide-active $mainScreenProgress': {
      '&::after': {
        animation: 'progressbar 6s linear',
        backgroundColor: theme.palette.primary.main,
      }
    }
  },
  height: {
    height: '100%',
  }
});

export const MainScreen = () => {
  const cls = useStyles();
  return (
      <section className={cls.mainScreen}>
        <Container className={cls.mainScreenContainer}>
          <Grid container className={cls.mainScreenContainer}>
            <Grid item xs={12} md={7} className={cls.height}>
              <div className={cls.mainScreenStroked}>
                <MainScreenStroked />
              </div>
              <div className={cls.mainScreenSlider}>
                <Swiper
                    // install Swiper modules
                    modules={[Pagination, EffectFade, Autoplay]}
                    effect={'fade'}
                    speed={1500}
                    fadeEffect={{ 'crossFade': true }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{
                      'delay': 4500,
                      'disableOnInteraction': false,
                    }}
                    loop={true}
                    className={cls.mainScreenSliderIn}
                >
                  <SwiperSlide className={cls.mainScreenItemSlide}>
                    <div className={cls.mainScreenItem}>
                      <div className={cls.mainScreenProgress}></div>
                      <div className={cls.mainScreenPictureWrapper}>
                        <Image
                            src={'/img/main/bannerSliderPicture.png'}
                            alt="slider picture"
                            className={cls.mainScreenPicture}
                            layout="fill"
                            objectFit="contain"
                            priority={true}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={cls.mainScreenItemSlide}>
                    <div className={cls.mainScreenItem}>
                      <div className={cls.mainScreenProgress}></div>
                      <div className={cls.mainScreenPictureWrapper}>
                        <Image
                            src={'/img/main/bannerSliderPicture.png'}
                            alt="slider picture"
                            className={cls.mainScreenPicture}
                            layout="fill"
                            objectFit="contain"
                            priority={true}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={cls.mainScreenItemSlide}>
                    <div className={cls.mainScreenItem}>
                      <div className={cls.mainScreenProgress}></div>
                      <div className={cls.mainScreenPictureWrapper}>
                        <Image
                            src={'/img/main/bannerSliderPicture.png'}
                            alt="slider picture"
                            className={cls.mainScreenPicture}
                            layout="fill"
                            objectFit="contain"
                            priority={true}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Grid>
            <Grid item className={cls.mainScreenInfo} md={5}>
              <div className={cls.mainScreenInfoIn}>
                <Typography variant={'h1'} className="color-white">
                  <span className="color-red">Enter the new world</span> of datings solutions.
                </Typography>
                <Button
                    variant='contained'
                    color='primary'
                >
                  Start a project
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
  )
}
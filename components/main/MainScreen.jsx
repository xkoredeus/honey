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
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      backgroundColor: theme.palette.primary.darkGray,
      width: 'calc(100% + 2600px)',
      height: 'calc(100% + 800px)',
    }
  },
  mainScreenInfoIn: {
    position: 'relative',
  },
  mainScreenTitle: {
    color: "#fff",
  },
  mainScreenSlider: {
    paddingTop: '100px',
    paddingLeft: '65px',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },
  mainScreenItem: {
    display: 'flex',
  },
  mainScreenPicture: {
    maxWidth: '890px !important',
    height: 'auto !important',
  },
  mainScreenStroked: {
    '& svg': {
      position: 'absolute',
      width: '500px',
      height: '165px',
      left: '1rem',
      top: '140px',
    }
  },
  mainScreenSliderIn: {
    position: 'relative',
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
    },
    '& .swiper-pagination-bullet': {
      width: 55,
      height: 4,
      borderRadius: 0,
      backgroundColor: '#D1D1D1',
      transition: 'all .5s ease',
      opacity: 1,
      margin: 0,
      transform: 'scaleX(.8)',
    },
    '& .swiper-pagination-bullet-active': {
      transform: 'scaleX(1.2)',
      backgroundColor: theme.palette.primary.main,
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
            <Grid item xs={12} lg={7} className={cls.height}>
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
                      "delay": 2500,
                      "disableOnInteraction": false,
                    }}
                    loop={true}
                    className={cls.mainScreenSliderIn}
                >
                  <SwiperSlide>
                    <div className={cls.mainScreenItem}>
                      <Image
                          src="/img/main/bannerSliderPicture.png"
                          alt="slider picture"
                          className={cls.mainScreenPicture}
                          width={890}
                          height={879}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={cls.mainScreenItem}>
                      <Image
                          src="/img/main/bannerSliderPicture.png"
                          alt="slider picture"
                          className={cls.mainScreenPicture}
                          width={890}
                          height={879}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={cls.mainScreenItem}>
                      <Image
                          src="/img/main/bannerSliderPicture.png"
                          alt="slider picture"
                          className={cls.mainScreenPicture}
                          width={890}
                          height={879}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Grid>
            <Grid item className={cls.mainScreenInfo} xs={12} lg={5}>
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
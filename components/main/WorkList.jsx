import React from "react";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import theme from "../../src/assets/theme";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  workCard: {
    position: 'relative',
    color: "#fff",
    backgroundColor: theme.palette.primary.darkGray,
    borderRadius: 20,
    overflow: 'hidden',
    '&:not(:last-child)': {
      marginBottom: '5rem',
      [theme.breakpoints.down('lg')]: {
        marginBottom: '3rem',
      },
      [theme.breakpoints.down(1280)]: {
        marginBottom: '1.7143rem',
      },
    },
  },
  workDeviceWrapper: {
    position: 'absolute',
    height: '85%',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',

    [theme.breakpoints.down('md')]: {
      right: 0,
      left: 'auto',
      transform: 'translateY(-50%)',
    },
  },
  workDevice: {
    position: 'relative',
    height: '100%',
    width: '313px',
    marginRight: '4.5rem',

    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      width: 203,
      height: '60%',
    },
    [theme.breakpoints.down(612)]: {
      display: 'none',
    },

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
  workInfo: {
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '3.25rem',
    paddingRight: 'calc(3.25rem + 160px)',

    [theme.breakpoints.down('md')]: {
      padding: '1.5rem',
      paddingRight: 200,
    },
    [theme.breakpoints.down(612)]: {
      paddingRight: '1.5rem',
    },
  },
  workInfoDate: {
    fontFamily: 'Oakes-SemiBold',
  },
  workTestimonials: {
    padding: '3.25rem',
    paddingLeft: 'calc(3.25rem + 100px)',

    [theme.breakpoints.down('md')]: {
      padding: '1.5rem 1.5rem 2.5rem',
    },
  },
  workTestimonialsHeader: {
    color: '#484848',
    marginBottom: '4.5rem',
    [theme.breakpoints.down(1600)]: {
      marginBottom: '2.5rem',
    },
  },
  workTestimonialTitle: {
    marginBottom: '0.6rem',

    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  workTestimonialSubtitle: {
    fontFamily: 'Oakes-Regular',
    fontWeight: 400,
    color: theme.palette.text.lightGray,
    [theme.breakpoints.down('md')]: {
      marginBottom: 0,
    },
  },
  workLogo: {
    position: 'relative',
    width: 158,
    height: 55,
    [theme.breakpoints.down('sm')]: {
      width: 90,
      height: 30,
    },
  },
})

export const WorkList = () => {
  const cls = useStyles();
  return (
      <>
        <Grid container className={cls.workCard}>
          <div className={cls.workDeviceWrapper}>
            <div className={cls.workDevice}>
              <Image
                  src="/img/main/workDevice1.png"
                  alt="case device"
                  objectFit="contain"
                  layout="fill"
              />
            </div>
          </div>
          <Grid item xs={12} lg={6}>
            <div className={cls.workInfo} style={{
              backgroundImage: 'url("img/main/workBackground1.jpg")'
            }}>
              <div className={cls.workInfoTop}>
                <Box sx={{mb: '1.8rem'}} className={cls.workLogo}>
                  <Image
                      src="/img/main/workLogo.png"
                      alt="case logotype"
                      layout="fill"
                      objectFit="contain"
                  />
                </Box>
              </div>
              <div className={cls.workInfoBottom}>
                <div className={cls.workInfoDate}>
                  <Typography variant={'h5'}>
                    2020
                  </Typography>
                </div>
                <Typography variant={'h3'}>
                  Finde Dein Abenteuer
                </Typography>
                <Box sx={{mb: '1.8rem'}}>
                  <Typography>
                    Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc, consequat vel aliquam vitae, porta ac mi. Integer commodo sapien lacus, nec interdum nisi vehicula aliquam. Aliquam enim lorem,
                  </Typography>
                </Box>
                <Button
                    variant='contained'
                    color='secondary'
                >
                  See full case
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className={cls.workTestimonials}>
              <div className={cls.workTestimonialsHeader}>
                <Typography variant={'h3'}>
                  Delivered Values:
                </Typography>
              </div>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <div className={cls.workTestimonial}>
                    <Typography className={cls.workTestimonialTitle} variant={'h3'}>
                      $1million
                    </Typography>
                    <Typography className={cls.workTestimonialSubtitle} variant={'h5'}>
                      Guarantee
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={cls.workTestimonial}>
                    <Typography className={cls.workTestimonialTitle} variant={'h3'}>
                      $1,413,650
                    </Typography>
                    <Typography className={cls.workTestimonialSubtitle} variant={'h5'}>
                      Total jackpot raised
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={cls.workTestimonial}>
                    <Typography className={cls.workTestimonialTitle} variant={'h3'}>
                      $82,705
                    </Typography>
                    <Typography className={cls.workTestimonialSubtitle} variant={'h5'}>
                      Average jackpot
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={cls.workTestimonial}>
                    <Typography className={cls.workTestimonialTitle} variant={'h3'}>
                      1609%
                    </Typography>
                    <Typography className={cls.workTestimonialSubtitle} variant={'h5'}>
                      An increase of
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={cls.workTestimonial}>
                    <Typography className={cls.workTestimonialTitle} variant={'h3'}>
                      $82,705
                    </Typography>
                    <Typography className={cls.workTestimonialSubtitle} variant={'h5'}>
                      Average jackpot
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={cls.workTestimonial}>
                    <Typography className={cls.workTestimonialTitle} variant={'h3'}>
                      1609%
                    </Typography>
                    <Typography className={cls.workTestimonialSubtitle} variant={'h5'}>
                      An increase of
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Grid container className={cls.workCard}>
          <div className={cls.workDeviceWrapper}>
            <div className={cls.workDevice}>
              <Image
                  src="/img/main/workDevice2.png"
                  alt="case device"
                  objectFit="contain"
                  layout="fill"
                  priority={true}
              />
            </div>
          </div>
          <Grid item xs={12} lg={6}>
            <div className={cls.workInfo} style={{
              backgroundImage: 'url("img/main/workBackground2.jpg")'
            }}>
              <div className={cls.workInfoTop}>
                <Box sx={{mb: '1.8rem'}} className={cls.workLogo}>
                  <Image
                      src="/img/main/workLogo.png"
                      alt="case logotype"
                      layout="fill"
                      objectFit="contain"
                      priority={true}
                  />
                </Box>
              </div>
              <div className={cls.workInfoBottom}>
                <div className={cls.workInfoDate}>
                  <Typography variant={'h5'}>
                    2020
                  </Typography>
                </div>
                <Typography variant={'h3'}>
                  Finde Dein Abenteuer
                </Typography>
                <Box sx={{mb: '1.8rem'}}>
                  <Typography>
                    Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc, consequat vel aliquam vitae, porta ac mi. Integer commodo sapien lacus, nec interdum nisi vehicula aliquam. Aliquam enim lorem,
                  </Typography>
                </Box>
                <Button
                    variant='contained'
                    color='secondary'
                >
                  See full case
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className={cls.workTestimonials}>
              <div className={cls.workTestimonialsHeader}>
                <Typography variant={'h3'}>
                  Delivered Values:
                </Typography>
              </div>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <div className={cls.workTestimonial}>
                    <Typography className={cls.workTestimonialTitle} variant={'h3'}>
                      $1million
                    </Typography>
                    <Typography className={cls.workTestimonialSubtitle} variant={'h5'}>
                      Guarantee
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={cls.workTestimonial}>
                    <Typography className={cls.workTestimonialTitle} variant={'h3'}>
                      $1,413,650
                    </Typography>
                    <Typography className={cls.workTestimonialSubtitle} variant={'h5'}>
                      Total jackpot raised
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={cls.workTestimonial}>
                    <Typography className={cls.workTestimonialTitle} variant={'h3'}>
                      $82,705
                    </Typography>
                    <Typography className={cls.workTestimonialSubtitle} variant={'h5'}>
                      Average jackpot
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={cls.workTestimonial}>
                    <Typography className={cls.workTestimonialTitle} variant={'h3'}>
                      1609%
                    </Typography>
                    <Typography className={cls.workTestimonialSubtitle} variant={'h5'}>
                      An increase of
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={cls.workTestimonial}>
                    <Typography className={cls.workTestimonialTitle} variant={'h3'}>
                      $82,705
                    </Typography>
                    <Typography className={cls.workTestimonialSubtitle} variant={'h5'}>
                      Average jackpot
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={cls.workTestimonial}>
                    <Typography className={cls.workTestimonialTitle} variant={'h3'}>
                      1609%
                    </Typography>
                    <Typography className={cls.workTestimonialSubtitle} variant={'h5'}>
                      An increase of
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </>
  )
}
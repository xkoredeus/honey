import React, {useLayoutEffect, useRef, useState} from "react";

import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Section} from "../shared";
import {BenefitsStroked, ChevronDown} from "../shared/Svg";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import theme from "../../src/assets/theme";
import Link from "next/link";

import cx from "clsx";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const useStyles = makeStyles({
  benefits: {
    position: 'relative',
    backgroundColor: theme.palette.primary.darkGray,
  },
  benefitsTitleWrapper: {
    position: 'relative',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
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
      height: 'auto',
      top: '50%',
      left: '-2.8rem',
      transform: 'translateY(-50%)',

      [theme.breakpoints.down(1899)]: {
        width: 90,
      },

      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    }
  },
  benefitsPicture: {
    position: 'relative',
    height: '100%',
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
      [theme.breakpoints.down(1700)]: {
        height: '80%',
      },
    }
  },
  benefitsTitle: {
    color: '#fff',
  },
  benefitsCardList: {
    position: 'relative',
    minHeight: 500,
    [theme.breakpoints.down('lg')]: {
      minHeight: 430,
    },
  },
  benefitsCardWrapper: {
    paddingLeft: '5rem',
    [theme.breakpoints.down(1600)]: {
      paddingLeft: '2.6rem',
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
    },
  },
  benefitsCard: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: '3.75rem',
    visibility: 'hidden',
    opacity: 0,
    transition: '.3s all ease',
    transform: 'scale(.8) translateY(10px) !important',
    [theme.breakpoints.down(1600)]: {
      padding: '2.5rem',
    },
    [theme.breakpoints.down(1280)]: {
      padding: '1.5rem',
    },
  },
  benefitsCardActive: {
    visibility: 'visible',
    opacity: 1,
    transform: 'scale(1) translateY(0) !important',

  },
  benefitsCardDescription: {
    color: '#767676',
  },
  benefitsPoints: {
    minHeight: 400,
    marginTop: '10px',

    [theme.breakpoints.down('lg')]: {
      paddingLeft: '1.5rem',
      minHeight: 350,
    },

    [theme.breakpoints.down('md')]: {
      minHeight: 300,
    },

    [theme.breakpoints.down('xs')]: {
      height: 290,
      paddingLeft: 0,
      paddingTop: '1.5rem',
    },
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
    },
    '&:not(:last-child)': {
      marginBottom: '2rem',
    }
  },
  benefitsPointActive: {
    color: theme.palette.primary.main,
    '&::before': {
      width: 16,
      backgroundColor: theme.palette.primary.main,
    },
    '& span': {
      transform: 'translateX(0.7rem)',
    },
  },

  desktop: {
    [theme.breakpoints.down(768)]: {
      display: 'none',
    },
  },
  mobile: {
    color: '#fff',
    [theme.breakpoints.up(768)]: {
      display: 'none',
    },
    '& .MuiAccordionSummary-content, & .MuiAccordionSummary-content.Mui-expanded': {
      margin: 0,
    },
    '& .MuiAccordionSummary-expandIcon': {
      position: 'relative',
      width: 30,
      height: 30,
      padding: 0,
      '& svg': {
        marginRight: 0,
      },
      '& .MuiTouchRipple-root': {
        display: 'none',
      },
    },
    '& .MuiIconButton-edgeEnd': {
      marginRight: 0,
    },
    '& .MuiAccordion-root.Mui-expanded': {
      margin: 0,
    },
  },
  accordionTitle: {
    color: '#AEAEAE',
    fontSize: '1.1rem',
    backgroundColor: '#454545',
    padding: '0.7rem',
    borderBottom: '1px solid #5C5C5C',
    minHeight: 'unset !important',
    '&.Mui-expanded': {
      color: '#fff',
      backgroundColor: theme.palette.primary.main,
    },
  },
  accordionTitleIn: {
    fontSize: '1.1rem',
    fontFamily: 'Oakes-Medium',
  },
  accordionIn: {
    backgroundColor: '#525252',
    padding: '1rem',
    display: 'flex',
    color: '#fff',
    flexDirection: 'column',
  },
  accordionText: {
    marginBottom: '1rem',
  },
});

export const Benefits = () => {
  const cls = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  gsap.registerPlugin(ScrollTrigger);
  const [step, setStep] = useState(1);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const tl1 = gsap.timeline().to(
        ref.current.querySelector('.first-card'),
        {
          x: 0,
          onStart: setStep,
          onStartParams: [1],
          onReverseComplete: setStep,
          onReverseCompleteParams: [1],
        },
    )

    const tl2 = gsap.timeline().to(
        ref.current.querySelector('.second-card'),
        {
          x: 0,
          onStart: setStep,
          onStartParams: [2],
          onReverseComplete: setStep,
          onReverseCompleteParams: [2],
        },
    )

    const tl3 = gsap.timeline().to(
        ref.current.querySelector('.third-card'),
        {
          x: 0,
          onStart: setStep,
          onStartParams: [3],
          onReverseComplete: setStep,
          onReverseCompleteParams: [3],
        },
    )

    const tl4 = gsap.timeline().to(
        ref.current.querySelector('.fourth-card'),
        {
          x: 0,
          onStart: setStep,
          onStartParams: [4],
          onReverseComplete: setStep,
          onReverseCompleteParams: [4],
        },
    )

    const tl5 = gsap.timeline().to(
        ref.current.querySelector('.fifth-card'),
        {
          x: 0,
          onStart: setStep,
          onStartParams: [5],
          onReverseComplete: setStep,
          onReverseCompleteParams: [5],
        },
    )

    const tl6 = gsap.timeline().to(
        ref.current.querySelector('.fifth-card'),
        {
          x: 0,
        },
    )

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: '50% 49%',
        end: '+=2000 100px',
        toggleActions: 'play none none reverse',
        markers: false,
        pin: true,
        scrub: true,
        anticipatePin: 1,
      },
    });

    tl.add(tl1, '+=3')
    tl.add(tl2, '+=5')
    tl.add(tl3, '+=7')
    tl.add(tl4, '+=9')
    tl.add(tl5, '+=11')
    tl.add(tl6, '+=13')
  }, [])



  return (
      <section className={cls.benefits} ref={ref}>
        <Container>
          {/* desktop version */}
          <Grid container className={cls.desktop}>
            <Grid item md={false} lg={3}>
              <Section classes={cls.benefitsTitleWrapper} small>
                <div className={cls.benefitsStroked}>
                  <BenefitsStroked />
                </div>
                <div className={cls.benefitsPicture}>
                  <Image
                      src="/img/main/benefitsPicture.png"
                      alt="benefits device"
                      objectFit="contain"
                      layout="responsive"
                      priority={true}
                      width={313}
                      height={542}
                  />
                </div>
              </Section>
            </Grid>
            <Grid item xs={12} lg={9}>
              <Section small classes={cls.benefitsCardWrapper}>
                <div className={cls.benefitsTitle}>
                  <Typography variant={'h2'}>
                    What We Do
                  </Typography>
                </div>
                <Grid container className={cls.container}>
                  <Grid item xs={12} sm={7} lg={7}>
                    <div className={cls.benefitsCardList}>
                      <div className={cx(cls.benefitsCard, step === 1 ? cls.benefitsCardActive : "", 'first-card')}>
                        <Typography variant={'h4'}>
                          We make dating business tasks
                        </Typography>
                        <Box sx={{mb: '1.8rem'}}>
                          <Typography className={cls.benefitsCardDescription}>
                            Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.
                          </Typography>
                        </Box>
                        <Link
                            href={'/contacts#feedback'}
                        >
                          <a>
                            <Button
                                variant='contained'
                                color='primary'
                            >
                              Start a project
                            </Button>
                          </a>
                        </Link>
                      </div>
                      <div className={cx(cls.benefitsCard, step === 2 ? cls.benefitsCardActive : "", 'second-card')}>
                        <Typography variant={'h4'}>
                          We make apps for real dates
                        </Typography>
                        <Box sx={{mb: '1.8rem'}}>
                          <Typography className={cls.benefitsCardDescription}>
                            Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum
                          </Typography>
                        </Box>
                        <Link
                            href={'/contacts#feedback'}
                        >
                          <a>
                            <Button
                                variant='contained'
                                color='primary'
                            >
                              Start a project
                            </Button>
                          </a>
                        </Link>
                      </div>
                      <div className={cx(cls.benefitsCard, step === 3 ? cls.benefitsCardActive : "",'third-card')}>
                        <Typography variant={'h4'}>
                          We make landings and templates
                        </Typography>
                        <Box sx={{mb: '1.8rem'}}>
                          <Typography className={cls.benefitsCardDescription}>
                            Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.
                          </Typography>
                        </Box>
                        <Link
                            href={'/contacts#feedback'}
                        >
                          <a>
                            <Button
                                variant='contained'
                                color='primary'
                            >
                              Start a project
                            </Button>
                          </a>
                        </Link>
                      </div>
                      <div className={cx(cls.benefitsCard, step === 4 ? cls.benefitsCardActive : "", 'fourth-card')}>
                        <Typography variant={'h4'}>
                          We made mail inboxes and domains
                        </Typography>
                        <Box sx={{mb: '1.8rem'}}>
                          <Typography className={cls.benefitsCardDescription}>
                            Velit enim nulla nisi deserunt minim dolor ipsum eu.
                            Velit enim nulla nisi deserunt minim dolor ipsum eu.
                            Velit enim nulla nisi deserunt minim dolor ipsum eu.
                          </Typography>
                        </Box>
                        <Link
                            href={'/contacts#feedback'}
                        >
                          <a>
                            <Button
                                variant='contained'
                                color='primary'
                            >
                              Start a project
                            </Button>
                          </a>
                        </Link>
                      </div>
                      <div className={cx(cls.benefitsCard, step === 5 ? cls.benefitsCardActive : "", 'fifth-card')}>
                        <Typography variant={'h4'}>
                          We know your business needs
                        </Typography>
                        <Box sx={{mb: '1.8rem'}}>
                          <Typography className={cls.benefitsCardDescription}>
                            Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.
                          </Typography>
                        </Box>
                        <Link
                            href={'/contacts#feedback'}
                        >
                          <a>
                            <Button
                                variant='contained'
                                color='primary'
                            >
                              Start a project
                            </Button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xl={1} xs={false}/>
                  <Grid item xs={12} sm={5} lg={5} xl={4}>
                    <div
                        className={cls.benefitsPoints}
                    >
                      <div className={cx(cls.benefitsPoint,step === 1 ? cls.benefitsPointActive : "",'first-point')} onClick={() => setStep(1)}>
                        <span>We make dating business tasks</span>
                      </div>
                      <div className={cx(cls.benefitsPoint,step === 2 ? cls.benefitsPointActive : "",'second-point')} onClick={() => setStep(2)}>
                        <span>We make apps for real dates</span>
                      </div>
                      <div className={cx(cls.benefitsPoint,step === 3 ? cls.benefitsPointActive : "",'third-point')} onClick={() => setStep(3)}>
                        <span>We make landings and templates</span>
                      </div>
                      <div className={cx(cls.benefitsPoint,step === 4 ? cls.benefitsPointActive : "",'fourth-point')} onClick={() => setStep(4)}>
                        <span>We made mail inboxes and domains</span>
                      </div>
                      <div className={cx(cls.benefitsPoint,step === 5 ? cls.benefitsPointActive : "",'fifth-point')} onClick={() => setStep(5)}>
                        <span>We know your business needs</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Section>
            </Grid>
          </Grid>
          {/* mobile version */}
          <Section small classes={cls.mobile}>
            <div className={cls.mobileTitle}>
              <Typography variant={'h2'}>
                What We Do
              </Typography>
            </div>
            <div>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ChevronDown />}
                    aria-controls="panel1a-content"
                    className={cls.accordionTitle}
                >
                  <Typography className={cls.accordionTitleIn}>We make dating business tasks</Typography>
                </AccordionSummary>
                <AccordionDetails className={cls.accordionIn}>
                  <Typography className={cls.accordionText}>
                    Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.
                  </Typography>
                  <Link
                      href={'/contacts#feedback'}
                  >
                    <a>
                      <Button
                          variant='contained'
                          color='primary'
                      >
                        Start a project
                      </Button>
                    </a>
                  </Link>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ChevronDown />}
                    aria-controls="panel1a-content"
                    className={cls.accordionTitle}
                >
                  <Typography className={cls.accordionTitleIn}>We make apps for real dates</Typography>
                </AccordionSummary>
                <AccordionDetails className={cls.accordionIn}>
                  <Typography className={cls.accordionText}>
                    Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.
                  </Typography>
                  <Link
                      href={'/contacts#feedback'}
                  >
                    <a>
                      <Button
                          variant='contained'
                          color='primary'
                      >
                        Start a project
                      </Button>
                    </a>
                  </Link>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ChevronDown />}
                    aria-controls="panel1a-content"
                    className={cls.accordionTitle}
                >
                  <Typography className={cls.accordionTitleIn}>We make landings and templates</Typography>
                </AccordionSummary>
                <AccordionDetails className={cls.accordionIn}>
                  <Typography className={cls.accordionText}>
                    Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.
                  </Typography>
                  <Link
                      href={'/contacts#feedback'}
                  >
                    <a>
                      <Button
                          variant='contained'
                          color='primary'
                      >
                        Start a project
                      </Button>
                    </a>
                  </Link>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ChevronDown />}
                    aria-controls="panel1a-content"
                    className={cls.accordionTitle}
                >
                  <Typography className={cls.accordionTitleIn}>We made mail inboxes and domains</Typography>
                </AccordionSummary>
                <AccordionDetails className={cls.accordionIn}>
                  <Typography className={cls.accordionText}>
                    Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.
                  </Typography>
                  <Link
                      href={'/contacts#feedback'}
                  >
                    <a>
                      <Button
                          variant='contained'
                          color='primary'
                      >
                        Start a project
                      </Button>
                    </a>
                  </Link>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ChevronDown />}
                    aria-controls="panel1a-content"
                    className={cls.accordionTitle}
                >
                  <Typography className={cls.accordionTitleIn}>We know your business needs</Typography>
                </AccordionSummary>
                <AccordionDetails className={cls.accordionIn}>
                  <Typography className={cls.accordionText}>
                    Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu. minim dolor ipsum eu. Magna excepteur fugiat amet aliquip excepteur officia amet id do non  Velit enim nulla nisi deserunt minim dolor ipsum eu.
                  </Typography>
                  <Link
                      href={'/contacts#feedback'}
                  >
                    <a>
                      <Button
                          variant='contained'
                          color='primary'
                      >
                        Start a project
                      </Button>
                    </a>
                  </Link>
                </AccordionDetails>
              </Accordion>
            </div>
          </Section>
        </Container>
      </section>
  )
}
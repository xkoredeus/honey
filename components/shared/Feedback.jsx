import React, {useState} from "react";

import {makeStyles, Container, Grid, Typography, Box, TextField, Button, CircularProgress} from "@material-ui/core";


import {Section} from "./Section";
import {MailIcon, PhoneIcon} from "./Svg";
import theme from "../../src/assets/theme";

import { useForm } from "react-hook-form";
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";

const useStyles = makeStyles({
  feedbackSubtitle: {
    color: '#767676',
    '& > *': {
      fontWeight: '400',
    },
  },
  feedbackLink: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.125rem',
    fontFamily: 'Oakes-Medium',

    '&:hover': {
      '& $feedbackLinkIcon': {
        backgroundColor: theme.palette.primary.darkGray,
      }
    },
  },
  feedbackLinkIcon: {
    width: 80,
    height: 80,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    marginRight: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.5s all ease',
    [theme.breakpoints.down(1600)]: {
      width: 60,
      height: 60,
    },
    [theme.breakpoints.down(1280)]: {
      width: 40,
      height: 40,
      marginRight: '0.875rem',
      '& svg': {
        maxWidth: 17,
      }
    },
  },

  rootDark: {
    color: '#fff',
    backgroundColor: theme.palette.text.primary,

    '& .MuiFormLabel-root': {
      color: theme.palette.text.lightGray,
    },
    '& .MuiInput-underline:after, & .MuiInput-underline:before, & .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: theme.palette.text.lightGray,
    }
  },

  feedbackTitle: {
    marginBottom: '.5rem',

    [theme.breakpoints.down('md')]: {
      marginBottom: '.3rem',
    },
  },

  feedbackRow: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  feedbackCheckbox: {
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',

    marginRight: '1rem',
    marginBottom: '1rem',

    [theme.breakpoints.down('md')]: {
      marginRight: '.5rem',
      marginBottom: '.5rem',
    },

    '& input': {
      position: 'absolute',
      visibility: 'hidden',
      zIndex: '-1',

      '&:checked ~ $feedbackCheckboxIn': {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      }
    },
  },
  feedbackCheckboxIn: {
    fontSize: 16,
    fontFamily: 'Oakes-Medium',
    padding: '.6rem 1.2rem',
    borderRadius: 45,
    border: '1px solid #D1D1D1',
    transition: 'all .5s ease',

    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },

    '&:hover': {
      color: '#aaa',
    }
  },
  progress: {
    width: '15px !important',
    height: '15px !important',
    marginLeft: 8,
  }
})

export const Feedback = ({backgroundDark, showCheckboxes = false, title = "Interested in Collaboration?" }) => {
  const cls = useStyles();
  const inputProps = !backgroundDark && {
        color: "secondary",
    };

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    const preparedData = {
      ...(data?.services && {
        services: data.services
      }),
      ...(data?.budget && {
        budget: data.budget
      }),
      ...(data?.name && {
        name: data.name
      }),
      ...(data?.phone && {
        phone: data.phone
      }),
      ...(data?.email && {
        email: data.email
      }),
      ...(data?.company && {
        company: data.company
      }),
      ...(data?.details && {
        details: data.details
      }),
      source: "honeydatingsolutions",
    }

    setIsLoading(true);
    axios
      .post('https://f5vvtbgooh.execute-api.us-east-1.amazonaws.com/prod/moewe-contactform', preparedData)
      .then(() => {
        setTimeout(() => {
          setIsSubmited(true);
          reset();
        }, 700)
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 700)
      })
  };

  return (
      <Section classes={`${cls.root} ${backgroundDark ? cls.rootDark : ""}`}>
        <Container>
          <Grid container>
            <Grid item lg={5} xl={4}>
              <Typography variant={'h2'}>
                {title}
              </Typography>
              <Box className={cls.feedbackSubtitle} sx={{marginBottom: {xs: '1.5rem', md: '2rem', lg: '3rem'}}}>
                <Typography variant={'h5'} >
                  Contact us to discuss your project
                </Typography>
              </Box>
              <Box sx={{mb: '1.5rem'}}>
                <a className={cls.feedbackLink} href="tel:5145967629">
                  <div className={cls.feedbackLinkIcon}>
                    <PhoneIcon />
                  </div>
                  <span>514-596-7629</span>
                </a>
              </Box>
              <Box sx={{mb: '1.5rem'}}>
                <a className={cls.feedbackLink} href="mailto:dating@service.net">
                  <div className={cls.feedbackLinkIcon}>
                    <MailIcon />
                  </div>
                  <span>dating@service.net</span>
                </a>
              </Box>
            </Grid>
            <Grid item xs={false} xl={2} />
            <Grid item lg={6}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                  {showCheckboxes ? (
                      <>
                        <Grid item xs={12}>
                          <div className={cls.feedbackTitle}>
                            Services
                          </div>
                          <div className={cls.feedbackRow}>
                            <label className={cls.feedbackCheckbox}>
                              <input
                                type="radio"
                                name="services"
                                value="Web App"
                                {...register("services")}
                              />
                              <span className={cls.feedbackCheckboxIn}>Web app</span>
                            </label>
                            <label className={cls.feedbackCheckbox}>
                              <input
                                type="radio"
                                name="services"
                                value="Website"
                                {...register("services")}
                              />
                              <span className={cls.feedbackCheckboxIn}>Website</span>
                            </label>
                            <label className={cls.feedbackCheckbox}>
                              <input
                                type="radio"
                                name="services"
                                value="Mobile Application"
                                {...register("services")}
                              />
                              <span className={cls.feedbackCheckboxIn}>Mobile Application</span>
                            </label>
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div className={cls.feedbackTitle}>
                            Budget in USD
                          </div>
                          <div className={cls.feedbackRow}>
                            <label className={cls.feedbackCheckbox}>
                              <input
                                type="radio"
                                name="budget"
                                value="Less than 5K"
                                {...register("budget")}
                              />
                              <span className={cls.feedbackCheckboxIn}>Less than 5K</span>
                            </label>
                            <label className={cls.feedbackCheckbox}>
                              <input
                                type="radio"
                                name="budget"
                                value="5K - 10K"
                                {...register("budget")}
                              />
                              <span className={cls.feedbackCheckboxIn}>5K - 10K</span>
                            </label>
                            <label className={cls.feedbackCheckbox}>
                              <input
                                type="radio"
                                name="budget"
                                value="10K - 50K"
                                {...register("budget")}
                              />
                              <span className={cls.feedbackCheckboxIn}>10K - 50K</span>
                            </label>
                            <label className={cls.feedbackCheckbox}>
                              <input
                                type="radio"
                                name="budget"
                                value="More than 50K"
                                {...register("budget")}
                              />
                              <span className={cls.feedbackCheckboxIn}>More than 50K</span>
                            </label>
                          </div>
                        </Grid>
                      </>
                  ) : ""}
                  <Grid item xs={12} sm={6}>
                    <TextField
                        label="Full Name"
                        placeholder="Enter your name"
                        {...inputProps}
                        required
                        fullWidth
                        focused
                        {...register("name", { required: true })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                        label="Phone Number"
                        {...inputProps}
                        placeholder="Enter your number"
                        fullWidth
                        focused
                        {...register("phone", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                        label="E-mail"
                        {...inputProps}
                        placeholder="Enter your e-mail"
                        required
                        fullWidth
                        focused
                        {...register("email", { required: true })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                        label="Company"
                        {...inputProps}
                        placeholder="Enter your company name"
                        fullWidth
                        focused
                        {...register("company", { required: false })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                        label="Project Details"
                        {...inputProps}
                        placeholder="Write about your project"
                        required
                        multiline
                        rows={6}
                        fullWidth
                        focused
                        {...register("details", { required: true })}
                    />
                  </Grid>
                </Grid>
                <Box sx={{ mt: ['1.5rem', 'null', '2rem', '2.5rem']}}>
                  <Button
                      variant='contained'
                      color='primary'
                      type='submit'
                  >
                    {!isLoading ? 'Send message' : 'Sending'}
                    {isLoading && <CircularProgress className={cls.progress}/>}
                  </Button>
                </Box>
                <Snackbar
                    autoHideDuration={3000}
                    open={isSubmited}
                    message="Thank you for feedback!"
                    onClose={() => setIsSubmited(false)}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                />
              </form>
            </Grid>
          </Grid>
        </Container>
      </Section>
  )
}
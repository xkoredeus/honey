import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {MailIcon, PhoneIcon} from "./Svg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Section} from "./Section";
import React from "react";
import {makeStyles} from "@material-ui/core";
import theme from "../../src/assets/theme";

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
  }
})

export const Feedback = ({backgroundDark, showCheckboxes = false, title = "Interested in Collaboration?" }) => {
  const cls = useStyles();
  const inputProps = !backgroundDark && {
        color: "secondary",
    };
  return (
      <Section classes={`${cls.root} ${backgroundDark ? cls.rootDark : ""}`}>
        <Container>
          <Grid container>
            <Grid item lg={5} xl={3}>
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
            <Grid item xs={false} xl={3} />
            <Grid item lg={6}>
              <form>
                <Grid container spacing={4}>
                  {showCheckboxes ? (
                      <>
                        <Grid item xs={12}>
                          <div className={cls.feedbackTitle}>
                            Services
                          </div>
                          <div className={cls.feedbackRow}>
                            <label className={cls.feedbackCheckbox}>
                              <input type="radio" name="services" value="Web App"/>
                              <span className={cls.feedbackCheckboxIn}>Web app</span>
                            </label>
                            <label className={cls.feedbackCheckbox}>
                              <input type="radio" name="services" value="Website"/>
                              <span className={cls.feedbackCheckboxIn}>Website</span>
                            </label>
                            <label className={cls.feedbackCheckbox}>
                              <input type="radio" name="services" value="Mobile Application"/>
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
                              <input type="radio" name="budget" value="Less than 5K"/>
                              <span className={cls.feedbackCheckboxIn}>Less than 5K</span>
                            </label>
                            <label className={cls.feedbackCheckbox}>
                              <input type="radio" name="budget" value="5K - 10K"/>
                              <span className={cls.feedbackCheckboxIn}>5K - 10K</span>
                            </label>
                            <label className={cls.feedbackCheckbox}>
                              <input type="radio" name="budget" value="10K - 50K"/>
                              <span className={cls.feedbackCheckboxIn}>10K - 50K</span>
                            </label>
                            <label className={cls.feedbackCheckbox}>
                              <input type="radio" name="budget" value="More than 50K"/>
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
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                        label="Phone Number"
                        {...inputProps}
                        placeholder="Enter your number"
                        fullWidth
                        focused
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
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                        label="Company"
                        {...inputProps}
                        placeholder="Enter your company name"
                        fullWidth
                        focused
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
                    />
                  </Grid>
                </Grid>
                <Box sx={{ mt: ['1.5rem', 'null', '2rem', '2.5rem']}}>
                  <Button
                      variant='contained'
                      color='primary'
                  >
                    Send message
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Section>
  )
}
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
  }
})

export const Feedback = () => {
  const cls = useStyles();
  return (
      <Section classes={cls.feedback}>
        <Container>
          <Grid container>
            <Grid item lg={3}>
              <Typography variant={'h2'}>
                Interested in
                Collaboration?
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
            <Grid item lg={3} />
            <Grid item lg={6}>
              <form>
                <Grid container spacing={4}>
                  <Grid item lg={6}>
                    <TextField
                        label="Full Name"
                        color="secondary"
                        placeholder="Enter your name"
                        required
                        fullWidth
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                        label="Phone Number"
                        color="secondary"
                        placeholder="Enter your number"
                        fullWidth
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                        label="E-mail"
                        color="secondary"
                        placeholder="Enter your e-mail"
                        required
                        fullWidth
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                        label="Company"
                        color="secondary"
                        placeholder="Enter your company name"
                        fullWidth
                    />
                  </Grid>
                  <Grid item lg={12}>
                    <TextField
                        label="Project Details"
                        color="secondary"
                        placeholder="Write about your project"
                        required
                        multiline
                        rows={6}
                        fullWidth
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
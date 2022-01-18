import {Section} from "../shared";
import {Container, Grid, makeStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import theme from "../../src/assets/theme";
import {Modal} from "./Modal";

const useStyles = makeStyles({
  item: {
    '&:not(:last-child)': {
      marginBottom: '4rem',
      [theme.breakpoints.down('lg')]: {
        marginBottom: '3.5rem'
      },
      [theme.breakpoints.down('md')]: {
        marginBottom: '2rem'
      },
    }
  },
  title: {
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '0.5rem'
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%',
    },
  },
  location: {
    fontFamily: 'Oakes-Bold',
    color: '#767676',
  },
  list: {
    color: '#767676',
    margin: 0,
    paddingLeft: 18,
    '& li:not(:last-child)': {
      marginBottom: '0.5rem',
    }
  }
})

export const Vacancy = () => {
  const cls = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  return (
      <Section>
        <Container>
          <div className={cls.item}>
            <Grid container>
              <Grid item md={5} lg={7}>
                <Typography variant={'h2'} className={cls.title}>
                  Senior Sales Manager
                </Typography>
                <Box sx={{
                  marginBottom: {
                    xs: '1rem',
                    md: '1.5rem'
                  }}}
                >
                  <Typography className={cls.location}>USA, Toronto</Typography>
                </Box>
                <Box sx={{
                  marginBottom: {
                    xs: '1rem',
                    md: '0'
                  }}}
                >
                  <Button
                      variant='contained'
                      color='primary'
                      onClick={() => setIsOpen(true)}
                  >
                    Send CV
                  </Button>
                </Box>
              </Grid>
              <Grid item md={7} lg={5}>
                <ul className={cls.list}>
                  <li>Support global initiatives for creation of new adidas policies / Standard Operating Procedures (SOPs) and systems/tools (e.g. SMTT 2.0) in collaboration with internal and external parties</li>
                  <li>Execute and be business key user for (new) materials traceability systems/tools, coordinate with other key users across the company and proactively provide apparel business insights and share local requirements of the assigned geography / supply base</li>
                  <li>Drive local implementation of initiatives (e.g. the Sustainable Material Traceability SOP and SMTT 2.0 tool), onboard internal and external stakeholders and provide trainings as well as guidance for related processes or systems/tools</li>
                </ul>
              </Grid>
            </Grid>
          </div>
          <div className={cls.item}>
            <Grid container>
              <Grid item md={5} lg={7}>
                <Typography variant={'h2'} className={cls.title}>
                  Senior Frontend Developer
                </Typography>
                <Box sx={{
                  marginBottom: {
                    xs: '1rem',
                    md: '1.5rem'
                  }}}
                >
                  <Typography className={cls.location}>USA, Toronto</Typography>
                </Box>
                <Box sx={{
                  marginBottom: {
                    xs: '1rem',
                    md: '0'
                  }}}
                >
                  <Button
                      variant='contained'
                      color='primary'
                      onClick={() => setIsOpen(true)}
                  >
                    Send CV
                  </Button>
                </Box>
              </Grid>
              <Grid item md={7} lg={5}>
                <ul className={cls.list}>
                  <li>Support global initiatives for creation of new adidas policies / Standard Operating Procedures (SOPs) and systems/tools (e.g. SMTT 2.0) in collaboration with internal and external parties</li>
                  <li>Execute and be business key user for (new) materials traceability systems/tools, coordinate with other key users across the company and proactively provide apparel business insights and share local requirements of the assigned geography / supply base</li>
                  <li>Drive local implementation of initiatives (e.g. the Sustainable Material Traceability SOP and SMTT 2.0 tool), onboard internal and external stakeholders and provide trainings as well as guidance for related processes or systems/tools</li>
                </ul>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}/>
      </Section>
  )
}
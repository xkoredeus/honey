import React from "react";
import Link from "next/link";
import {makeStyles,Container} from "@material-ui/core";

import {Logo} from "./Logo";
import theme from "../../src/assets/theme";
import Grid from "@material-ui/core/Grid";
import {Mowe} from "./Svg";

const useStyles = makeStyles({
  root: {
    backgroundColor: theme.palette.text.primary,
  },
  rootRed: {
    backgroundColor: theme.palette.primary.main,
  },
  footerIn: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1.875rem',
    paddingBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  nav: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      marginTop: '1.5rem',
      flexWrap: 'wrap',
    },

    [theme.breakpoints.down(469)]: {
      flexDirection: 'column',
    },
  },
  navLink: {
    color: '#fff',
    transition: '.5s all ease',
    '&:not(:last-child)': {
      marginRight: '3.5rem',

      [theme.breakpoints.down('sm')]: {
        marginRight: '1.5rem',
      },

      [theme.breakpoints.down(469)]: {
        marginRight: 0,
        marginBottom: '0.75rem',
      },
    },
    '&:hover': {
      opacity: '.7',
    }
  },
  credentialsWrapper: {
    paddingBottom: 'calc(15px + 0.875rem)',
  },
  credentials: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    color: '#fff',
    transform: 'scale(0.9)',
    transition: '.3s all ease',

    '&:hover': {
      opacity: '.8',
    },

    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
    },

    '& span': {
      marginRight: 8,
      marginBottom: '-6px',

      [theme.breakpoints.down('md')]: {
        marginRight: 5,
        marginBottom: '-4px',
      },
    },
    '& svg': {
      width: 80,
      height: 18,
    },
  }
})

export const Footer = ({backgroundRed}) => {
  const cls = useStyles();
  return (
    <footer className={`${cls.root} ${backgroundRed ? cls.rootRed : ""}`}>
      <Container className={cls.footerIn}>
        <Logo footer darkCircle={backgroundRed}/>
        <nav className={cls.nav}>
          <div className={cls.navLink}>
            <Link href={'/careers'}>Careers</Link>
          </div>
          <div className={cls.navLink}>
            <Link href={'/about'}>What We Do</Link>
          </div>
          <div className={cls.navLink}>
            <Link href={'/team'}>Our Team</Link>
          </div>
          <div className={cls.navLink}>
            <Link href={'/cases'}>Our Cases</Link>
          </div>
          <div className={cls.navLink}>
            <Link href={'/contacts'}>Contact Us</Link>
          </div>
        </nav>
      </Container>
      <Container>
        <Grid container align={'center'} justifyContent={'center'} className={cls.credentialsWrapper}>
          <a href="https://moewe.studio/" target="_blank" rel="noreferrer" className={cls.credentials}>
            <span>Designed by</span> <Mowe />
          </a>
        </Grid>
      </Container>
    </footer>
)}
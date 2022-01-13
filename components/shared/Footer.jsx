import React from "react";
import Link from "next/link";
import {makeStyles,Container} from "@material-ui/core";

import {Logo} from "./Logo";
import theme from "../../src/assets/theme";

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
    paddingBottom: '1.875rem',
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
    </footer>
)}
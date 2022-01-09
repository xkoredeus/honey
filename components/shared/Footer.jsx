import {makeStyles} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {Logo} from "./Logo";
import React from "react";
import Link from "next/link";
import theme from "../../src/assets/theme";

const useStyles = makeStyles({
  root: {
    backgroundColor: theme.palette.text.primary,
  },
  footerIn: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1.875rem',
    paddingBottom: '1.875rem',
  },
  nav: {
    display: 'flex',
  },
  navLink: {
    color: '#fff',
    transition: '.5s all ease',
    '&:not(:last-child)': {
      marginRight: '3.5rem',
    },
    '&:hover': {
      opacity: '.7',
    }
  }
})

export const Footer = () => {
  const cls = useStyles();
  return (
    <footer className={cls.root}>
      <Container className={cls.footerIn}>
        <Logo footer />
        <nav className={cls.nav}>
          <div className={cls.navLink}>
            <Link href="/">Careers</Link>
          </div>
          <div className={cls.navLink}>
            <Link href="/">What We Do</Link>
          </div>
          <div className={cls.navLink}>
            <Link href="/">Our Team</Link>
          </div>
          <div className={cls.navLink}>
            <Link href="/">Our Cases</Link>
          </div>
          <div className={cls.navLink}>
            <Link href="/">Contact Us</Link>
          </div>
        </nav>
      </Container>
    </footer>
)}
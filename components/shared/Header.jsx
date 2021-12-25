import React from "react";
import {makeStyles} from "@material-ui/core";
import Link from "next/link";
import Container from "@material-ui/core/Container";
import {Logo} from "./Logo";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
  },
  headerIn: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '24px',
  },
  nav: {
    display: 'flex',
  },
  navLinkWrapper: {
    position: 'relative',
    '&:not(:last-child)': {
      marginRight: '3.5rem',
    }
  },
  navLinkDropdown: {
    position: 'absolute',
    left: 0,
    top: '100%',
    visibility: 'hidden',
    opacity: '0'
  },
  arr: {
    marginLeft: '6px',
  },
})

export const Header = () => {
  const cls = useStyles();
  return (
      <header className={cls.root}>
        <Container className={cls.headerIn}>
          <nav className={cls.nav}>
            <span className={cls.navLinkWrapper}>
              <Link href="/">
                <a>
                  <span>About us</span>
                  <svg className={cls.arr} width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L5 5L10 0H0Z" fill="#2A2A2A"/>
                  </svg>
                </a>
              </Link>
              <span className={cls.navLinkDropdown}>
                <Link href="/">
                  <a>Dropdown Item</a>
                </Link>
                <Link href="/">
                  <a>Dropdown Item</a>
                </Link>
                <Link href="/">
                  <a>Dropdown Item</a>
                </Link>
              </span>
            </span>
            <span className={cls.navLinkWrapper}>
              <Link href="/">Our cases</Link>
            </span>
            <span className={cls.navLinkWrapper}>
              <Link href="/">Contact Us</Link>
            </span>

          </nav>
          <Logo />
          <Button
              variant='contained'
              color='primary'
          >
            Start a project
          </Button>
        </Container>
      </header>
  )
}
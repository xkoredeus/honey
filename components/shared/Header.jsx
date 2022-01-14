import React, {useState} from "react";
import {makeStyles} from "@material-ui/core";
import Link from "next/link";
import Container from "@material-ui/core/Container";
import {Logo} from "./Logo";
import Button from "@material-ui/core/Button";
import {ArrowNext} from "./Svg";
import theme from "../../src/assets/theme";
import cx from "clsx";

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
    zIndex: 3,
    paddingTop: '24px',
    [theme.breakpoints.down('md')]: {
      paddingTop: '1rem',
    },
  },
  rootIn: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('xs')]: {
      height: 50,
    },
  },
  headerIn: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  headerLogo: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,

    [theme.breakpoints.down('xs')]: {
      left: 16,
      transform: 'translateY(-50%)',
    },
  },
  nav: {
    display: 'flex',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      marginBottom: '2rem',
    },
  },
  navLinkWrapper: {
    position: 'relative',
    '&:not(:last-child)': {
      marginRight: '3.5rem',
      [theme.breakpoints.down('md')]: {
        marginRight: '1.5rem',
      },

      [theme.breakpoints.down('xs')]: {
        marginRight: '0',
        marginBottom: '1.5rem',
      },
    },
    '&:hover $navLinkDropdown': {
      visibility: 'visible',
      opacity: 1,
      transform: 'translateY(0px)',
    }
  },
  arr: {
    marginLeft: 7,
    marginBottom: 2,
  },
  navLink: {
    transition: '.3s all ease',
    '&:hover': {
      opacity: '.8'
    },
  },
  navLinkDropdown: {
    position: 'absolute',
    left: 0,
    top: '100%',
    visibility: 'hidden',
    opacity: '0',
    transform: 'translateY(5px)',
    transition: '.3s all ease',
    paddingTop: '1rem',

    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      visibility: 'visible',
      opacity: 1,
      transform: 'translateY(0px)',
    },
  },
  navLinkDropdownIn: {
    width: 215,
    borderRadius: 10,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.6rem 1.5rem',
    boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.1)',

    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'transparent',
      boxShadow: 'unset',
      paddingTop: 0,
      paddingBottom: 0,
    }
  },
  navLinkDropdownLink: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    transition: '.3s all ease',
    '&:not(:last-child)': {
      borderBottom: '1px solid #AEAEAE',
    },
    '&:hover': {
      color: theme.palette.primary.main,
      '& svg': {
        fill: theme.palette.primary.main,
      }
    },
    '& svg': {
      width: 14,
      height: 14,
      transition: '.3s all ease',

      [theme.breakpoints.down('xs')]: {
        display: 'none',
      }
    }
  },
  menu: {
    width: '100%',
    transition: '.5s all ease',

    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      top: '-1rem',
      right: '100%',
      background: theme.palette.primary.gray,
      paddingTop: 80,
      paddingBottom: '2.5rem'
    },
    '&.menuActive': {
      right: 0,
      boxShadow: '0px 11px 10px 0px rgb(0 0 0 / 10%)',
    }
  },
  burger: {
    position: 'absolute',
    right: 16,
    width: 25,
    height: 28,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'none',
    zIndex: 3,

    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '&.burgerActive $burgerIn': {
      backgroundColor: 'transparent',
      '&::before': {
        top: 0,
        transform: 'rotate(45deg)',
      },
      '&::after': {
        bottom: 0,
        transform: 'rotate(-45deg)',
      }
    },
  },
  burgerIn: {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    height: 1,
    backgroundColor: theme.palette.text.primary,
    transition: '.5s all ease',
    '&::before, &::after': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: 1,
      left: 0,
      backgroundColor: theme.palette.text.primary,
      transition: '.5s all ease',
    },
    '&::before': {
      top: '-10px',
    },
    '&::after': {
      bottom: '-10px',
    }
  },
})

export const Header = () => {
  const cls = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <header className={cls.root}>
        <div className={cls.rootIn}>
          <div className={cls.headerLogo}>
            <Logo />
          </div>
          <button className={cx(cls.burger, menuOpen ? 'burgerActive' : '')} onClick={() => setMenuOpen(!menuOpen)}>
            <span className={cls.burgerIn} />
          </button>
          <div className={cx(cls.menu, menuOpen ? 'menuActive' : '')}>
            <Container className={cls.headerIn}>
              <nav className={cls.nav}>
                <span className={cls.navLinkWrapper}>
                  <Link href={'/about'}>
                    <a className={cls.navLink}>
                      <span>About us</span>
                      <svg className={cls.arr} width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L5 5L10 0H0Z" fill="#2A2A2A"/>
                      </svg>
                    </a>
                  </Link>
                  <span className={cls.navLinkDropdown}>
                    <span className={cls.navLinkDropdownIn}>
                      <Link href={'/team'}>
                        <a className={cls.navLinkDropdownLink}>
                          <span>Our Team</span>
                          <ArrowNext />
                        </a>
                      </Link>
                      <Link href={'/about'}>
                        <a className={cls.navLinkDropdownLink}>
                          <span>What We Do</span>
                          <ArrowNext />
                        </a>
                      </Link>
                      <Link href={'/careers'}>
                        <a className={cls.navLinkDropdownLink}>
                          <span>Careers</span>
                          <ArrowNext />
                        </a>
                      </Link>
                    </span>
                  </span>
                </span>
                    <span className={cls.navLinkWrapper}>
                  <Link href={'/cases'}>
                    <a className={cls.navLink}>Our cases</a>
                  </Link>
                </span>
                    <span className={cls.navLinkWrapper}>
                  <Link href={'/contacts'}>
                    <a className={cls.navLink}>Contact Us</a>
                  </Link>
                </span>
              </nav>
              <Button
                  variant='contained'
                  color='primary'
              >
                Start a project
              </Button>
            </Container>
          </div>
        </div>
      </header>
  )
}
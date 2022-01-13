import {ArrowNext, WorksStroked} from "../shared/Svg";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import {Section} from "../shared";
import React from "react";
import {makeStyles} from "@material-ui/core";
import theme from "../../src/assets/theme";
import {WorkList} from "./WorkList";

const useStyles = makeStyles({
  work: {
    position: 'relative',
    zIndex: 1,
  },
  workStroked: {
    '& svg': {
      position: 'absolute',
      width: 90,
      height: 1041,
      right: 0,
      bottom: '-320px',
      [theme.breakpoints.down(1899)]: {
        width: 65,
        height: 507,
        bottom: '-204px',
      },
      [theme.breakpoints.down(1700)]: {
        display: 'none',
      },
    }
  },
  workTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginBottom: '3rem',
    },
  },

  linkNext: {
    color: theme.palette.primary.main,
    fontFamily: 'Oakes-Medium',
    display: 'flex',
    alignItems: 'center',
    transition: '.3s all ease',

    '&:hover': {
      color: theme.palette.text.primary,
      '& svg': {
        fill: theme.palette.text.primary,
      }
    },

    '& svg': {
      width: 20,
      height: 14,
      fill: '#D2595D',
      marginLeft: '.7rem',
      transition: '.3s all ease',
    }
  },
})

export const Work = () => {
  const cls = useStyles();

  return (
      <Section classes={cls.work}>
        <div className={cls.workStroked}>
          <WorksStroked />
        </div>
        <Container>
          <div className={cls.workTop}>
            <Typography variant={'h1'}>
              Recent Cases
            </Typography>
            <Link href="/">
              <a className={cls.linkNext}>
                <span>See all cases</span>
                <ArrowNext />
              </a>
            </Link>
          </div>
          <WorkList />
        </Container>
      </Section>
  )
}
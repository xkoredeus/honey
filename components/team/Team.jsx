import React from "react";
import {Container, makeStyles, Typography} from "@material-ui/core";
import {Section} from "../shared";
import theme from "../../src/assets/theme";
import {Dude} from "./Dude";
import {TeamFisrtStroked, TeamSecondStroked} from "../shared/Svg";

const useStyles = makeStyles({
  root: {
    position: 'relative',
    background: 'linear-gradient(180deg, #2A2A2A 0%, #2A2A2A 60%, transparent 60.1%, transparent 100%);'
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'calc(360px - 1.5rem)',
    gridGap: '3rem',
    marginTop: '4rem',

    [theme.breakpoints.down('lg')]: {
      marginTop: '2rem',
      gridGap: '2rem',
      gridAutoRows: 'calc(250px - 1rem)',
    },

    [theme.breakpoints.down('md')]: {
      marginTop: '2rem',
      gridAutoRows: 'calc(180px - 0.5rem)',
      gridGap: '1rem',
    },

    [theme.breakpoints.down('sm')]: {
      gridAutoRows: 'auto',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridGap: '1rem',
    },

    '& > *:nth-child(1)': {
      gridRow: '2/4',
    },
    '& > *:nth-child(2)': {
      gridRow: '1/3',
    },
    '& > *:nth-child(3)': {
      gridRow: '2/4',
    },
    '& > *:nth-child(4)': {
      gridRow: '4/6',
    },
    '& > *:nth-child(5)': {
      gridRow: '3/5',
    },
    '& > *:nth-child(6)': {
      gridRow: '4/6',
    },
    '& > *:nth-child(7)': {
      gridColumn: '2/3',
      gridRow: '5/7',
    },


    [theme.breakpoints.down('sm')]: {
      '& > *':{
        gridRow: 'auto !important',
        gridColumn: 'auto !important',
      },
      '& > *:nth-child(even)': {
        transform: 'translateY(180px)',
      }
    }
  },
  firstStroked: {
    position: 'absolute',
    left: 5,
    top: '10%',
    '& svg': {
      width: 121,
      height: 390,
      [theme.breakpoints.down(1899)]: {
        width: 72,
        height: 239,
      },
      [theme.breakpoints.down(1700)]: {
        display: 'none',
      },
    },
  },
  secondStroked: {
    position: 'absolute',
    top: '30%',
    right: 0,
    '& svg': {
      width: 145,
      height: 1261,
      [theme.breakpoints.down(1899)]: {
        width: 72,
        height: 550,
      },
      [theme.breakpoints.down(1700)]: {
        display: 'none',
      },
    },
  },
})

export const Team = () => {
  const teamArray = [
    {
      title: 'Sergey Pikalev',
      position: 'Founder',
      src: 'img/team/team1.jpg',
    },
    {
      title: 'Alan Trubkin',
      position: 'Designer',
      src: 'img/team/team2.jpg',
    },
    {
      title: 'Jimmy Bower',
      position: 'Developer',
      src: 'img/team/team3.jpg',
    },
    {
      title: 'Jane Kiplin',
      position: 'Mail Expert',
      src: 'img/team/team4.jpg',
    },
    {
      title: 'Barry Ivanov',
      position: 'Project Manager',
      src: 'img/team/team5.jpg',
    },
    {
      title: 'Tim Huges',
      position: 'Developer',
      src: 'img/team/team6.jpg',
    },
    {
      title: 'Mery Rickland',
      position: 'Designer',
      src: 'img/team/team7.jpg',
    },
  ]

  const cls = useStyles();
  return (
      <Section classes={cls.root}>
        <Container>
          <Typography variant={'h2'} className={cls.offerTitle} align="center">
            <span className="color-white">Meet our team</span>
          </Typography>
          <div className={cls.grid}>
            {teamArray.map(({title, position, src}, index) =>
              <Dude title={title} position={position} src={src} key={index}/>
            )}
          </div>
        </Container>
        <div className={cls.firstStroked}>
          <TeamFisrtStroked />
        </div>
        <div className={cls.secondStroked}>
          <TeamSecondStroked />
        </div>
      </Section>
  )
}
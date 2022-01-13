import {makeStyles, Typography} from "@material-ui/core";
import React from "react";
import theme from "../../src/assets/theme";

const useStyles = makeStyles({
  item: {
    position: 'relative',
    padding: '2.5rem',
    height: 720,
    overflow: 'hidden',

    display: 'flex',
    alignItems: 'flex-end',

    '&:hover::before': {
      height: '100%',
    },
    '&:hover $picture': {
      transform: 'scale(1.05)',
    },

    [theme.breakpoints.down('lg')]: {
      height: 500,
      padding: '2rem',
    },

    [theme.breakpoints.down('md')]: {
      height: 360,
      padding: '1rem',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '120%',
      background: 'linear-gradient(180deg, rgba(210, 89, 93, 0) 0%, #D2595D 100%)',
      transition: '.8s all ease',
      zIndex: 1,
    },
  },

  picture: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    transition: '.8s all ease',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

  info: {
    position: 'relative',
    transition: '.3s all ease',
    zIndex: 2,
  },
  title: {
    color: '#fff',
    fontFamily: 'Oakes-Bold',
    marginBottom: '0.5rem',
  },
  position: {
    color: '#fff',
    fontFamily: 'Oakes-SemiBold',
    fontSize: '1.15rem',
  },
});

export const Dude = ({title, position, src}) => {
  const cls = useStyles();
  return (
      <div className={cls.item}>
        <div
          className={cls.picture}
          style={{
            backgroundImage: `url(${src})`
          }}
        />
        <div className={cls.info}>
          <Typography className={cls.title} variant={'h3'}>{title}</Typography>
          <span className={cls.position}>{position}</span>
        </div>
      </div>
  )
}
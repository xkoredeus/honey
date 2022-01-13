import React from "react";
import cx from "clsx";
import {makeStyles} from "@material-ui/core";

import Link from "next/link";
import theme from "../../src/assets/theme";

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '38px 1fr',
    gridTemplateRows: 'repeat(2, 19px)',
    gridGap: '8px',
    textTransform: 'uppercase',
    '& #logoHeart': {
      transition: '1s all ease',
      transformOrigin: 'center center',
    },
    '& #logoArrow': {
      transition: '1s all ease',
    },
    '&:hover #logoArrow': {
      transform: 'translate(5px, -5px)'
    },
    '&:hover #logoHeart': {
      transform: 'scale(.8)'
    }
  },
  svg: {
    gridRow: '1/3',
  },
  title: {
    fontSize: '1.75rem',
    fontFamily: 'Oakes-Bold',
    fontWeight: 'bold',
    lineHeight: '1.2',
    color: theme.palette.primary.main,
  },
  titleDark: {
    color: theme.palette.text.primary,
  },
  subTitle: {
    fontFamily: 'Oakes-Light',
    fontSize: '0.665rem',
    lineHeight: '1.7',
  },
  whiteSubtitle: {
    color: '#fff',
  },
})

export const Logo = ({footer, darkCircle}) => {
  const cls = useStyles();
  return (
    <Link href="/">
      <a className={cls.root}>
        <svg className={cls.svg} width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clipLogo)">
            <path d="M21.8168 0C13.1539 0 5.63721 7.71415 5.63721 16.1807C5.63721 25.1026 12.8947 32.3613 21.8168 32.3613C30.7385 32.3613 37.9983 25.1026 37.9983 16.1807C37.9983 7.25874 30.7385 0 21.8168 0Z" fill={`${darkCircle ? '#2A2A2A' : '#D2595D'}`}/>
            <g id="logoHeart">
              <path d="M21.8167 25.6216L13.988 17.7643C13.0561 16.8323 12.5415 15.5901 12.5415 14.2688C12.5415 12.9475 13.0561 11.7052 13.9904 10.7709C14.9247 9.83665 16.167 9.3221 17.4883 9.32202C18.8096 9.32202 20.0518 9.83658 20.9861 10.7709L21.8167 11.6024L24.4398 17.8725L21.8167 25.6216Z" fill="#EE979A"/>
              <path d="M21.8169 25.6216V11.6024L22.6493 10.7709C23.5836 9.83658 24.8259 9.32202 26.1472 9.32202C27.4685 9.32202 28.7108 9.83658 29.645 10.7708C30.5794 11.7052 31.0939 12.9475 31.0939 14.2688C31.0939 15.5901 30.5794 16.8324 29.645 17.7666L21.8169 25.6216Z" fill="#EE979A"/>
            </g>
            <g id="logoArrow">
              <path d="M4.60671 37.9999L0.00195312 33.6172L2.87763 30.5037L0.68343 28.4967L15.1344 22.7766L9.78458 36.8466L7.52395 34.8416L4.60671 37.9999Z" fill={`${footer? '#D8D8D8' : '#2A2A2A' }`}/>
              <path d="M4.60686 37.9999L2.20068 35.7097L15.1346 22.7766L9.78473 36.8466L7.5241 34.8416L4.60686 37.9999Z" fill={`${footer? '#FFFFFF' : '#151515' }`}/>
            </g>
          </g>
          <defs>
            <clipPath id="clipLogo">
              <rect width="38" height="38" fill={'white'} />
            </clipPath>
          </defs>
        </svg>
        <span className={cx(cls.title, darkCircle ? cls.titleDark : '')}>Honey</span>
        <span className={`${cls.subTitle} ${footer ? cls.whiteSubtitle : ""} `}>Dating Solutions</span>
      </a>
    </Link>
  )
}
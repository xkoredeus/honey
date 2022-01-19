import React, {useLayoutEffect, useState} from "react";
import {makeStyles} from "@material-ui/core";
import { Header, Footer } from "/components/shared";

import cx from "clsx";

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  main: {
    overflow: 'hidden',
  },
  preloader: {
    backgroundColor: '#F3F3F3',
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 10,
    width: '100vw',
    height: '100vh',
    transition: '1s all ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  preloaderHidden: {
    opacity: 0,
    visibility: 'hidden',
  },
  svgWrapper: {
    backgroundColor: '#D2595D',
    width: 60,
    height: 60,
    borderRadius: '50%',
    animation: 'pulse-anim 1s linear infinite',
    '& $svg': {
      marginLeft: '-0.5px',
    },
    '& #preloaderHeart': {
      transformOrigin: '50% 50%',
      animation: 'heart 1.3s linear infinite',
    }
  },
})

export const Layout = ({ children, footerRed=true }) => {
  const cls = useStyles();
  const [mounted, setMounted] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => setMounted(true), 1800)
  });

  return (
      <div className={cls.root}>
        <div className={cx(cls.preloader, mounted ? cls.preloaderHidden : "")}>
          <div className={cls.svgWrapper}>
            <svg className={cls.svg} width="60" height="60" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/*<path d="M16.8167 0C8.15386 0 0.637131 7.71415 0.637131 16.1807C0.637131 25.1026 7.89461 32.3613 16.8167 32.3613C25.7384 32.3613 32.9982 25.1026 32.9982 16.1807C32.9982 7.25874 25.7384 0 16.8167 0Z" fill="#D2595D"/>*/}
              <g id="preloaderHeart">
                <path d="M16.8167 25.6216L8.98807 17.7643C8.05611 16.8323 7.54155 15.5901 7.54155 14.2688C7.54155 12.9475 8.05611 11.7052 8.99045 10.7709C9.92471 9.83665 11.1671 9.3221 12.4883 9.32202C13.8096 9.32202 15.0518 9.83658 15.9862 10.7709L16.8167 11.6024L19.4399 17.8725L16.8167 25.6216Z" fill="#EE979A"/>
                <path d="M16.8167 25.6216V11.6024L17.6492 10.7709C18.5834 9.83658 19.8257 9.32202 21.147 9.32202C22.4684 9.32202 23.7106 9.83658 24.6449 10.7708C25.5792 11.7052 26.0938 12.9475 26.0938 14.2688C26.0938 15.5901 25.5792 16.8324 24.6449 17.7666L16.8167 25.6216Z" fill="#EE979A"/>
              </g>
            </svg>
          </div>
        </div>
        <Header />
        <main className={cls.main}>
          {children}
        </main>
        <Footer backgroundRed={footerRed} />
      </div>
  )
}
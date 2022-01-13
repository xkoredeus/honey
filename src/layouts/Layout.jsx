import React from "react";
import {makeStyles} from "@material-ui/core";
import { Header, Footer } from "/components/shared";

const useStyles = makeStyles({
  main: {
    overflow: 'hidden',
  }
})

export const Layout = ({ children }) => {
  const cls = useStyles();
  const footerRed = {children};
  return (
      <>
        <Header />
        <main className={cls.main}>
          {children}
        </main>
        <Footer backgroundRed={footerRed} />
      </>
  )
}
import {useEffect} from "react";
import { CssBaseline, ThemeProvider } from '@material-ui/core'

import theme from "../assets/theme";
import '../assets/global.css';

const CustomApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
      <>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
      </>
  )
}

export default CustomApp

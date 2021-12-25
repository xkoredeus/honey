import { Header } from "/components/shared/Header";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  main: {
  }
})

export const Layout = ({ children }) => {
  const cls = useStyles();
  return (
      <>
        <Header />
        <main className={cls.main}>
          {children}
        </main>
      </>
  )
}
import cx from 'clsx'
import {makeStyles} from "@material-ui/core";
import theme from "../../src/assets/theme";

const useStyles = makeStyles({
  sectionPadding: {
    paddingTop: '12.5rem',
    paddingBottom: '12.5rem',
    [theme.breakpoints.down(1600)]: {
      paddingTop: '8rem',
      paddingBottom: '8rem',
    },
    [theme.breakpoints.down(1280)]: {
      paddingTop: '5rem',
      paddingBottom: '5rem',
    },
  },
  sectionPaddingSmall: {
    paddingTop: '8rem',
    paddingBottom: '8rem',
    [theme.breakpoints.down(1600)]: {
      paddingTop: '5rem',
      paddingBottom: '5rem',
    },
    [theme.breakpoints.down(1280)]: {
      paddingTop: '3rem',
      paddingBottom: '3rem',
    },
  },
})

export const Section = ({children, small, classes}) => {
  const cls = useStyles();
  return (
      <div className={cx(!small ? cls.sectionPadding : cls.sectionPaddingSmall, classes)}>
        {children}
      </div>
  )
}

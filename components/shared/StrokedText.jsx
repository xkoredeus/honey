import {makeStyles} from "@material-ui/core";
import theme from "../../src/assets/theme";

const useStyles = makeStyles({
  root: {
    fontWeight: '700',
    fontSize: '10rem',
    '-webkit-text-fill-color': '#fff',
    '-webkit-text-stroke-width': '0.1px',
    '-webkit-text-stroke-color': theme.palette.primary.main,
  },
})

export const StrokedText = ({text, classes}) => {
  const cls = useStyles(classes)
  return (
      <div className={cls.root}>
        {text}
      </div>
  )
}
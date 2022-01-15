import React from "react";
import {Layout} from "../layouts";
import {Feedback, Section} from "../../components/shared";
import {makeStyles, Typography} from "@material-ui/core";
import theme from "../assets/theme";
import {WorkList} from "../../components/main/WorkList";
import Container from "@material-ui/core/Container";
import {CasesPageStroked} from "../../components/shared/Svg";

const useStyles = makeStyles({
  offer: {
    paddingTop: '120px',

    [theme.breakpoints.down('sm')]: {
      paddingTop: '90px',
    },
  },
  list: {
    position: 'relative',
    paddingTop: '1rem',
  },
  stroked: {
    '& svg': {
      position: 'absolute',
      width: 90,
      height: 'auto',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      [theme.breakpoints.down(1899)]: {
        width: 80,
      },
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    }
  }
})

const CasesPage = () => {
  const cls = useStyles();

  return (
      <Layout footerRed>
        <Container>
          <div className={cls.offer}>
            <Typography variant={'h1'} align="center">Our cases</Typography>
          </div>
        </Container>
        <Section classes={cls.list}>
          <Container>
            <WorkList />
          </Container>
          <div className={cls.stroked}>
            <CasesPageStroked/>
          </div>
        </Section>
        <Feedback backgroundDark/>
      </Layout>
  )
}

export default CasesPage;
import React from "react";
import {Layout} from "../layouts";
import {Feedback, Section} from "../../components/shared";
import {makeStyles, Typography} from "@material-ui/core";
import theme from "../assets/theme";
import {WorkList} from "../../components/main/WorkList";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  offer: {
    paddingTop: '120px',

    [theme.breakpoints.down('sm')]: {
      paddingTop: '90px',
    },
  },
  list: {
    paddingTop: '1rem',
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
          <Section classes={cls.list}>
            <WorkList />
          </Section>
        </Container>
        <Feedback backgroundDark/>
      </Layout>
  )
}

export default CasesPage;
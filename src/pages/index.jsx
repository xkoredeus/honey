import {Layout} from "../layouts/Layout";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";
import theme from "../assets/theme";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  mainScreen: {
    background: theme.palette.primary.gray,
    paddingTop: '120px',
    height: '100vh',
    minHeight: '800px',
  },
  mainScreenContainer: {
    height: '100%',
  },
  mainScreenInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '9rem',
  },
});

const IndexPage = () => {
  const cls = useStyles();
  return (
      <Layout>
        <section className={cls.mainScreen}>
          <Container className={cls.mainScreenContainer}>
            <Grid container className={cls.mainScreenContainer}>
              <Grid item className={cls.mainScreenPictureWrapper} xs={7}>
                <div className="da">
                  Honey
                </div>
              </Grid>
              <Grid item className={cls.mainScreenInfo} xs={12} lg={5}>
                <Typography variant={'h1'}>
                  <span className="red">Enter the new world</span> of datings solutions.
                </Typography>
                <Button
                    variant='contained'
                    color='primary'
                >
                  Start a project
                </Button>
              </Grid>
            </Grid>
          </Container>
        </section>
      </Layout>
  )
}

export default IndexPage;
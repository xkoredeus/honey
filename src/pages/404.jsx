import React from "react";
import {Layout} from "../layouts";
import {Feedback, Section} from "../../components/shared";
import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import theme from "../assets/theme";
import Image from "next/image";
import {ArrowNext, ContactsStroked} from "../../components/shared/Svg";
import Head from "next/head";
import Link from "next/link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: 'calc(100vh - 139px)',
    minHeight: '400px',
    backgroundColor: '#F3F3F3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 181.19px)',
    },

    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 169.19px)',
    },

    [theme.breakpoints.down(469)]: {
      height: 'calc(100vh - 289.94px)',
    },
  },
})

const ContactsPage = () => {
  const cls = useStyles();
  return (
      <>
        <Head>
          <title>404 - Unknown page</title>
        </Head>
        <Layout>
        <Section classes={cls.root}>
          <Container>
            <Typography variant={'h1'} align={'center'}>404, page not found</Typography>
            <Grid align={'center'}>
              <Link
                  href={'/'}
              >
                <a>
                  <Button
                      variant='outlined'
                      color='primary'
                  >
                    Go to main page
                  </Button>
                </a>
              </Link>
            </Grid>
          </Container>
        </Section>
      </Layout>
      </>
  )
}

export default ContactsPage;
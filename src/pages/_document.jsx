/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Document, {
    Html, Head, Main, NextScript,
} from 'next/document';

import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from "../assets/theme";

export default class CustomDocument extends Document{
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    {/* PWA primary color */}
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link href="/fonts/stylesheet.css" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
CustomDocument.getInitialProps = async (ctx) => {

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};
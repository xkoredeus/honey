import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const themeBase = {
    // Colors
    palette: {
        type: 'light',
        text: {
            primary: '#2A2A2A',
            gray: '#F3F3F3',
            white: '#ffffff',
            lightGray: '#AEAEAE',
        },
        primary: {
            main: '#D2595D',
            gray: '#F3F3F3',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
}

// Create a theme instance.
const theme = createTheme({

    // breakpoints: {
    //     values: {
    //         xs: 0,
    //         sm: 600,
    //         md: 960,
    //         lg: 1440,
    //         xl: 1920,
    //     },
    // },

    shadows: [
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `none`,
        `0px 16px 48px rgba(255, 184, 0, 0.4)`,
        `0px 4px 60px rgba(0, 0, 0, 0.08)`,
    ],

    shape: {
        // borderRadius: 40,
    },

    // Custom
    overrides: {
        body: {
          fontSize: '14px'
        },

        MuiCheckbox: {
            colorPrimary: {
                color: themeBase.palette.primary.main,
            },
        },

        MuiButton: {
            contained: {
                textTransform: 'none',
                fontWeight: 700,
                borderRadius: '10px',
            },
            containedPrimary: {
                fontWeight: 500,
                textTransform: 'none',
                borderRadius: '10px',
                padding: '.6rem 1.2rem'
            },
            sizeLarge: {
                fontSize: `1.15rem`,
                padding: '1rem 3rem',
            },
            outlined: {
                textTransform: 'none',
                borderRadius: '10px',
            },
            outlinedPrimary: {
                fontWeight: 700,
                textTransform: 'none',
                borderWidth: '2px',
                color: themeBase.palette.text.primary,
                borderRadius: '10px',
                '&:hover': {
                    borderWidth: '2px',
                },
            },
            containedSecondary: {
                background: 'linear-gradient(90deg, #2D0AF5 0%, #5398F8 100%)',
                boxShadow: '0 24px 60px rgba(65, 82, 247, 0.32)',
                '&$disabled': {
                    color: '#b0b0b0',
                },
            },
        },
        MuiDialog: {
            paper: {
                borderRadius: 25,
            },
        },
        MuiCircularProgress: {
            colorSecondary: {
                color: '#5398F8',
            },
        },
        MuiContainer: {
            root: {
                paddingLeft: '15px',
                paddingRight: '15px',
                maxWidth: '1600px',
            },
        },
    },
    ...themeBase,
})

// theme.overrides.MuiContainer.root = {
//     [theme.breakpoints.down('xs')]: {
//         paddingLeft: '24px',
//         paddingRight: '24px',
//     },
// }

theme.typography.h1 = {
    fontWeight: 'bold',
    fontSize: '5rem',
    lineHeight: 1.15,
    marginBottom: '2rem',
    [theme.breakpoints.down('lg')]: {
        fontSize: '4.1429rem',
        marginBottom: '2rem',
    },
    [theme.breakpoints.down(1280)]: {
        fontSize: '2.1429rem',
        marginBottom: '1.5rem',
    },
}


theme.typography.h2 = {
    fontWeight: 700,
    fontSize: '3.25rem',
    lineHeight: 1.15,
    marginBottom: '2.25rem',
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.9rem',
        marginBottom: '1.5rem',
    },
    [theme.breakpoints.down(1280)]: {
        fontSize: '1.7143rem',
        marginBottom: '1rem',
    },
}

theme.typography.h3 = {
    fontWeight: 700,
    fontSize: '2.75rem',
    lineHeight: 1.15,
    marginBottom: '1.5rem',

    [theme.breakpoints.down('lg')]: {
        fontSize: '1.4286rem',
    },
}

theme.typography.subtitle2 = {
    fontWeight: 400,
    fontSize: '1.25rem',
    marginBottom: '2.25rem',
    lineHeight: 1.4,
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.1rem',
    },
    [theme.breakpoints.down(1280)]: {
        fontSize: '1rem',
        marginBottom: '1rem',
    },
}

theme.typography.body2 = {
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: 1.4,
    fontFamily: 'Oakes-Regular, Roboto, Open-Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
}

export default theme

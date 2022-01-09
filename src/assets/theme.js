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
            darkGray: '#2B2B2B',
        },
        secondary: {
            main: '#2A2A2A',
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

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1240,
            xl: 1466,
        },
    },

    // shadows: [
    //     `0px 16px 48px rgba(255, 184, 0, 0.4)`,
    //     `0px 4px 60px rgba(0, 0, 0, 0.08)`,
    // ],

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

        MuiInput: {
            colorSecondary: {
                fontSize: '1.125rem',
            }
        },

        MuiButton: {
            contained: {
                textTransform: 'none',
                fontSize: '1rem',
                fontFamily: 'Oakes-Medium',
                borderRadius: '10px',
                boxShadow: 'unset',
            },
            containedPrimary: {
                fontFamily: 'Oakes-Medium',
                textTransform: 'none',
                borderRadius: '10px',
                padding: '.6rem 1.2rem',
                boxShadow: 'unset',
            },
            sizeLarge: {
                fontSize: `1.15rem`,
                padding: '1rem 3rem',
            },
            outlined: {
                textTransform: 'none',
                borderRadius: '10px',
                boxShadow: 'unset',
            },
            outlinedPrimary: {
                fontFamily: 'Oakes-Medium',
                textTransform: 'none',
                borderWidth: '2px',
                color: themeBase.palette.text.primary,
                borderRadius: '10px',
                boxShadow: 'unset',
                '&:hover': {
                    borderWidth: '2px',
                },
            },
            containedSecondary: {
                fontSize: '1rem',
                fontFamily: 'Oakes-Medium',
                padding: '.6rem 1.2rem',
                boxShadow: 'unset',
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
            },
        },
    },
    ...themeBase,
})

theme.overrides.MuiContainer.root = {
    [theme.breakpoints.up(1280)]: {
        maxWidth: '1600px !important'
    },
    [theme.breakpoints.down(1279)]: {
        maxWidth: '1279px'
    },
}

theme.typography.h1 = {
    fontFamily: 'Oakes-Bold',
    fontWeight: 'bold',
    fontSize: '5.2rem',
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
    fontFamily: 'Oakes-Bold',
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
    fontSize: '2.5rem',
    lineHeight: 1.15,
    marginBottom: '1.5rem',
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.3rem',
    },
}

theme.typography.h4 = {
    fontFamily: 'Oakes-Bold',
    fontWeight: 600,
    fontSize: '1.875rem',
    lineHeight: 1.15,
    marginBottom: '1.5rem',
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.down(1280)]: {
        fontSize: '1.1rem',
    },
}

theme.typography.h5 = {
    fontSize: '1.4rem',
    lineHeight: 1.15,
    marginBottom: '1.5rem',
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.down(1280)]: {
        fontSize: '1.1rem',
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

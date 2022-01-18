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
            sm: 768,
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

        MuiCheckbox: {
            colorPrimary: {
                color: themeBase.palette.primary.main,
            },
        },

        MuiInput: {
            root: {
                color: '#737373',
                fontSize: '1rem',
                '&:placeholder': {
                    color: '#737373',
                }
            },
        },

        MuiButton: {
            contained: {
                textTransform: 'none',
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
            colorPrimary: {
                color: '#fff',
            },
        },
        MuiSnackbarContent: {
            root: {
                minWidth: 'unset !important',
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
theme.overrides.MuiButton.root = {
    fontSize: '16px',

    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
    },

    [theme.breakpoints.down('sm')]: {
        fontSize: '13px',
    },


    [theme.breakpoints.down(500)]: {
        width: '100%',
    },
}
theme.overrides.MuiContainer.root = {
    [theme.breakpoints.up(1280)]: {
        maxWidth: '1600px !important',
        paddingLeft: 100,
        paddingRight: 100,
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
    fontFamily: 'Oakes-Bold',
    fontSize: '10rem',
    lineHeight: 1.1,
    [theme.breakpoints.down('lg')]: {
        fontSize: '6rem',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
}

theme.typography.body1 = {
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: 1.4,

    '&::-webkit-scrollbar': {
        width: 5,
    },

    '&::-webkit-scrollbar-track': {
        backgroundColor: '#D1D1D1',
    },


    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
    },

    [theme.breakpoints.down('sm')]: {
        fontSize: '13px',
    },
}

theme.typography.body2 = {
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: 1.4,
    fontFamily: 'Oakes-Regular, Roboto, Open-Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',

    '&::-webkit-scrollbar': {
        width: 5,
    },

    '&::-webkit-scrollbar-track': {
        backgroundColor: '#D1D1D1',
    },

    '&::-webkit-scrollbar-thumb': {
        width: 5,
        background: '#D2595D',
    },

    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
    },

    [theme.breakpoints.down('md')]: {
        fontSize: '13px',
    },
}

theme.overrides.body = {
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: 1.4,
    fontFamily: 'Oakes-Regular, Roboto, Open-Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',

    '&::-webkit-scrollbar': {
        width: 5,
    },

    '&::-webkit-scrollbar-track': {
        backgroundColor: '#D1D1D1',
    },

    '&::-webkit-scrollbar-thumb': {
        width: 5,
        background: '#D2595D',
    },
}

export default theme

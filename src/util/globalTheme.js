/* Defines the theme for the app */
import { createMuiTheme } from '@material-ui/core/styles';
import { 
    acariSansRegular, 
    acariSansLight,
    acariSansMedium,
    acariSansSemiBold,
    acariSansBold,
    acariSansItalic,
    acariSansLightItalic,
    acariSansMediumItalic,
    acariSansSemiBoldItalic,
    acariSansBoldItalic
} from '../fonts/AcariSans';


/* 
 * Define the theme.
 * More specific theme designs can be added as needed.
 * Details: https://material-ui.com/customization/theming/
 * Default theme: https://material-ui.com/customization/default-theme/
 */
const globalTheme = createMuiTheme({
    /* Color palette */
    palette: {
        /* Theme colors */
        primary: {
            main: '#0d72ed', // Light blue for buttons
            contrastText: '#FFFFFF', 
        },
        secondary: {
            main: '#1cb953',
            contrastText: '#FFFFFF',
        },
        /* Typography colors */
        text: {
            primary: '#43200C', // Brown-ish color
            secondary: '#FFFFFF', // White
        },
    },
    /* Typography */
    typography: {
        fontFamily: ['AcariSans', 'Roboto', 'Helvetica', 'Arial', 'sans-seri'].join(','),
        subtitle2: {
            fontSize: 18
        },
        button: { 
            textTransform: 'none',
            fontWeight: '700',
            fontSize: '1rem',
        },
    },
    /* Override Mui Components here */
    overrides: {
        /* Button */
        MuiButton: {
            root: {
                borderRadius: '50px',
                padding: '0.4rem 2rem 0.3rem 2rem',
            },
        },
        /* CSS Baseline */
        MuiCssBaseline: {
            '@global': {
                /* Fonts */
                '@font-face': [
                    acariSansRegular, 
                    acariSansLight,
                    acariSansMedium,
                    acariSansSemiBold,
                    acariSansBold,
                    acariSansItalic,
                    acariSansLightItalic,
                    acariSansMediumItalic,
                    acariSansSemiBoldItalic,
                    acariSansBoldItalic
                ], 
            },
        },
    },
});

export default globalTheme;
// @flow
import Typography from 'typography';
import gray from "gray-percentage"


const typography = new Typography({
    title: "Elk Glen",
    baseFontSize: "30px",
    baseLineHeight: 1.5,
    googleFonts: [
        {
            name: 'Vollkorn',
            styles: [
                400
            ],
        },
    ],
    headerFontFamily: ["Knockout 26 A", "Knockout 26 B", "sans-serif"],
    bodyFontFamily: ["vollkorn", "serif"],
    headerColor: "white",
    bodyColor: "white",
    headerWeight: "normal",
    bodyWeight: 300,
    boldWeight: 700,
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {

        return {
            a: {

                textDecoration: "none",
            },
            "a:hover,a:active": {
                textShadow: "none",
                backgroundImage: "none",
            },
            "h1,h2,h3,h4,h5,h6": {
                marginTop: rhythm(2),
                letterSpacing: "3px",
                fontFeatureSettings: '"kern" 1'
            }
        }
    }
});

export default typography;

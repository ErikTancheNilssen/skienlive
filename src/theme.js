import SL19  from './images/SL-19.svg';
import BG1  from './images/bg/SL_001.png';
import BG2  from './images/bg/SL_002.png';
import BG3  from './images/bg/SL_003.png';
import BG4  from './images/bg/SL_004.png';
import BG5  from './images/bg/SL_005.png';
import BG6  from './images/bg/SL_006.png';
import BG7  from './images/bg/SL_007.png';
import BG8  from './images/bg/SL_008.png';
import BG9  from './images/bg/SL_009.png';
import BG10  from './images/bg/SL_010.png';
import BG11  from './images/bg/SL_011.png';

const p1 = '#424574';
const p2 = '#A53939';
const p3 = '#43594C';
const p4 = '#C1896E';



const backgrounds = [BG1, BG2, BG3, BG4, BG5, BG6, BG7, BG8, BG9, BG10, BG11];
const colors = {
    p1,
    p2,
    p3,
    p4,
    "gray": "#222222"
};

const fontSizes =  [
    16.77, 29.3, 33.5, 41.93, 50.3, 71.28, 100, 134, 201
];

const space = [
    0, 4, 8, 13, 16, 32, 64, 128, 256
];

export default () => ({
    fontSizes,
    SL19,
    backgrounds,
    bg: backgrounds[Math.floor(Math.random() * backgrounds.length)],
    mainColor: colors["p" + (Math.floor(Math.random() * 4) + 1)],
    colors,
    space
})

export const defaultTheme = () => ({
    fontSizes,
    SL19,
    backgrounds,
    bg: null,
    mainColor: colors["gray"],
    colors,
    space
})

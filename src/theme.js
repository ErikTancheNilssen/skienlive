import { transparentize, hsl, darken } from 'polished';
import gray from 'gray-percentage';


const p1 = '#424574';
const p2 = '#A53939';
const p3 = '#43594C';
const p4 = '#C1896E';


export default {
    fontSizes: [ 
        16.77, 29.3, 33.5, 41.93, 50.3, 71.28, 100, 134, 201
    ],
    select: {
        color: '#000',
        selected: '#008BCE'
    },
    colors: {
        p1,
        p2,
        p3,
        p4,
        "white": "#FFFFFF"
    },
    space: [
        0, 4, 8, 13, 16, 32, 64, 128, 256
    ]
}

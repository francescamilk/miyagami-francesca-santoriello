// Importing fonts from next will improves user experience (&performance) as this technique downloads fonts at build time, preventing layout shifts
import { Poppins } from 'next/font/google';

export const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});
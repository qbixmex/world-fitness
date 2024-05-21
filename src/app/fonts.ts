import { Saira_Condensed, Montserrat, Open_Sans } from 'next/font/google'
 
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});
 
export const sairaCondensed = Saira_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

import './globals.css';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { ParamsLng } from '@/types';
import MyLinks from './components/MyLinks';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: 'Edoardo Vincenzi - Skills come first stacks.',
  description:
    'Edoardo Vincenzi is a passionate and dedicated developer with a solid experience in designing and developing various types of web projects.',
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: ParamsLng;
}) {
  return (
    <html lang={lng} dir={dir(lng)} className={poppins.className}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-bgPrimary text-textPrimary">
        <MyLinks />
        <main className="mx-auto container">
          <div className=" mx-3 ">{children}</div>
        </main>
      </body>
    </html>
  );
}

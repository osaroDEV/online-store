import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from './components/Header';
import PreHeader from './components/PreHeader';
import Footer from './components/Footer';
import MenuWidget from './components/MenuWidget';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'sterilo Stores',
  description: 'Purchase Anything You Desire',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={mont.className}>
        <PreHeader />
        <Header />
        <main>{children}</main>
        <MenuWidget />
        <Footer />
      </body>
    </html>
  );
}

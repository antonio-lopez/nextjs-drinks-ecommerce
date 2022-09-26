import { Toaster } from 'react-hot-toast';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <NextSeo
          title="Modern Times"
          description="Modern Times is a 30bbl production brewery and tasting room in the Point Loma neighborhood of San Diego. Modern Times is named after a beautifully crazy utopian community founded in 1850, and (almost) all of our beers are named after real utopian experiments or mythological utopias."
          canonical="https://antonio-modern-times.vercel.app/"
          openGraph={{
            type: 'website',
            url: 'https://antonio-modern-times.vercel.app/',
            title: 'Modern Times Beer',
            description:
              'Modern Times is a 30bbl production brewery and tasting room in the Point Loma neighborhood of San Diego. Modern Times is named after a beautifully crazy utopian community founded in 1850, and (almost) all of our beers are named after real utopian experiments or mythological utopias.',
            images: [
              {
                url: 'https://raw.githubusercontent.com/antonio-lopez/nextjs-drinks-ecommerce/main/public/images/og-modern-times-home.png',
                width: 800,
                height: 600,
                alt: 'Modern Times Home Page',
                type: 'image/png',
              },
            ],
          }}
        />
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;

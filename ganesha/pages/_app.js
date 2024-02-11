import '../styles/globals.css';



import { Inter } from "next/font/google";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: "Meow world",
    description: "Generated for our friends",
  };
const MyApp = ({ Component, pageProps }) => {


  return (
    <>
      <Head>
        
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <style>{`.inter-font { ${inter.className} }`}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

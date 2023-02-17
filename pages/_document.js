import Document, { Head, Html, Main, NextScript } from 'next/document';
import i18nextConfig from '../next-i18next.config';
import Script from 'next/script'

const data = {
  uk: {
    metaDescription: 'Електронний волонтер для допомоги біженцям',
    metaTitle: 'E-VOLUNTEER',
  },
  ru: {
    metaDescription: 'Электронный волонтёр для помощи беженцам',
    metaTitle: 'E-VOLUNTEER',
  },
};

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;

    return (
      <Html lang={currentLocale}>
        <Head>
      
      {/* Google Tag Manager */}
      <Script id="my-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KKD4W69');`}}></Script>
{/* End Google Tag Manager */}

          <meta name="theme-color" content="#fff" />

          <link rel="shortcut icon" href="/favicon/favicon.ico" />

          <link
            rel="apple-touch-icon"
            size="180x180"
            href="/favicon/apple-touch-icon.png"
          />

          <link
            rel="icon"
            type="image/png"
            size="32x32"
            href="/favicon/favicon-32x32.png"
          />

          <link
            rel="icon"
            type="image/png"
            size="16x16"
            href="/favicon/favicon-16x16.png"
          />

          <link rel="manifest" href="/favicon/site.webmanifest" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <meta
            name="twitter:description"
            content={data[currentLocale].metaDescription}
          />

          <meta name="twitter:title" content={data[currentLocale].metaTitle} />

          <meta name="twitter:card" content="summary" />

          <meta property="og:image" content={'/image/cower.png'} />

          <meta property="og:image:width" content="968" />

          <meta property="og:image:height" content="504" />

          <meta property="og:type" content="website" />

          <meta
            property="og:description"
            content={data[currentLocale].metaDescription}
          />

          <meta property="og:title" content={data[currentLocale].metaTitle} />

          <meta
            name="description"
            content={data[currentLocale].metaDescription}
          />

          <link rel="canonical" href="https://e-volunteer.eu/" />

          <link rel="alternate" href="https://e-volunteer.eu/" />
        </Head>

        <body>
            
            {/* Google Tag Manager (noscript) */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KKD4W69"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  {/* End Google Tag Manager (noscript) */}
  
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

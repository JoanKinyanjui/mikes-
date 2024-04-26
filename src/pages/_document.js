import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add custom meta tags, links to stylesheets, or other head elements here */}
          <meta name="description" content="Your website description" />
          <link rel="stylesheet" href="/path/to/your/custom.css" />

          {/* Google Analytics script */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-LNP0V0EH1F" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-LNP0V0EH1F');
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

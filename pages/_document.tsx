import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content={"Photo Album Generator by John Bessey"}
        />
        <link rel="canonical" href={"https://localhost:3000"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

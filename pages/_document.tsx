import Document, {
  Html,
  Main,
  Head,
  NextScript,
  DocumentContext,
} from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head></Head>
      <body className="foo-1">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (context: DocumentContext) => {
  const initialProps = await Document.getInitialProps(context);

  return {
    ...initialProps,
  };
};

export default MyDocument;

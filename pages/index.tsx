import type { NextPage } from 'next'
import Head from 'next/head'

const IndexPage: NextPage = () => {
  return (<div className="flex min-h-screen flex-col items-center justify-center py-2">
  <Head>
    <title>Is this dynamic?</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
    <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">

    </div>
  </main>

  <footer className="flex h-24 w-full items-center justify-center border">

  </footer>
</div>);
};

export default IndexPage;

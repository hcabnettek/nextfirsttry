/* eslint-disable @next/next/no-html-link-for-pages */
import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        {children}
      </div>
    </main>
    <footer className="flex h-24 w-full items-center justify-center border">
      <hr />
      <span>I&apos;m here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;

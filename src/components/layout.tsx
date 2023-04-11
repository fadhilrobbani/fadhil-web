import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Layout = ({ title, children }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

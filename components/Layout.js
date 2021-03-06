import React, { useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);

  // Add Methods to props
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { openNav });
    }
    return child;
  });

  return (
    <div className="content">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/HeaderIcon.ico" />
      </Head>
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      {childrenWithProps}
    </div>
  );
};

export default Layout;

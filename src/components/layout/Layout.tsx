import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import { useRouter } from "next/router";
import HeaderTwo from "./header/HeaderTwo";
import FooterTwo from "./footer/FooterTwo";
import CustomCursor from "./CustomCursor";
import SplitType from "split-type";
import Indextwo from "../../pages/index-two"
type LayoutProps = {
  children?: React.ReactNode;
  header: number;
  footer: number;
  video: any;
};

const Layout = ({ children ,header, footer, video }: LayoutProps) => {
  // Navbar
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const router = useRouter();

  // Set Header Two and Footer Two as default
  useEffect(() => {
    setOpenNav(false); // Close navbar by default
  }, []);

  // Your other useEffects for animations, etc.

  return (
    <Fragment>
      {/* <Head>
    
      </Head> */}
      <div className="my-app">
        <HeaderTwo
          openNav={openNav}
          handleNav={handleNav}
          setOpenNav={setOpenNav}
        />
        <main>{children}
        
        
        </main>
        <FooterTwo />
        <CustomCursor  onTitleMouseEnter={() => {}}
  onTitleMouseLeave={() => {}} />
      </div>
    </Fragment>
  );
};

export default Layout;

import React from "react";

import Footer from "@components/global/footer";
import Header from "@components/global/header";
import CustomHead from "@components/global/custom_head";
import LanguageProvider from "@context/language";

interface LayoutI {
  children: JSX.Element | React.ReactNode;
  language: string;
}

const Layout: React.FC<LayoutI> = ({ children, language }) => (
  <LanguageProvider language={language}>
    <CustomHead />

    <Header />

    <main>{children}</main>

    <Footer />
  </LanguageProvider>
);

export default Layout;

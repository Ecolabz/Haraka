import React, { useEffect } from "react";

import Header from "../../components/header";
import Hero from "../../components/hero";
import Info from "../../components/info";
import Faq from "../../components/faq";
import BaseInfo from "../../components/base-info";
import Footer from "../../components/footer";


import "../../assets/styles/pages.scss";

function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="home">
      <Header />

      <Hero/>
      <Info/>
      <Faq/>
      <BaseInfo/>
      <Footer/>
    </div>
  );
}
export default HomePage;

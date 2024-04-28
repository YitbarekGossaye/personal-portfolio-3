import dynamic from "next/dynamic";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Copyright from "../src/components/Copyright";
import CounterSection from "../src/components/CounterSection";
import Home from "../src/components/Home";
import Partners from "../src/components/Partners";
import Portfolio from "../src/components/Portfolio";
import Skills from "../src/components/Skills";
import Head from "next/head";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileHeader from "../src/layouts/MobileHeader";
import Mouse from "../src/layouts/Mouse";
import ScrollTop from "../src/layouts/ScrollTop";
const Testimonials = dynamic(() => import("../src/components/Testimonials"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Yitbarek | Portfolio</title>
      </Head>
      <MobileHeader />
      <Header />
      <Home />
      {/* <Features /> */}
      <About />
      <CounterSection />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Partners />
      <Contact />
      <Copyright />
      <Mouse />
      <ScrollTop />
    </Layout>
  );
};
export default Index;

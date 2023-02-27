import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import Intro from "./Intro";
import Patients from "./Patients";
import Professionals from "./Professionals";
import Steps from "./Steps";
import Doctors from "./Doctors";

function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Doctors />
      <About />
      <Professionals />
      <Patients />
      <Steps />
      <Footer />
    </>
  );
}

export default Home;

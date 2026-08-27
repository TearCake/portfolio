import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Education,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  OrbitPreloader,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <OrbitPreloader
        loaderBgColor='#050816'
        loaderTextColor='#ffffff'
        orbitLabels={[
          "TearCake",
          "AI / ML Engineer",
          "Next-Gen AI",
          "PyTorch",
          "Portfolio",
          "Full Stack",
          "React",
          "Aditya",
        ]}
      />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

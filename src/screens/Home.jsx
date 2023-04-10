import React from 'react';
// working properly.
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../container';
import { Navbar } from '../components';


const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    {/* <SpecialMenu /> */}
    <Chef />
    {/* <Intro />
    <Laurels />
    <Gallery /> */}
    <FindUs />
    <Footer />
  </div>
);

export default App;

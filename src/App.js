import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header'
import Featured from './featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/footer';
import { Element } from 'react-scroll';
function App() {
  return (
    <div className="App" style={{ height: '1800px' }}>
      <Header />
      <Element name="Featured">
        <Featured />
      </Element>
      <Element name="VenueNfo">
        <VenueNfo />
      </Element>
      <Element name="Highlights" >
        <Highlights />
      </Element>
      <Element name="Pricing">
        <Pricing />
      </Element>
      <Element name="Location">
        <Location />
      </Element>
      <Footer />


    </div >
  );
}

export default App;

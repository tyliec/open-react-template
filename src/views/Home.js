import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import CommandList from '../components/sections/CommandList';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <CommandList />
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;
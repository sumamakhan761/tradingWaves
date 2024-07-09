import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/productsKite.png"
        productName="Kite"
        productDiscription=" Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        TryDemo="Try Demo"
        learnMore=""
        googlePlay=""
        appStore="" />

      <RightSection
        imageURL="media/images/products-console.png"
        productName="Console"
        productDiscription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
        TryDemo="Learn more"
      />

      <LeftSection
        imageURL="media/images/products-coin.png"
        productName="Coin"
        productDiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        TryDemo="coin"
        learnMore=""
        googlePlay=""
        appStore="" />

      <RightSection
        imageURL="media/images/products-kiteconnect.png"
        productName="Kite Connect API"
        productDiscription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo=""
        TryDemo="Kite Connect"
      />

      <LeftSection
        imageURL="media/images/products-coin.png"
        productName="Varsity mobile"
        productDiscription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        TryDemo="varsity mobile"
        learnMore=""
        googlePlay=""
        appStore="" />
      <p className='text-center'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
    </>
  );
}

export default ProductPage;
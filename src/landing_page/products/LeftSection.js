import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDiscription,
  tryDemo,
  TryDemo,
  learnMore,
  googlePlay,
  appStore,

}) {
  return (
    <div className='container mt-5 p-5 mb-5'>
      <div className='row mb-5'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <img src={imageURL} />
        </div>
        <div className='col-lg-6 mt-5  ' style={{ width: "35%", marginLeft: "6em" }}>
          <h1 className='mb-4 fs-2'>{productName}</h1>
          <p style={{ lineHeight: "1.7", fontSize: "1.05em" }}>{productDiscription}</p>

          <div >
            <a href={tryDemo}>{TryDemo} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{ marginLeft: "3em" }}>learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className='mt-3'>
            <a href={googlePlay}><img src='media/images/googleplay.svg' /></a>
            <a href={appStore} style={{ marginLeft: "3em" }}><img src='media/images/appstorebadge.svg' /></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
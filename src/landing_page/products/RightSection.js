import React from 'react';

function RightSection({
  imageURL,
  productName,
  productDiscription,
  tryDemo,
  TryDemo,
}) {
  return (

    <div className='container mt-5 '>
      <div className='row mt-5'>
        <div className='col-lg-6 mt-5  ' style={{ width: "35%", marginLeft: "6em" }}>
          <h1 className='mb-4 fs-2'>{productName}</h1>
          <p style={{ lineHeight: "1.7", fontSize: "1.05em" }}>{productDiscription}</p>

          <a href={tryDemo}>{TryDemo} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <img src={imageURL} />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
import React from 'react';

function Brokerage() {
  return (
    <div className='container'>
      <div className=' row mt-5 border-top'>
        <div className='col-lg-8 col-md-6 col-sm-12 p-5 '>
          <a href='' style={{ textDecoration: "none" }}> <h4 className='p-4 mx-5'>Brokerage calculator</h4></a>

          <ul className='text-muted' style={{ lineHeight: 1.8 , fontSize:"0.8em" }}>
            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note.</li>
            <li> Courier charges apply.</li>
            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
          </ul>
        </div>
        <div className='col-lg-4 col-md-6 p-5'>
          <a href='' style={{ textDecoration: "none" }}> <h4 className='p-4'>List of charges</h4></a>
        </div>

      </div>
      <div>

      </div>
    </div>
  );
}

export default Brokerage;
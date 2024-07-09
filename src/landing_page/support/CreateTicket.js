import React from 'react';
let styles = { textDecoration: "none", lineHeight: "2.1" }

function CreateTicket() {
  return (
    <div className='container'>
      <div className='row p-5  mt-5 mb-3'>
        <p className='fs-3 mx-3'>To create a ticket, select a relevant topic</p>
        <div className='col-4 p-3 mt-5 mb-2'>
          <p className='fs-5'><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</p>
          <a href='' style={styles}>Getting started</a> <br />
          <a href='' style={styles}>Online</a> <br />
          <a href='' style={styles}>Offline</a> <br />
          <a href='' style={styles}>Charges</a> <br />
          <a href='' style={styles}>Company, Partnership and HUF</a> <br />
          <a href='' style={styles}>Non Resident Indian (NRI)</a> <br />
        </div>
        <div className='col-4 p-3 mt-5 mb-2'>
          <p className='fs-5'><i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</p>
          <a href='' style={styles}>Login credentials</a> <br />
          <a href='' style={styles}>Your Profile</a> <br />
          <a href='' style={styles}>Account modification and segment addition</a> <br />
          <a href='' style={styles}>CMR & DP ID</a> <br />
          <a href='' style={styles}>Nomination</a> <br />
          <a href='' style={styles}>Transfer and conversion of shares</a> <br />
        </div>
        <div className='col-4 p-3 mt-5 mb-2'>
          <p className='fs-5'><i class="fa fa-bar-chart" aria-hidden="true"></i> Trading and Markets</p>
          <a href='' style={styles}>Trading FAQs</a> <br />
          <a href='' style={styles}>Kite</a> <br />
          <a href='' style={styles}>Margins</a> <br />
          <a href='' style={styles}>Product and order types</a> <br />
          <a href='' style={styles}>Corporate actions</a> <br />
          <a href='' style={styles}>Kite features</a> <br />
        </div>
        <div className='col-4 p-3  mb-5'>
          <p className='fs-5'><i class="fa fa-folder" aria-hidden="true"></i> Funds</p>
          <a href='' style={styles}>Fund withdrawal</a> <br />
          <a href='' style={styles}>Adding funds</a> <br />
          <a href='' style={styles}>Adding bank accounts</a> <br />
          <a href='' style={styles}>eMandates</a> <br />
        </div>
        <div className='col-4 p-3  mb-5'>
          <p className='fs-5'><i class="fa fa-bullseye" aria-hidden="true"></i> Console</p>
          <a href='' style={styles}>IPO</a> <br />
          <a href='' style={styles}>Funds statement</a> <br />
          <a href='' style={styles}>Profile</a> <br />
          <a href='' style={styles}>Reports</a> <br />
          <a href='' style={styles}>Referral program</a> <br />
        </div>
        <div className='col-4 p-3  mb-5'>
          <p className='fs-5'><i class="fa fa-plus-circle" aria-hidden="true"></i> Coin</p>
          <a href='' style={styles}>Understanding mutual funds and Coin</a> <br />
          <a href='' style={styles}>Coin app</a> <br />
          <a href='' style={styles}>Coin web</a> <br />
          <a href='' style={styles}>Transactions and reports</a> <br />
          <a href='' style={styles}>National Pension Scheme (NPS)</a> <br />
          <a href='' style={styles}>Non Resident Indian (NRI)</a> <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
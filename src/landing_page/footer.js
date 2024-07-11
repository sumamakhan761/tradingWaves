import React from 'react';

let styles = { textDecoration: "none" }
function Footer() {
  return (

    <footer style={{ backgroundColor: "rgd(250,250,250)" }}>
      <div className='container mt-5 border-top'>
        <div className='row mt-5 col-lg-12 col-md-12 col-6' >
          <div className='col'>
            <img src='media/images/3-19.jpg' alt='' style={{ width: "50%" }} />
            <p>&copy; 2024-2025, TradingWaves <br></br> &nbsp;&nbsp;&nbsp;&nbsp;Broking Ltd.
              <br></br>
              &nbsp; &nbsp;&nbsp;All rights reserved.</p>
          </div>
          <div className='col'>
            <p>Company</p>
            <a className='text-muted' style={styles} href=''>About</a><br />
            <a className='text-muted' style={styles} href=''>Products</a><br />
            <a className='text-muted' style={styles} href=''>Pricing</a><br />
            <a className='text-muted' style={styles} href=''>Referral programme</a><br />
            <a className='text-muted' style={styles} href=''>Careers</a><br />
            <a className='text-muted' style={styles} href=''>TradingWaves.tech</a><br />
            <a className='text-muted' style={styles} href=''>Press & media</a><br />
            <a className='text-muted' style={styles} href=''>TradingWaves Cares (CSR)</a><br />
          </div>
          <div className='col'>
            <p>Support</p>
            <a className='text-muted' style={styles} href=''>Contact us</a><br />
            <a className='text-muted' style={styles} href=''>Support portal</a><br />
            <a className='text-muted' style={styles} href=''>Z-Connect blog</a><br />
            <a className='text-muted' style={styles} href=''>List of charges</a><br />
            <a className='text-muted' style={styles} href=''>Downloads & resources</a><br />
            <a className='text-muted' style={styles} href=''>Videos</a><br />
            <a className='text-muted' style={styles} href=''>Market overview</a><br />
            <a className='text-muted' style={styles} href=''>How to file a complaint?</a><br />
            <a className='text-muted' style={styles} href=''>Status of your complaints</a><br />
          </div>
          <div className='col'>
            <p>Accout</p>
            <a className='text-muted' style={styles} href=''>Open an account</a><br />
            <a className='text-muted' style={styles} href=''>Fund transfer</a><br />
          </div>
        </div>

        <div className='mt-5 text-muted' style={{ fontSize: "0.7em", width: "95%" }}>
          <p>TradingWaves Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through TradingWaves Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through TradingWaves Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: TradingWaves Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@TradingWaves.com, for DP related to dp@TradingWaves.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

          <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of TradingWaves and offering such services, please create a ticket here.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
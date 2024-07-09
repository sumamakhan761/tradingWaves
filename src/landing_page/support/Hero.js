import React from 'react';


function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="pt-5 pb-3   " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p- m-3 ">
      <div className='col-2'></div>

        <div className="col-5 pb-5">
          <h1 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br /> <br></br>
          <a href="">Track account opening</a> &nbsp; &nbsp; &nbsp;
          <a href="">Track segment activation</a> &nbsp; &nbsp; &nbsp;
          <a href="">Intraday margins</a> <br/>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-5 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
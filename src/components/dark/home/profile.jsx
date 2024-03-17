import React from 'react';

function Profile() {
  return (
    <section className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img">
                <img src="/assets/imgs/header/profile.jpg" alt="" />
                <span className="icon">
                  <img src="/assets/imgs/header/icon1.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon2.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon4.png" alt="" />
                </span>
              </div>
              <div className="info text-center mt-30">
                <h5>Mohammed Alukkal</h5>
                {/*<p className="fz-13 text-u">Available For Freelance</p>*/}
              </div>
              <div className="social text-center mt-20">
                <a href="https://github.com/mohammed-akl">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/mohammed-akl/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://wa.me/917012088780">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 content main-bg">
          <h1>
            Hello, I’m <span className="main-color">Mohammed Alukkal</span>, Front-end
            Developer and{' '}
            <span className="bord">
              Cyber Security Consultant<i></i>
            </span>{' '}
            Based in India.
          </h1>
          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>5+</h2>
                  <p>
                    Years <br /> of Experance
                  </p>
                </div>
              </div>
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>10+</h2>
                  <p>
                    Pojects <br /> Worldwide
                  </p>
                </div>
              </div>
              <div>
                <div className="butn-presv">
                  <a href="docs/Mohammed-A-CV.pdf" target='_blank' className="butn butn-md butn-bord radius-5 skew">
                    <span>Download C.V</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

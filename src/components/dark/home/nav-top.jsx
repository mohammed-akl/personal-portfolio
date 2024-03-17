import React from 'react';

function NavTop() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="#0" className="logo icon-img-60">
              {/*<img src="/assets/imgs/logo-light.png" alt="" />*/}
            </a>
            <a href="#">
                  <span className="sub-title fz-12">MOHAMMED A</span>
                </a>
          </div>
          <div className="col-md-4 valign">
            <div className="social text-center full-width">
              <a href="https://github.com/mohammed-akl">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/mohammed-akl/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://wa.me/917012088780" target='_blank'>
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href="mailto:mhd.akl@hotmail.com">
                  <span className="sub-title fz-12">mhd.akl@hotmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;

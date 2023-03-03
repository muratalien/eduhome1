import React from 'react'
import FooterLists from '../components/FooterLists';

const Footer = () => {
  return (
    <header id="footer">
      <nav id="foot">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div>
                <img src="https://htmldemo.net/eduhome/eduhome/img/logo/footer-logo.png" />
              </div>
              <div class="row">
                <div class="footer-sec">
                    <div class="copy-write">
                    I must explain to you how all this mistaken idea of denoung pleure and praising pain was born and give you a coete account of the system.
                    </div>
                    <ul class="footer-social-list">
                        <li class="footer-social-item"></li>
                        <li class="footer-social-item"></li>
                        <li class="footer-social-item"></li>
                        <li class="footer-social-item"></li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="col-9">
              <FooterLists />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Footer
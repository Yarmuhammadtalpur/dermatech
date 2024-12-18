import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import { allLinks, allFunctions } from "./scripts";

const Contact = () => {
  return (
    <div className="parent-div ">
      <div className="contact-page pos-abs">
        {/* Lvl 11 */}
        <section className="top-bar pos-abs">
          <div className="top-bar-content pos-abs">
            <div className="contact-info pos-abs">
              <div className="opening-hours pos-abs">
                <div className="clock-icon pos-abs">
                  <div className="clock-icon-vector pos-abs">
                    <div className="nodeBg-29326078 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="fri--wed -1200--29326079 pos-abs">
                  <span className="fri--wed -1200--29326079-0">{`Fri - Wed  12:00 pm to 09:00 pm | Thu – Closed`}</span>
                </div>
              </div>

              <div className="phone-number pos-abs">
                <div className="phone-icon pos-abs">
                  <div className="phone-icon-vector pos-abs">
                    <div className="nodeBg-29326082 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="phone-number-text pos-abs">
                  <span className="phone-number-text-span">{`+971 54 2790 987`}</span>
                </div>
              </div>

              <div className="email-address pos-abs">
                <div className="email-icon pos-abs">
                  <div className="email-icon-vector pos-abs">
                    <div className="nodeBg-29326086 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="email-address-text pos-abs">
                  <span className="email-address-text-span">{`support@gmail.com`}</span>
                </div>
              </div>
            </div>

            <div className="social-media-links pos-abs">
              <div className="social-icon-linkedin pos-abs">
                <div className="linkedin-icon-layer pos-abs">
                  <div className="linkedin-icon-vector pos-abs">
                    <div className="nodeBg-29326091 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="social-icon-facebook pos-abs">
                <div className="facebook-icon-path pos-abs">
                  <div className="nodeBg-29326097 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="social-icon-instagram pos-abs">
                <div className="instagram-icon-path pos-abs">
                  <div className="nodeBg-29326099 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="social-icon-instagram-alt pos-abs">
                <div className="instagram-alt-icon-vector pos-abs">
                  <div className="nodeBg-29326103 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="social-icon-x pos-abs">
                <div className="x-icon-vector pos-abs">
                  <div className="nodeBg-29326101 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="social-icon-twitter pos-abs">
                <div className="twitter-icon-group pos-abs">
                  <div className="twitter-icon-inner-group pos-abs">
                    <div className="twitter-icon-path pos-abs">
                      <div className="nodeBg-29326095 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Nav1 */}
        <section className="navigation-bar pos-abs">
          <div className="nav-content pos-abs">
            <div className="logo pos-abs">
              <img
                src={image1}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-I29326104_29322292 "
                alt="I29326104_29322292-ALT"
              />{" "}
            </div>

            <div className="book-appointment-button pos-abs">
              <div className="book-appointment-text pos-abs">
                <span className="book-appointment-text-span">{`Book An Appointment`}</span>
              </div>
            </div>

            <div className="nav-icons pos-abs">
              <div className="search-icon pos-abs">
                <div className="search-icon-svg pos-abs">
                  <div className="search-icon-outer pos-abs">
                    <div className="nodeBg-I29326104_29322313 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="search-icon-inner pos-abs">
                    <div className="nodeBg-I29326104_29322314 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="language-selector pos-abs">
                <div className="language-text pos-abs">
                  <span className="language-text-span">{`EN`}</span>
                </div>

                <div className="language-dropdown-icon pos-abs">
                  <div className="language-dropdown-icon-vector pos-abs">
                    <div className="nodeBg-I29326104_29322319 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-divider pos-abs"></div>
            </div>

            <div className="nav-menu pos-abs">
              <div className="nav-item-concerns pos-abs">
                <div className="concerns-text pos-abs">
                  <span className="concerns-text-span">{`Concerns`}</span>
                </div>

                <div className="concerns-dropdown-icon pos-abs">
                  <div className="concerns-dropdown-icon-vector pos-abs">
                    <div className="nodeBg-I29326104_29322297 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-item-services pos-abs">
                <div className="services-text pos-abs">
                  <span className="services-text-span">{`Services`}</span>
                </div>

                <div className="services-dropdown-icon pos-abs">
                  <div className="services-dropdown-icon-vector pos-abs">
                    <div className="nodeBg-I29326104_29322301 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-item-specials pos-abs">
                <div className="specials-text pos-abs">
                  <span className="specials-text-span">{`Specials`}</span>
                </div>

                <div className="specials-dropdown-icon pos-abs">
                  <div className="specials-dropdown-icon-vector pos-abs">
                    <div className="nodeBg-I29326104_29322305 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-item-company pos-abs">
                <div className="company-text pos-abs">
                  <span className="company-text-span">{`Company`}</span>
                </div>

                <div className="company-dropdown-icon pos-abs">
                  <div className="company-dropdown-icon-vector pos-abs">
                    <div className="nodeBg-I29326104_29322309 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner1 */}
        <section className="page-banner pos-abs">
          <img
            src={image2}
            className="pos-abs image-div bg-no-repeat bg-crop nodeBg-29326105 "
            alt="29326105-ALT"
          />

          <div className="banner-text pos-abs">
            <div className="banner-breadcrumb pos-abs">
              <span className="banner-breadcrumb-span">{`HOME - CONTACT`}</span>
            </div>

            <div className="banner-title pos-abs">
              <span className="banner-title-span">{`Contact`}</span>
            </div>
          </div>
        </section>
        {/* Others1 */}
        <section className="contact-info-section pos-abs">
          <div className="contact-info-cards pos-abs">
            <div className="email-card pos-abs">
              <div className="email-icon-large pos-abs">
                <div className="email-icon-large-vector pos-abs">
                  <div className="nodeBg-29326113 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="email-card-content pos-abs">
                <div className="email-card-title pos-abs">
                  <span className="email-card-title-span">{`Email Us`}</span>
                </div>

                <div className="email-card-address pos-abs">
                  <span className="email-card-address-span">{`support@gmail.com`}</span>
                </div>
              </div>
            </div>

            <div className="phone-card pos-abs">
              <div className="phone-icon-large pos-abs">
                <div className="phone-icon-large-vector pos-abs">
                  <div className="nodeBg-29326119 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="phone-card-content pos-abs">
                <div className="phone-card-title pos-abs">
                  <span className="phone-card-title-span">{`Call Us`}</span>
                </div>

                <div className="phone-card-number pos-abs">
                  <span className="phone-card-number-span">{`+971 454 78522`}</span>
                </div>
              </div>
            </div>

            <div className="location-card pos-abs">
              <div className="location-icon-large pos-abs">
                <div className="location-icon-group pos-abs">
                  <div className="location-icon-outer pos-abs">
                    <div className="nodeBg-29326126 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="location-icon-inner pos-abs">
                    <div className="nodeBg-29326127 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="location-card-content pos-abs">
                <div className="location-card-title pos-abs">
                  <span className="location-card-title-span">{`Visit Us`}</span>
                </div>

                <div className="location-card-address pos-abs">
                  <span className="location-card-address-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</span>
                </div>
              </div>
            </div>

            <div className="hours-card pos-abs">
              <div className="hours-icon-large pos-abs">
                <div className="hours-icon-vector pos-abs">
                  <div className="nodeBg-29326133 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="hours-card-content pos-abs">
                <div className="hours-card-title pos-abs">
                  <span className="hours-card-title-span">{`Open Hours`}</span>
                </div>

                <div className="hours-card-details pos-abs">
                  <span className="hours-card-details-span">{`Fri - Wed  12:00 pm to 09:00 pm
Thu – Closed`}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact1 */}
        <section className="contact-form-section pos-abs">
          <div className="contact-form-container pos-abs">
            <div className="contact-image pos-abs">
              <img
                src={image3}
                className="pos-abs image-div bg-no-repeat bg-crop nodeBg-29326162 "
                alt="29326162-ALT"
              />{" "}
            </div>

            <div className="contact-form pos-abs">
              <div className="form-heading pos-abs">
                <div className="form-subtitle pos-abs">
                  <span className="form-subtitle-span">{`CONTACT`}</span>
                </div>

                <div className="form-title pos-abs">
                  <span className="form-title-span">{`Request A Consultation`}</span>
                </div>
              </div>

              <div className="form-name-row pos-abs">
                <div className="form-first-name pos-abs">
                  <div className="first-name-label pos-abs">
                    <span className="first-name-label-span">{`First Name`}</span>
                  </div>
                </div>

                <div className="form-last-name pos-abs">
                  <div className="last-name-label pos-abs">
                    <span className="last-name-label-span">{`Last Name`}</span>
                  </div>
                </div>
              </div>

              <div className="form-contact-row pos-abs">
                <div className="form-email pos-abs">
                  <div className="email-label pos-abs">
                    <span className="email-label-span">{`Email`}</span>
                  </div>
                </div>

                <div className="form-phone pos-abs">
                  <div className="phone-label pos-abs">
                    <span className="phone-label-span">{`Phone`}</span>
                  </div>
                </div>
              </div>

              <div className="form-service-mode pos-abs">
                <div className="service-mode-label pos-abs">
                  <span className="service-mode-label-span">{`Service Mode`}</span>
                </div>

                <div className="service-mode-dropdown-icon pos-abs">
                  <div className="service-mode-dropdown-icon-vector pos-abs">
                    <div className="nodeBg-29326156 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="form-message pos-abs">
                <div className="message-label pos-abs">
                  <span className="message-label-span">{`Message`}</span>
                </div>
              </div>

              <div className="form-submit-container pos-abs">
                <div className="form-submit-button pos-abs">
                  <div className="submit-button-text pos-abs">
                    <span className="submit-button-text-span">{`Submit Now`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* map1 */}
        <section className="map-section pos-abs">
          <div className="map-container pos-abs">
            <img
              src={image4}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29326164 "
              alt="29326164-ALT"
            />{" "}
          </div>
          <div className="c-10-29326165-container pos-abs">
            <div className="property-1frame-781789 pos-abs">
              <div className="ellipse-2-781791 pos-abs"></div>

              <div className="ellipse-1-781790 pos-abs"></div>
            </div>
          </div>
        </section>
        {/* Footer1 */}
      </div>
    </div>
  );
};

export default Contact;

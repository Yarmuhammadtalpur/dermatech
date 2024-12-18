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
        <section className="footer pos-abs">
          <div className="footer-content pos-abs">
            <div className="footer-links pos-abs">
              <div className="footer-logo pos-abs">
                <img
                  src={image5}
                  className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                  alt="I29326166_29319849-ALT"
                />{" "}
              </div>

              <div className="footer-quick-links pos-abs">
                <div className="quick-links-title pos-abs">
                  <span className="quick-links-title-span">{`Quick Links`}</span>
                </div>

                <div className="quick-links-list pos-abs">
                  <div className="quick-link-concerns pos-abs">
                    <div className="concerns-link-text pos-abs">
                      <span className="concerns-link-text-span">{`Concerns`}</span>
                    </div>
                  </div>

                  <div className="quick-link-services pos-abs">
                    <div className="services-link-text pos-abs">
                      <span className="services-link-text-span">{`Services`}</span>
                    </div>
                  </div>

                  <div className="quick-link-specials pos-abs">
                    <div className="specials-link-text pos-abs">
                      <span className="specials-link-text-span">{`Specials`}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-company-links pos-abs">
                <div className="company-links-title pos-abs">
                  <span className="company-links-title-span">{`Company`}</span>
                </div>

                <div className="company-links-list pos-abs">
                  <div className="company-link-about pos-abs">
                    <div className="about-link-text pos-abs">
                      <span className="about-link-text-span">{`About`}</span>
                    </div>
                  </div>

                  <div className="company-link-blogs pos-abs">
                    <div className="blogs-link-text pos-abs">
                      <span className="blogs-link-text-span">{`Blogs`}</span>
                    </div>
                  </div>

                  <div className="company-link-contact pos-abs">
                    <div className="contact-link-text pos-abs">
                      <span className="contact-link-text-span">{`Contact Us`}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-support-links pos-abs">
                <div className="support-links-title pos-abs">
                  <span className="support-links-title-span">{`Support`}</span>
                </div>

                <div className="support-links-list pos-abs">
                  <div className="support-link-phone pos-abs">
                    <div className="support-phone-text pos-abs">
                      <span className="support-phone-text-span">{`+971 54 2790 987`}</span>
                    </div>
                  </div>

                  <div className="support-link-email pos-abs">
                    <div className="support-email-text pos-abs">
                      <span className="support-email-text-span">{`support@gmail.com`}</span>
                    </div>
                  </div>

                  <div className="support-link-location pos-abs">
                    <div className="support-location-text pos-abs">
                      <span className="support-location-text-span">{`Location`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-newsletter pos-abs">
              <div className="newsletter-header pos-abs">
                <div className="newsletter-title pos-abs">
                  <span className="newsletter-title-span">{`Subscribe`}</span>
                </div>

                <div className="newsletter-description pos-abs">
                  <span className="newsletter-description-span">{`Join our newsletter to stay up to date on features and releases.`}</span>
                </div>
              </div>

              <div className="newsletter-form pos-abs">
                <div className="newsletter-input-group pos-abs">
                  <div className="newsletter-email-input pos-abs">
                    <div className="newsletter-email-placeholder pos-abs">
                      <span className="newsletter-email-placeholder-span">{`Enter your email`}</span>
                    </div>
                  </div>

                  <div className="newsletter-submit-button pos-abs">
                    <div className="newsletter-submit-text pos-abs">
                      <span className="newsletter-submit-text-span">{`Subscribe`}</span>
                    </div>
                  </div>
                </div>

                <div className="newsletter-terms pos-abs">
                  <span className="newsletter-terms-span">{`By subscribing you agree to with our`}</span>
                  <span className="newsletter-terms-span-1">{` `}</span>
                  <span className="newsletter-terms-span-2">{`Privacy Policy`}</span>
                  <span className="newsletter-terms-span-3">{` `}</span>
                  <span className="newsletter-terms-span-4">{`and provide consent to receive updates from our company.`}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom pos-abs">
            <div className="footer-credits pos-abs">
              <div className="footer-divider pos-abs"></div>

              <div className="footer-bottom-content pos-abs">
                <div className="footer-copyright pos-abs">
                  <div className="copyright-text pos-abs">
                    <span className="copyright-text-span">{`© 2024 Designed & Managed by Prism.`}</span>
                  </div>

                  <div className="footer-legal-links pos-abs">
                    <div className="privacy-policy-link pos-abs">
                      <span className="privacy-policy-link-span">{`Privacy Policy`}</span>
                    </div>

                    <div className="terms-of-service-link pos-abs">
                      <span className="terms-of-service-link-span">{`Terms of Service`}</span>
                    </div>

                    <div className="cookies-settings-link pos-abs">
                      <span className="cookies-settings-link-span">{`Cookies Settings`}</span>
                    </div>
                  </div>
                </div>

                <div className="footer-social-links pos-abs">
                  <div className="social-icon-linkedin-footer pos-abs">
                    <div className="linkedin-icon-layer-footer pos-abs">
                      <div className="linkedin-icon-vector-footer pos-abs">
                        <div className="nodeBg-I29326166_29319905 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>

                  <div className="social-icon-facebook-footer pos-abs">
                    <div className="facebook-icon-path-footer pos-abs">
                      <div className="nodeBg-I29326166_29319911 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="social-icon-instagram-footer pos-abs">
                    <div className="instagram-icon-path-footer pos-abs">
                      <div className="nodeBg-I29326166_29319913 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="social-icon-x-footer pos-abs">
                    <div className="x-icon-vector-footer pos-abs">
                      <div className="nodeBg-I29326166_29319915 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="social-icon-instagram-alt-footer pos-abs">
                    <div className="instagram-alt-icon-vector-footer pos-abs">
                      <div className="nodeBg-I29326166_29319917 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="social-icon-twitter-footer pos-abs">
                    <div className="twitter-icon-group-footer pos-abs">
                      <div className="twitter-icon-inner-group-footer pos-abs">
                        <div className="twitter-icon-path-footer pos-abs">
                          <div className="nodeBg-I29326166_29319909 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
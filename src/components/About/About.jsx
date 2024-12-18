import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";
import image8 from "./images/image8.png";
import image9 from "./images/image9.png";
import image10 from "./images/image10.png";
import image11 from "./images/image11.png";
import image12 from "./images/image12.png";
import image13 from "./images/image13.png";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import { allLinks, allFunctions } from "./scripts";

const About = () => {
  return (
    <div className="parent-div ">
      <div className="about-page pos-abs">
        {/* Lvl 11 */}
        <section className="top-bar pos-abs">
          <div className="top-bar-content pos-abs">
            <div className="contact-info pos-abs">
              <div className="opening-hours pos-abs">
                <div className="clock-icon pos-abs">
                  <div className="clock-icon-vector pos-abs">
                    <div className="nodeBg-29323966 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="fri--wed -1200--29323967 pos-abs">
                  <span className="fri--wed -1200--29323967-0">{`Fri - Wed  12:00 pm to 09:00 pm | Thu – Closed`}</span>
                </div>
              </div>

              <div className="phone-contact pos-abs">
                <div className="phone-icon pos-abs">
                  <div className="phone-icon-vector pos-abs">
                    <div className="nodeBg-29323970 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="phone-number pos-abs">
                  <span className="phone-number-span">{`+971 54 2790 987`}</span>
                </div>
              </div>

              <div className="email-contact pos-abs">
                <div className="email-icon pos-abs">
                  <div className="email-icon-vector pos-abs">
                    <div className="nodeBg-29323974 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="email-address pos-abs">
                  <span className="email-address-span">{`support@gmail.com`}</span>
                </div>
              </div>
            </div>

            <div className="social-media-icons pos-abs">
              <div className="facebook-icon pos-abs">
                <div className="facebook-icon-layer pos-abs">
                  <div className="facebook-icon-vector pos-abs">
                    <div className="nodeBg-29323979 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="twitter-icon pos-abs">
                <div className="twitter-icon-path pos-abs">
                  <div className="nodeBg-29323985 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="linkedin-icon pos-abs">
                <div className="linkedin-icon-path pos-abs">
                  <div className="nodeBg-29323987 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="tiktok-icon pos-abs">
                <div className="tiktok-icon-vector pos-abs">
                  <div className="nodeBg-29323991 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="x-icon pos-abs">
                <div className="x-icon-vector pos-abs">
                  <div className="nodeBg-29323989 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="instagram-icon pos-abs">
                <div className="instagram-icon-group pos-abs">
                  <div className="instagram-icon-inner-group pos-abs">
                    <div className="instagram-icon-path pos-abs">
                      <div className="nodeBg-29323983 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Nav1 */}
        <section className="main-navigation pos-abs">
          <div className="content-I29323992_29322291 pos-abs">
            <div className="logo-1-I29323992_29322292 pos-abs">
              <img
                src={image1}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-I29323992_29322292 "
                alt="I29323992_29322292-ALT"
              />{" "}
            </div>

            <div className="btnbook-I29323992_29322320 pos-abs">
              <div className="book-an-appoint-I29323992_29322321 pos-abs">
                <span className="book-an-appoint-I29323992_29322321-0">{`Book An Appointment`}</span>
              </div>
            </div>

            <div className="icons-I29323992_29322310 pos-abs">
              <div className="search-I29323992_29322311 pos-abs">
                <div className="detailsmodal--d-I29323992_29322312 pos-abs">
                  <div className="vector-I29323992_29322313 pos-abs">
                    <div className="nodeBg-I29323992_29322313 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="vector-I29323992_29322314 pos-abs">
                    <div className="nodeBg-I29323992_29322314 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="c-4-I29323992_29322316 pos-abs">
                <div className="en-I29323992_29322317 pos-abs">
                  <span className="en-I29323992_29322317-0">{`EN`}</span>
                </div>

                <div className="iconamoonarrowu-I29323992_29322318 pos-abs">
                  <div className="vector-I29323992_29322319 pos-abs">
                    <div className="nodeBg-I29323992_29322319 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="line-5-I29323992_29322315 pos-abs"></div>
            </div>

            <div className="menu-I29323992_29322293 pos-abs">
              <div className="c-11-I29323992_29322294 pos-abs">
                <div className="concerns-I29323992_29322295 pos-abs">
                  <span className="concerns-I29323992_29322295-0">{`Concerns`}</span>
                </div>

                <div className="iconamoonarrowu-I29323992_29322296 pos-abs">
                  <div className="vector-I29323992_29322297 pos-abs">
                    <div className="nodeBg-I29323992_29322297 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="c-10-I29323992_29322298 pos-abs">
                <div className="services-I29323992_29322299 pos-abs">
                  <span className="services-I29323992_29322299-0">{`Services`}</span>
                </div>

                <div className="iconamoonarrowu-I29323992_29322300 pos-abs">
                  <div className="vector-I29323992_29322301 pos-abs">
                    <div className="nodeBg-I29323992_29322301 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="c-14-I29323992_29322302 pos-abs">
                <div className="specials-I29323992_29322303 pos-abs">
                  <span className="specials-I29323992_29322303-0">{`Specials`}</span>
                </div>

                <div className="iconamoonarrowu-I29323992_29322304 pos-abs">
                  <div className="vector-I29323992_29322305 pos-abs">
                    <div className="nodeBg-I29323992_29322305 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="c-13-I29323992_29322306 pos-abs">
                <div className="company-I29323992_29322307 pos-abs">
                  <span className="company-I29323992_29322307-0">{`Company`}</span>
                </div>

                <div className="iconamoonarrowu-I29323992_29322308 pos-abs">
                  <div className="vector-I29323992_29322309 pos-abs">
                    <div className="nodeBg-I29323992_29322309 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
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
            className="pos-abs image-div bg-no-repeat bg-crop nodeBg-29323993 "
            alt="29323993-ALT"
          />

          <div className="banner-content pos-abs">
            <div className="banner-text pos-abs">
              <div className="breadcrumb pos-abs">
                <span className="breadcrumb-span">{`HOME - ABOUT`}</span>
              </div>

              <div className="page-title pos-abs">
                <span className="page-title-span">{`About`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* About1 */}
        <section className="about-section pos-abs">
          <div className="about-content pos-abs">
            <div className="about-image pos-abs">
              <div className="about-image-placeholder pos-abs">
                <img
                  src={image3}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324001 "
                  alt="29324001-ALT"
                />{" "}
              </div>

              <div className="shield-icon pos-abs">
                <div className="shield-icon-group pos-abs">
                  <div className="shield-icon-vector pos-abs">
                    <div className="nodeBg-29324006 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="heart-icon pos-abs">
                <div className="heart-icon-vector pos-abs">
                  <div className="nodeBg-29324003 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="doctor-icon pos-abs">
                <div className="doctor-icon-vector pos-abs">
                  <div className="nodeBg-29324008 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="medical-icon pos-abs">
                <div className="medical-icon-vector pos-abs">
                  <div className="nodeBg-29324010 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>

            <div className="about-text-column pos-abs">
              <div className="about-text-content pos-abs">
                <div className="about-heading pos-abs">
                  <div className="about-subheading pos-abs">
                    <span className="about-subheading-span">{`Welcome to Our Clinic!`}</span>
                  </div>

                  <div className="about-title pos-abs">
                    <span className="about-title-span">{`Derma Tech Poly Clinic L.L.C`}</span>
                  </div>
                </div>

                <div className="about-description pos-abs">
                  <span className="about-description-span">{`Welcome to DERMA TECH POLY CLINIC L.L.C, your premier destination for comprehensive and cutting-edge aesthetic services in the heart of Dubai. At DERMA TECH POLY CLINIC, we are dedicated to help you achieve your beauty and wellness goals through a range of advanced and personalized treatments. With a commitment to excellence and a focus on delivering transformative results, we stand as a beacon of innovation and care in the field of aesthetic medicine.`}</span>
                </div>
              </div>

              <div className="cta-buttons pos-abs">
                <div className="book-appointment-button pos-abs">
                  <div className="book-appointment-text pos-abs">
                    <span className="book-appointment-text-span">{`Book Appointment`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Others1 */}
        <section className="features-section pos-abs">
          <div className="features-slider pos-abs">
            <div className="feature-card pos-abs">
              <div className="feature-icon pos-abs">
                <div className="doctor-feature-icon pos-abs">
                  <div className="doctor-feature-vector-1 pos-abs">
                    <div className="nodeBg-29324025 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="doctor-feature-vector-2 pos-abs">
                    <div className="nodeBg-29324026 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="doctor-feature-vector-8 pos-abs">
                    <div className="nodeBg-29324032 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="doctor-feature-vector-7 pos-abs">
                    <div className="nodeBg-29324031 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="doctor-feature-vector-4 pos-abs">
                    <div className="nodeBg-29324028 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="doctor-feature-vector-5 pos-abs">
                    <div className="nodeBg-29324029 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="doctor-feature-vector-3 pos-abs">
                    <div className="nodeBg-29324027 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="doctor-feature-vector-9 pos-abs">
                    <div className="nodeBg-29324033 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="doctor-feature-vector-11 pos-abs">
                    <div className="nodeBg-29324035 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="doctor-feature-vector-6 pos-abs">
                    <div className="nodeBg-29324030 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="doctor-feature-vector-12 pos-abs">
                    <div className="nodeBg-29324036 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="doctor-feature-vector-10 pos-abs">
                    <div className="nodeBg-29324034 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="doctor-feature-vector-13 pos-abs">
                    <div className="nodeBg-29324037 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="doctor-feature-vector-14 pos-abs">
                    <div className="nodeBg-29324038 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="feature-text pos-abs">
                <div className="feature-title pos-abs">
                  <span className="feature-title-span">{`Qualified Doctor`}</span>
                </div>

                <div className="feature-description pos-abs">
                  <span className="feature-description-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</span>
                </div>
              </div>
            </div>

            <div className="feature-card-1 pos-abs">
              <div className="feature-icon-1 pos-abs">
                <div className="quality-feature-icon pos-abs">
                  <div className="quality-feature-group pos-abs">
                    <div className="quality-feature-inner-group pos-abs">
                      <div className="quality-feature-vector-1 pos-abs">
                        <div className="nodeBg-29324047 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>

                      <div className="quality-feature-vector-4 pos-abs">
                        <div className="nodeBg-29324050 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>

                      <div className="quality-feature-vector-3 pos-abs">
                        <div className="nodeBg-29324049 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>

                      <div className="quality-feature-vector-2 pos-abs">
                        <div className="nodeBg-29324048 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-text-1 pos-abs">
                <div className="feature-title-1 pos-abs">
                  <span className="feature-title-1-span">{`Certified Products`}</span>
                </div>

                <div className="feature-description-1 pos-abs">
                  <span className="feature-description-1-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</span>
                </div>
              </div>
            </div>

            <div className="feature-card-2 pos-abs">
              <div className="feature-icon-2 pos-abs">
                <div className="equipment-feature-icon pos-abs">
                  <div className="equipment-feature-group pos-abs">
                    <div className="equipment-feature-vector-1 pos-abs">
                      <div className="nodeBg-29324058 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="equipment-feature-vector-8 pos-abs">
                      <div className="nodeBg-29324065 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="equipment-feature-vector-2 pos-abs">
                      <div className="nodeBg-29324059 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="equipment-feature-vector-3 pos-abs">
                      <div className="nodeBg-29324060 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="equipment-feature-vector-6 pos-abs">
                      <div className="nodeBg-29324063 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="equipment-feature-vector-4 pos-abs">
                      <div className="nodeBg-29324061 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="equipment-feature-vector-5 pos-abs">
                      <div className="nodeBg-29324062 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="equipment-feature-vector-7 pos-abs">
                      <div className="nodeBg-29324064 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-text-2 pos-abs">
                <div className="feature-title-2 pos-abs">
                  <span className="feature-title-2-span">{`Modern Equipment`}</span>
                </div>

                <div className="feature-description-2 pos-abs">
                  <span className="feature-description-2-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</span>
                </div>
              </div>
            </div>

            <div className="feature-card-3 pos-abs">
              <div className="feature-icon-3 pos-abs">
                <div className="smile-feature-icon pos-abs">
                  <div className="smile-feature-group pos-abs">
                    <div className="smile-feature-inner-group pos-abs">
                      <div className="smile-feature-vector-group pos-abs">
                        <div className="smile-feature-vector-2 pos-abs">
                          <div className="nodeBg-29324076 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>

                        <div className="smile-feature-vector-4 pos-abs">
                          <div className="nodeBg-29324078 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>

                        <div className="smile-feature-vector-3 pos-abs">
                          <div className="nodeBg-29324077 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>

                        <div className="smile-feature-vector-1 pos-abs">
                          <div className="nodeBg-29324075 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-text-3 pos-abs">
                <div className="feature-title-3 pos-abs">
                  <span className="feature-title-3-span">{`Peoples Place`}</span>
                </div>

                <div className="feature-description-3 pos-abs">
                  <span className="feature-description-3-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Choose1 */}
        <section className="why-choose-us-section pos-abs">
          <div className="why-choose-us-image pos-abs">
            <img
              src={image4}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-29324083 "
              alt="29324083-ALT"
            />{" "}
          </div>

          <div className="why-choose-us-content pos-abs">
            <div className="why-choose-us-heading pos-abs">
              <div className="why-choose-us-subheading pos-abs">
                <span className="why-choose-us-subheading-span">{`WHY CHOOSE US`}</span>
              </div>

              <div className="why-choose-us-title pos-abs">
                <span className="why-choose-us-title-span">{`Choose The Best For YourHealth`}</span>
              </div>
            </div>

            <div className="why-choose-us-features pos-abs">
              <div className="feature-row pos-abs">
                <div className="feature-item pos-abs">
                  <div className="feature-icon-4 pos-abs">
                    <div className="feature-icon-vector-1 pos-abs">
                      <div className="nodeBg-29324092 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="feature-icon-vector-2 pos-abs">
                      <div className="nodeBg-29324093 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="feature-icon-vector-8 pos-abs">
                      <div className="nodeBg-29324099 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="feature-icon-vector-7 pos-abs">
                      <div className="nodeBg-29324098 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="feature-icon-vector-4 pos-abs">
                      <div className="nodeBg-29324095 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="feature-icon-vector-5 pos-abs">
                      <div className="nodeBg-29324096 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="feature-icon-vector-3 pos-abs">
                      <div className="nodeBg-29324094 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="feature-icon-vector-9 pos-abs">
                      <div className="nodeBg-29324100 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="feature-icon-vector-11 pos-abs">
                      <div className="nodeBg-29324102 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="feature-icon-vector-6 pos-abs">
                      <div className="nodeBg-29324097 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="feature-icon-vector-12 pos-abs">
                      <div className="nodeBg-29324103 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="feature-icon-vector-10 pos-abs">
                      <div className="nodeBg-29324101 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="feature-icon-vector-13 pos-abs">
                      <div className="nodeBg-29324104 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="feature-icon-vector-14 pos-abs">
                      <div className="nodeBg-29324105 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="feature-text-4 pos-abs">
                    <div className="feature-title-4 pos-abs">
                      <span className="feature-title-4-span">{`Professional Staff`}</span>
                    </div>

                    <div className="feature-description-4 pos-abs">
                      <span className="feature-description-4-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</span>
                    </div>
                  </div>
                </div>

                <div className="feature-item-1 pos-abs">
                  <div className="feature-icon-5 pos-abs">
                    <div className="feature-icon-group-1 pos-abs">
                      <div className="feature-icon-inner-group-1 pos-abs">
                        <div className="feature-icon-vector-1 pos-abs">
                          <div className="nodeBg-29324116 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                    </div>

                    <div className="feature-icon-group pos-abs">
                      <div className="feature-icon-inner-group pos-abs">
                        <div className="feature-icon-vector pos-abs">
                          <div className="nodeBg-29324113 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-text-5 pos-abs">
                    <div className="feature-title-5 pos-abs">
                      <span className="feature-title-5-span">{`Emergency Case`}</span>
                    </div>

                    <div className="feature-description-5 pos-abs">
                      <span className="feature-description-5-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-row-1 pos-abs">
                <div className="feature-item-2 pos-abs">
                  <div className="feature-icon-6 pos-abs">
                    <div className="feature-icon-group-2 pos-abs">
                      <div className="feature-icon-vector-1-1 pos-abs">
                        <div className="nodeBg-29324124 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>

                      <div className="feature-icon-vector-4-1 pos-abs">
                        <div className="nodeBg-29324127 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>

                      <div className="feature-icon-vector-2-1 pos-abs">
                        <div className="nodeBg-29324125 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>

                      <div className="feature-icon-vector-3-1 pos-abs">
                        <div className="nodeBg-29324126 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-text-6 pos-abs">
                    <div className="feature-title-6 pos-abs">
                      <span className="feature-title-6-span">{`Online Appointment`}</span>
                    </div>

                    <div className="feature-description-6 pos-abs">
                      <span className="feature-description-6-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</span>
                    </div>
                  </div>
                </div>

                <div className="feature-item-3 pos-abs">
                  <div className="feature-icon-7 pos-abs">
                    <div className="feature-icon-group-2 pos-abs">
                      <div className="feature-icon-inner-group-2 pos-abs">
                        <div className="feature-icon-vector-2-2 pos-abs">
                          <div className="nodeBg-29324138 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                    </div>

                    <div className="feature-icon-group-1 pos-abs">
                      <div className="feature-icon-inner-group-1 pos-abs">
                        <div className="feature-icon-vector-1-2 pos-abs">
                          <div className="nodeBg-29324135 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                    </div>

                    <div className="feature-icon-group-3 pos-abs">
                      <div className="feature-icon-inner-group-3 pos-abs">
                        <div className="feature-icon-vector-3-2 pos-abs">
                          <div className="nodeBg-29324141 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature-text-7 pos-abs">
                    <div className="feature-title-7 pos-abs">
                      <span className="feature-title-7-span">{`24/7 Services`}</span>
                    </div>

                    <div className="feature-description-7 pos-abs">
                      <span className="feature-description-7-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-section pos-abs">
            <div className="stat-card pos-abs">
              <div className="stat-content pos-abs">
                <div className="stat-number pos-abs">
                  <span className="stat-number-span">{`75+`}</span>
                </div>

                <div className="stat-label pos-abs">
                  <span className="stat-label-span">{`Expert Doctors`}</span>
                </div>
              </div>
            </div>

            <div className="stat-card-1 pos-abs">
              <div className="stat-content-1 pos-abs">
                <div className="stat-number-1 pos-abs">
                  <span className="stat-number-1-span">{`7k`}</span>
                </div>

                <div className="stat-label-1 pos-abs">
                  <span className="stat-label-1-span">{`Happy Patients`}</span>
                </div>
              </div>
            </div>

            <div className="stat-card-2 pos-abs">
              <div className="stat-content-2 pos-abs">
                <div className="stat-number-2 pos-abs">
                  <span className="stat-number-2-span">{`850`}</span>
                </div>

                <div className="stat-label-2 pos-abs">
                  <span className="stat-label-2-span">{`Modern Rooms`}</span>
                </div>
              </div>
            </div>

            <div className="stat-card-3 pos-abs">
              <div className="stat-content-3 pos-abs">
                <div className="stat-number-3 pos-abs">
                  <span className="stat-number-3-span">{`15`}</span>
                </div>

                <div className="stat-label-3 pos-abs">
                  <span className="stat-label-3-span">{`Awards Win`}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Vision1 */}
        <section className="vision-section pos-abs">
          <div className="vision-image pos-abs">
            <img
              src={image5}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-29324262 "
              alt="29324262-ALT"
            />{" "}
          </div>

          <div className="vision-title pos-abs">
            <span className="vision-title-span">{`Our Vision`}</span>
          </div>

          <div className="vision-description pos-abs">
            <span className="vision-description-span">{`Deep down we believe everyone deserves to feel their best. We envision a world where beauty is not all about appearance. But it’s a mixture of health, self-love, confidence, and embracing a positive and empowered lifestyle.`}</span>
          </div>
        </section>
        {/* Team1 */}
        <section className="team-section pos-abs">
          <div className="team-section-header pos-abs">
            <div className="team-section-subheading pos-abs">
              <span className="team-section-subheading-span">{`TEAM`}</span>
            </div>

            <div className="team-section-content pos-abs">
              <div className="team-section-title pos-abs">
                <span className="team-section-title-span">{`Meet Our People`}</span>
              </div>

              <div className="team-section-description pos-abs">
                <span className="team-section-description-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</span>
              </div>
            </div>
          </div>

          <div className="team-members pos-abs">
            <div className="team-members-row pos-abs">
              <div className="team-members-container pos-abs">
                <div className="team-member-card pos-abs">
                  <div className="team-member-image pos-abs">
                    <img
                      src={image6}
                      className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324172 "
                      alt="29324172-ALT"
                    />{" "}
                  </div>

                  <div className="team-member-info pos-abs">
                    <div className="team-member-details pos-abs">
                      <div className="team-member-name pos-abs">
                        <span className="team-member-name-span">{`Black Marvin`}</span>
                      </div>

                      <div className="team-member-position pos-abs">
                        <span className="team-member-position-span">{`Medical Assistant`}</span>
                      </div>
                    </div>

                    <div className="team-member-bio pos-abs">
                      <span className="team-member-bio-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.`}</span>
                    </div>
                  </div>
                </div>

                <div className="team-member-card-1 pos-abs">
                  <div className="team-member-image-1 pos-abs">
                    <img
                      src={image7}
                      className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324179 "
                      alt="29324179-ALT"
                    />{" "}
                  </div>

                  <div className="team-member-info-1 pos-abs">
                    <div className="team-member-details-1 pos-abs">
                      <div className="team-member-name-1 pos-abs">
                        <span className="team-member-name-1-span">{`Eleanor Pena`}</span>
                      </div>

                      <div className="team-member-position-1 pos-abs">
                        <span className="team-member-position-1-span">{`Doctor`}</span>
                      </div>
                    </div>

                    <div className="team-member-bio-1 pos-abs">
                      <span className="team-member-bio-1-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.`}</span>
                    </div>
                  </div>
                </div>

                <div className="team-member-card-2 pos-abs">
                  <div className="team-member-image-2 pos-abs">
                    <img
                      src={image8}
                      className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324186 "
                      alt="29324186-ALT"
                    />{" "}
                  </div>

                  <div className="team-member-info-2 pos-abs">
                    <div className="team-member-details-2 pos-abs">
                      <div className="team-member-name-2 pos-abs">
                        <span className="team-member-name-2-span">{`Arlene Maccy`}</span>
                      </div>

                      <div className="team-member-position-2 pos-abs">
                        <span className="team-member-position-2-span">{`Nursing Assistant`}</span>
                      </div>
                    </div>

                    <div className="team-member-bio-2 pos-abs">
                      <span className="team-member-bio-2-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.`}</span>
                    </div>
                  </div>
                </div>

                <div className="team-member-card-3 pos-abs">
                  <div className="team-member-image-3 pos-abs">
                    <img
                      src={image9}
                      className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324193 "
                      alt="29324193-ALT"
                    />{" "}
                  </div>

                  <div className="team-member-info-3 pos-abs">
                    <div className="team-member-details-3 pos-abs">
                      <div className="team-member-name-3 pos-abs">
                        <span className="team-member-name-3-span">{`Jenny Wilson`}</span>
                      </div>

                      <div className="team-member-position-3 pos-abs">
                        <span className="team-member-position-3-span">{`Senior Doctor`}</span>
                      </div>
                    </div>

                    <div className="team-member-bio-3 pos-abs">
                      <span className="team-member-bio-3-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.`}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-slider-controls pos-abs">
                <div className="slider-arrows pos-abs">
                  <div className="arrows-29324207-container pos-abs">
                    <div className="property-1backa-28533 pos-abs">
                      {/* fe:arrow-up1 */}
                      <section className="fearrowup-28534 pos-abs">
                        <div className="vector-28535 pos-abs">
                          <div className="nodeBg-28535 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="arrows-29324208-container pos-abs">
                    <div className="property-1nexta-28536 pos-abs">
                      {/* fe:arrow-up1 */}
                      <section className="fearrowup-28537 pos-abs">
                        <div className="vector-28538 pos-abs">
                          <div className="nodeBg-28538 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>

                <div className="slider-dots pos-abs">
                  <div className="slider-dot pos-abs"></div>

                  <div className="slider-dot-1 pos-abs"></div>

                  <div className="slider-dot-2 pos-abs"></div>

                  <div className="slider-dot-3 pos-abs"></div>

                  <div className="slider-dot-4 pos-abs"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Owner1 */}
        <section className="owner-section pos-abs">
          <div className="owner-content pos-abs">
            <div className="owner-image pos-abs">
              <img
                src={image10}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324270 "
                alt="29324270-ALT"
              />{" "}
            </div>

            <div className="owner-text pos-abs">
              <div className="owner-title pos-abs">
                <span className="owner-title-span">{`Meet The Owner`}</span>
              </div>

              <div className="owner-description pos-abs">
                <span className="owner-description-span">{`Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Logo1 */}
        <section className="certifications-section pos-abs">
          <div className="certifications-container pos-abs">
            <div className="certification-logos pos-abs">
              <div className="certification-logo pos-abs">
                <img
                  src={image11}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-29324275 "
                  alt="Certification logo"
                />{" "}
              </div>

              <div className="certification-logo-1 pos-abs">
                <img
                  src={image11}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-29324276 "
                  alt="Certification logo"
                />{" "}
              </div>

              <div className="certification-logo-2 pos-abs">
                <img
                  src={image11}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-29324277 "
                  alt="Certification logo"
                />{" "}
              </div>

              <div className="certification-logo-3 pos-abs">
                <img
                  src={image11}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-29324278 "
                  alt="Certification logo"
                />{" "}
              </div>

              <div className="certification-logo-4 pos-abs">
                <img
                  src={image11}
                  className="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-29324279 "
                  alt="Certification logo"
                />{" "}
              </div>
            </div>

            <div className="certifications-heading pos-abs">
              <span className="certifications-heading-span">{`Our Certifications`}</span>
            </div>
          </div>
        </section>
        {/* Testimonials1 */}
        <section className="testimonials-section pos-abs">
          <div className="testimonial-background-shape pos-abs">
            <img
              src={image12}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324281 "
              alt="29324281-ALT"
            />{" "}
          </div>

          <div className="testimonial-content pos-abs">
            <div className="testimonial-image pos-abs">
              <img
                src={image5}
                className="pos-abs image-div bg-no-repeat bg-crop nodeBg-29324283 "
                alt="29324283-ALT"
              />{" "}
            </div>

            <div className="testimonial-text pos-abs">
              <div className="testimonial-rating pos-abs">
                <div className="rating-star pos-abs">
                  <div className="nodeBg-29324286 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="rating-star-1 pos-abs">
                  <div className="nodeBg-29324287 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="rating-star-2 pos-abs">
                  <div className="nodeBg-29324288 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="rating-star-3 pos-abs">
                  <div className="nodeBg-29324289 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="rating-star-4 pos-abs">
                  <div className="nodeBg-29324290 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="testimonial-quote pos-abs">
                <span className="testimonial-quote-span">{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."`}</span>
              </div>

              <div className="testimonial-author pos-abs">
                <div className="author-details pos-abs">
                  <div className="author-name pos-abs">
                    <span className="author-name-span">{`Robert Fox`}</span>
                  </div>

                  <div className="author-title pos-abs">
                    <span className="author-title-span">{`Dog Trainer`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-controls pos-abs">
            <div className="testimonial-arrows pos-abs">
              <div className="testimonial-prev-arrow pos-abs">
                <div className="prev-arrow-icon pos-abs">
                  <div className="prev-arrow-vector pos-abs">
                    <div className="nodeBg-29324306 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="testimonial-next-arrow pos-abs">
                <div className="next-arrow-icon pos-abs">
                  <div className="next-arrow-vector pos-abs">
                    <div className="nodeBg-29324309 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-dots pos-abs">
              <div className="testimonial-dot pos-abs"></div>

              <div className="testimonial-dot-1 pos-abs"></div>

              <div className="testimonial-dot-2 pos-abs"></div>

              <div className="testimonial-dot-3 pos-abs"></div>

              <div className="testimonial-dot-4 pos-abs"></div>
            </div>
          </div>
        </section>
        {/* FAQ1 */}
        <section className="faq-section pos-abs">
          <div className="faq-section-header pos-abs">
            <div className="faq-section-subheading pos-abs">
              <span className="faq-section-subheading-span">{`SUPPORT`}</span>
            </div>

            <div className="faq-section-content pos-abs">
              <div className="faq-section-title pos-abs">
                <span className="faq-section-title-span">{`Frequently Asked Questions`}</span>
              </div>

              <div className="faq-section-description pos-abs">
                <span className="faq-section-description-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</span>
              </div>
            </div>
          </div>

          <div className="faq-accordion pos-abs">
            <div className="faq-row pos-abs">
              <div className="faq-item pos-abs">
                <div className="faq-question-wrapper pos-abs">
                  <div className="faq-toggle-icon pos-abs">
                    <div className="faq-toggle-icon-vector pos-abs">
                      <div className="nodeBg-29324221 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-question pos-abs">
                    <span className="faq-question-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-answer-wrapper pos-abs">
                  <div className="faq-answer pos-abs">
                    <span className="faq-answer-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>

              <div className="faq-item-1 pos-abs">
                <div className="faq-question-wrapper-1 pos-abs">
                  <div className="faq-toggle-icon-1 pos-abs">
                    <div className="faq-toggle-icon-vector-1 pos-abs">
                      <div className="nodeBg-29324228 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-question-1 pos-abs">
                    <span className="faq-question-1-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-answer-wrapper-1 pos-abs">
                  <div className="faq-answer-1 pos-abs">
                    <span className="faq-answer-1-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-row-1 pos-abs">
              <div className="faq-item-2 pos-abs">
                <div className="faq-question-wrapper-2 pos-abs">
                  <div className="faq-toggle-icon-2 pos-abs">
                    <div className="faq-toggle-icon-vector-2 pos-abs">
                      <div className="nodeBg-29324236 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-question-2 pos-abs">
                    <span className="faq-question-2-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-answer-wrapper-2 pos-abs">
                  <div className="faq-answer-2 pos-abs">
                    <span className="faq-answer-2-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>

              <div className="faq-item-3 pos-abs">
                <div className="faq-question-wrapper-3 pos-abs">
                  <div className="faq-toggle-icon-3 pos-abs">
                    <div className="faq-toggle-icon-vector-3 pos-abs">
                      <div className="nodeBg-29324243 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-question-3 pos-abs">
                    <span className="faq-question-3-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-answer-wrapper-3 pos-abs">
                  <div className="faq-answer-3 pos-abs">
                    <span className="faq-answer-3-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-row-2 pos-abs">
              <div className="faq-item-4 pos-abs">
                <div className="faq-question-wrapper-4 pos-abs">
                  <div className="faq-toggle-icon-4 pos-abs">
                    <div className="faq-toggle-icon-vector-4 pos-abs">
                      <div className="nodeBg-29324251 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-question-4 pos-abs">
                    <span className="faq-question-4-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-answer-wrapper-4 pos-abs">
                  <div className="faq-answer-4 pos-abs">
                    <span className="faq-answer-4-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>

              <div className="faq-item-5 pos-abs">
                <div className="faq-question-wrapper-5 pos-abs">
                  <div className="faq-toggle-icon-5 pos-abs">
                    <div className="faq-toggle-icon-vector-5 pos-abs">
                      <div className="nodeBg-29324258 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-question-5 pos-abs">
                    <span className="faq-question-5-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-answer-wrapper-5 pos-abs">
                  <div className="faq-answer-5 pos-abs">
                    <span className="faq-answer-5-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
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

export default About;

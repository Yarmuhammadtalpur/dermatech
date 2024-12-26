import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import React, { useEffect } from "react";
import "./style.css";

const ServiceDualite = () => {
  return (
    <div className="parent-div ">
      <div className="services-page pos-abs">
        {/* Lvl 11 */}
        <section className="top-bar pos-abs">
          <div className="top-bar-content pos-abs">
            <div className="contact-info pos-abs">
              <div className="business-hours pos-abs">
                <div className="clock-icon pos-abs">
                  <div className="clock-icon-vector pos-abs">
                    <div className="nodeBg-29324878 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="fri--wed -1200--29324879 pos-abs">
                  <span className="fri--wed -1200--29324879-0">{`Fri - Wed  12:00 pm to 09:00 pm | Thu – Closed`}</span>
                </div>
              </div>

              <div className="phone-contact pos-abs">
                <div className="phone-icon pos-abs">
                  <div className="phone-icon-vector pos-abs">
                    <div className="nodeBg-29324882 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="phone-number pos-abs">
                  <span className="phone-number-span">{`+971 54 2790 987`}</span>
                </div>
              </div>

              <div className="email-contact pos-abs">
                <div className="email-icon pos-abs">
                  <div className="email-icon-vector pos-abs">
                    <div className="nodeBg-29324886 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="email-address pos-abs">
                  <span className="email-address-span">{`support@gmail.com`}</span>
                </div>
              </div>
            </div>

            <div className="social-media-icons pos-abs">
              <div className="social-icon pos-abs">
                <div className="social-icon-layer pos-abs">
                  <div className="social-icon-vector pos-abs">
                    <div className="nodeBg-29324891 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="facebook-icon pos-abs">
                <div className="facebook-icon-path pos-abs">
                  <div className="nodeBg-29324897 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="linkedin-icon pos-abs">
                <div className="linkedin-icon-path pos-abs">
                  <div className="nodeBg-29324899 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="instagram-icon pos-abs">
                <div className="instagram-icon-vector pos-abs">
                  <div className="nodeBg-29324903 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="twitter-icon pos-abs">
                <div className="twitter-icon-vector pos-abs">
                  <div className="nodeBg-29324901 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="social-icon-1 pos-abs">
                <div className="social-icon-group pos-abs">
                  <div className="social-icon-group-inner pos-abs">
                    <div className="social-icon-path pos-abs">
                      <div className="nodeBg-29324895 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
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
            <a href="/" className="logo pos-abs">
              <img
                src={image1}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-I29324904_29322292 "
                alt="I29324904_29322292-ALT"
              />{" "}
            </a>

            <div className="book-appointment-button pos-abs">
              <div className="book-appointment-button-text pos-abs">
                <span className="book-appointment-button-text-span">{`Book An Appointment`}</span>
              </div>
            </div>

            <div className="nav-actions pos-abs">
              <div className="search-icon-container pos-abs">
                <div className="search-icon pos-abs">
                  <div className="search-icon-outer pos-abs">
                    <div className="nodeBg-I29324904_29322313 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="search-icon-inner pos-abs">
                    <div className="nodeBg-I29324904_29322314 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="language-selector pos-abs">
                <div className="language-selector-text pos-abs">
                  <span className="language-selector-text-span">{`EN`}</span>
                </div>

                <div className="language-selector-dropdown-icon pos-abs">
                  <div className="language-selector-dropdown-icon-vector pos-abs">
                    <div className="nodeBg-I29324904_29322319 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-divider pos-abs"></div>
            </div>

            <div className="nav-menu pos-abs">
              <div className="nav-item-concerns pos-abs">
                <div className="nav-item-concerns-text pos-abs">
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    href="/concerns"
                    className="nav-item-concerns-text-span"
                  >{`Concerns`}</a>
                </div>

                <div className="nav-item-concerns-dropdown-icon pos-abs">
                  <div className="nav-item-concerns-dropdown-icon-vector pos-abs">
                    <div className="nodeBg-I29324904_29322297 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-item-services pos-abs">
                <div className="nav-item-services-text pos-abs">
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    href="/services"
                    className="nav-item-services-text-span"
                  >{`Services`}</a>
                </div>

                <div className="nav-item-services-dropdown-icon pos-abs">
                  <div className="nav-item-services-dropdown-icon-vector pos-abs">
                    <div className="nodeBg-I29324904_29322301 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-item-specials pos-abs">
                <div className="nav-item-specials-text pos-abs">
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    href="/about"
                    className="nav-item-specials-text-span"
                  >{`About`}</a>
                </div>

                <div className="nav-item-specials-dropdown-icon pos-abs">
                  <div className="nav-item-specials-dropdown-icon-vector pos-abs">
                    <div className="nodeBg-I29324904_29322305 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-item-company pos-abs">
                <div className="nav-item-company-text pos-abs">
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    href="/contact"
                    className="nav-item-company-text-span"
                  >{`Contact`}</a>
                </div>

                <div className="nav-item-company-dropdown-icon pos-abs">
                  <div className="nav-item-company-dropdown-icon-vector pos-abs">
                    <div className="nodeBg-I29324904_29322309 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
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
            className="pos-abs image-div bg-no-repeat bg-crop nodeBg-29324905 "
            alt="29324905-ALT"
          />

          <div className="banner-content pos-abs">
            <div className="banner-text pos-abs">
              <div className="banner-breadcrumb pos-abs">
                <span className="banner-breadcrumb-span">{`HOME - SERVICES`}</span>
              </div>

              <div className="banner-title pos-abs">
                <span className="banner-title-span">{`Services`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Services1 */}
        <section className="services-section pos-abs">
          <div className="services-heading pos-abs">
            <div className="services-subheading pos-abs">
              <span className="services-subheading-span">{`SERVICES`}</span>
            </div>

            <div className="services-title pos-abs">
              <span className="services-title-span">{`Facials`}</span>
            </div>
          </div>

          <div className="services-content pos-abs">
            <div className="services-row pos-abs">
              <div className="service-card pos-abs">
                <div className="service-image pos-abs">
                  <img
                    src={image3}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324917 "
                    alt="29324917-ALT"
                  />{" "}
                </div>

                <div className="service-details pos-abs">
                  <div className="service-category pos-abs">
                    <div className="service-category-text pos-abs">
                      <span className="service-category-text-span">{`FACIAL TREATMENTS`}</span>
                    </div>

                    <div className="service-name pos-abs">
                      <span className="service-name-span">{`Eye Puffiness`}</span>
                    </div>
                  </div>

                  <div className="service-description pos-abs">
                    <span className="service-description-span">{`Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`}</span>
                  </div>

                  <div className="service-actions pos-abs">
                    <div className="book-now-button pos-abs">
                      <div className="book-now-button-text pos-abs">
                        <span className="book-now-button-text-span">{`Book Now`}</span>
                      </div>
                    </div>

                    <div className="learn-more-button pos-abs">
                      <div className="learn-more-button-text pos-abs">
                        <span className="learn-more-button-text-span">{`Learn More`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card-1 pos-abs">
                <div className="service-image-1 pos-abs">
                  <img
                    src={image3}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324929 "
                    alt="29324929-ALT"
                  />{" "}
                </div>

                <div className="service-details-1 pos-abs">
                  <div className="service-category-1 pos-abs">
                    <div className="service-category-text-1 pos-abs">
                      <span className="service-category-text-1-span">{`FACIAL TREATMENTS`}</span>
                    </div>

                    <div className="service-name-1 pos-abs">
                      <span className="service-name-1-span">{`Eye Puffiness`}</span>
                    </div>
                  </div>

                  <div className="service-description-1 pos-abs">
                    <span className="service-description-1-span">{`Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`}</span>
                  </div>

                  <div className="service-actions-1 pos-abs">
                    <div className="book-now-button-1 pos-abs">
                      <div className="book-now-button-text-1 pos-abs">
                        <span className="book-now-button-text-1-span">{`Book Now`}</span>
                      </div>
                    </div>

                    <div className="learn-more-button-1 pos-abs">
                      <div className="learn-more-button-text-1 pos-abs">
                        <span className="learn-more-button-text-1-span">{`Learn More`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="services-row-1 pos-abs">
              <div className="service-card-2 pos-abs">
                <div className="service-image-2 pos-abs">
                  <img
                    src={image3}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324942 "
                    alt="29324942-ALT"
                  />{" "}
                  <img
                    src={image3}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324954 "
                    alt="29324954-ALT"
                  />{" "}
                </div>

                <div className="service-details-2 pos-abs">
                  <div className="service-category-2 pos-abs">
                    <div className="service-category-text-2 pos-abs">
                      <span className="service-category-text-2-span">{`FACIAL TREATMENTS`}</span>
                    </div>

                    <div className="service-name-2 pos-abs">
                      <span className="service-name-2-span">{`Eye Puffiness`}</span>
                    </div>
                  </div>

                  <div className="service-description-2 pos-abs">
                    <span className="service-description-2-span">{`Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion.`}</span>
                  </div>

                  <div className="service-actions-2 pos-abs">
                    <div className="book-now-button-2 pos-abs">
                      <div className="book-now-button-text-2 pos-abs">
                        <span className="book-now-button-text-2-span">{`Book Now`}</span>
                      </div>
                    </div>

                    <div className="chat-now-button pos-abs">
                      <div className="chat-now-button-text pos-abs">
                        <span className="chat-now-button-text-span">{`Chat Now`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card-3 pos-abs">
                <div className="service-image-3 pos-abs">
                  <img
                    src={image3}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324942 "
                    alt="29324942-ALT"
                  />{" "}
                  <img
                    src={image3}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324954 "
                    alt="29324954-ALT"
                  />{" "}
                </div>

                <div className="service-details-3 pos-abs">
                  <div className="service-category-3 pos-abs">
                    <div className="service-category-text-3 pos-abs">
                      <span className="service-category-text-3-span">{`FACIAL TREATMENTS`}</span>
                    </div>

                    <div className="service-name-3 pos-abs">
                      <span className="service-name-3-span">{`Eye Puffiness`}</span>
                    </div>
                  </div>

                  <div className="service-description-3 pos-abs">
                    <span className="service-description-3-span">{`Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion.`}</span>
                  </div>

                  <div className="service-actions-3 pos-abs">
                    <div className="book-now-button-3 pos-abs">
                      <div className="book-now-button-text-3 pos-abs">
                        <span className="book-now-button-text-3-span">{`Book Now`}</span>
                      </div>
                    </div>

                    <div className="chat-now-button-1 pos-abs">
                      <div className="chat-now-button-text-1 pos-abs">
                        <span className="chat-now-button-text-1-span">{`Chat Now`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card-4 pos-abs">
                <div className="service-image-4 pos-abs">
                  <img
                    src={image3}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324966 "
                    alt="29324966-ALT"
                  />{" "}
                </div>

                <div className="service-details-4 pos-abs">
                  <div className="service-category-4 pos-abs">
                    <div className="service-category-text-4 pos-abs">
                      <span className="service-category-text-4-span">{`FACIAL TREATMENTS`}</span>
                    </div>

                    <div className="service-name-4 pos-abs">
                      <span className="service-name-4-span">{`Eye Puffiness`}</span>
                    </div>
                  </div>

                  <div className="service-description-4 pos-abs">
                    <span className="service-description-4-span">{`Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion.`}</span>
                  </div>

                  <div className="service-actions-4 pos-abs">
                    <div className="book-now-button-4 pos-abs">
                      <div className="book-now-button-text-4 pos-abs">
                        <span className="book-now-button-text-4-span">{`Book Now`}</span>
                      </div>
                    </div>

                    <div className="chat-now-button-2 pos-abs">
                      <div className="chat-now-button-text-2 pos-abs">
                        <span className="chat-now-button-text-2-span">{`Chat Now`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="services-row-2 pos-abs">
              <div className="service-card-5 pos-abs">
                <div className="service-image-5 pos-abs">
                  <img
                    src={image3}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324979 "
                    alt="29324979-ALT"
                  />{" "}
                </div>

                <div className="service-details-5 pos-abs">
                  <div className="service-category-5 pos-abs">
                    <div className="service-category-text-5 pos-abs">
                      <span className="service-category-text-5-span">{`FACIAL TREATMENTS`}</span>
                    </div>

                    <div className="service-name-5 pos-abs">
                      <span className="service-name-5-span">{`Eye Puffiness`}</span>
                    </div>
                  </div>

                  <div className="service-description-5 pos-abs">
                    <span className="service-description-5-span">{`Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion.`}</span>
                  </div>

                  <div className="service-actions-5 pos-abs">
                    <div className="book-now-button-5 pos-abs">
                      <div className="book-now-button-text-5 pos-abs">
                        <span className="book-now-button-text-5-span">{`Book Now`}</span>
                      </div>
                    </div>

                    <div className="chat-now-button-3 pos-abs">
                      <div className="chat-now-button-text-3 pos-abs">
                        <span className="chat-now-button-text-3-span">{`Chat Now`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card-6 pos-abs">
                <div className="service-image-6 pos-abs">
                  <img
                    src={image3}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29324991 "
                    alt="29324991-ALT"
                  />{" "}
                </div>

                <div className="service-details-6 pos-abs">
                  <div className="service-category-6 pos-abs">
                    <div className="service-category-text-6 pos-abs">
                      <span className="service-category-text-6-span">{`FACIAL TREATMENTS`}</span>
                    </div>

                    <div className="service-name-6 pos-abs">
                      <span className="service-name-6-span">{`Eye Puffiness`}</span>
                    </div>
                  </div>

                  <div className="service-description-6 pos-abs">
                    <span className="service-description-6-span">{`Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion.`}</span>
                  </div>

                  <div className="service-actions-6 pos-abs">
                    <div className="book-now-button-6 pos-abs">
                      <div className="book-now-button-text-6 pos-abs">
                        <span className="book-now-button-text-6-span">{`Book Now`}</span>
                      </div>
                    </div>

                    <div className="chat-now-button-4 pos-abs">
                      <div className="chat-now-button-text-4 pos-abs">
                        <span className="chat-now-button-text-4-span">{`Chat Now`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card-7 pos-abs">
                <div className="service-image-7 pos-abs">
                  <img
                    src={image3}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29325003 "
                    alt="29325003-ALT"
                  />{" "}
                </div>

                <div className="service-details-7 pos-abs">
                  <div className="service-category-7 pos-abs">
                    <div className="service-category-text-7 pos-abs">
                      <span className="service-category-text-7-span">{`FACIAL TREATMENTS`}</span>
                    </div>

                    <div className="service-name-7 pos-abs">
                      <span className="service-name-7-span">{`Eye Puffiness`}</span>
                    </div>
                  </div>

                  <div className="service-description-7 pos-abs">
                    <span className="service-description-7-span">{`Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion.`}</span>
                  </div>

                  <div className="service-actions-7 pos-abs">
                    <div className="book-now-button-7 pos-abs">
                      <div className="book-now-button-text-7 pos-abs">
                        <span className="book-now-button-text-7-span">{`Book Now`}</span>
                      </div>
                    </div>

                    <div className="chat-now-button-5 pos-abs">
                      <div className="chat-now-button-text-5 pos-abs">
                        <span className="chat-now-button-text-5-span">{`Chat Now`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ1 */}
        <section className="faq-section pos-abs">
          <div className="faq-heading pos-abs">
            <div className="faq-subheading pos-abs">
              <span className="faq-subheading-span">{`SUPPORT`}</span>
            </div>

            <div className="faq-title-container pos-abs">
              <div className="faq-title pos-abs">
                <span className="faq-title-span">{`Frequently Asked Questions`}</span>
              </div>

              <div className="faq-description pos-abs">
                <span className="faq-description-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</span>
              </div>
            </div>
          </div>

          <div className="faq-accordion pos-abs">
            <div className="faq-item pos-abs">
              <div className="faq-question-container pos-abs">
                <div className="faq-question-wrapper pos-abs">
                  <div className="faq-toggle-icon pos-abs">
                    <div className="faq-toggle-icon-vector pos-abs">
                      <div className="nodeBg-29325026 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-question pos-abs">
                    <span className="faq-question-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-answer-container pos-abs">
                  <div className="faq-answer pos-abs">
                    <span className="faq-answer-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>

              <div className="faq-question-container-1 pos-abs">
                <div className="faq-question-wrapper-1 pos-abs">
                  <div className="faq-toggle-icon-1 pos-abs">
                    <div className="faq-toggle-icon-vector-1 pos-abs">
                      <div className="nodeBg-29325033 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-question-1 pos-abs">
                    <span className="faq-question-1-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-answer-container-1 pos-abs">
                  <div className="faq-answer-1 pos-abs">
                    <span className="faq-answer-1-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-item-1 pos-abs">
              <div className="faq-question-container-2 pos-abs">
                <div className="faq-question-wrapper-2 pos-abs">
                  <div className="faq-toggle-icon-2 pos-abs">
                    <div className="faq-toggle-icon-vector-2 pos-abs">
                      <div className="nodeBg-29325041 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-question-2 pos-abs">
                    <span className="faq-question-2-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-answer-container-2 pos-abs">
                  <div className="faq-answer-2 pos-abs">
                    <span className="faq-answer-2-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>

              <div className="faq-question-container-3 pos-abs">
                <div className="faq-question-wrapper-3 pos-abs">
                  <div className="faq-toggle-icon-3 pos-abs">
                    <div className="faq-toggle-icon-vector-3 pos-abs">
                      <div className="nodeBg-29325048 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-question-3 pos-abs">
                    <span className="faq-question-3-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-answer-container-3 pos-abs">
                  <div className="faq-answer-3 pos-abs">
                    <span className="faq-answer-3-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-item-2 pos-abs">
              <div className="faq-question-container-4 pos-abs">
                <div className="faq-question-wrapper-4 pos-abs">
                  <div className="faq-toggle-icon-4 pos-abs">
                    <div className="faq-toggle-icon-vector-4 pos-abs">
                      <div className="nodeBg-29325056 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-question-4 pos-abs">
                    <span className="faq-question-4-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-answer-container-4 pos-abs">
                  <div className="faq-answer-4 pos-abs">
                    <span className="faq-answer-4-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>

              <div className="faq-question-container-5 pos-abs">
                <div className="faq-question-wrapper-5 pos-abs">
                  <div className="faq-toggle-icon-5 pos-abs">
                    <div className="faq-toggle-icon-vector-5 pos-abs">
                      <div className="nodeBg-29325063 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-question-5 pos-abs">
                    <span className="faq-question-5-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-answer-container-5 pos-abs">
                  <div className="faq-answer-5 pos-abs">
                    <span className="faq-answer-5-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer1 */}
        <section className="footer pos-abs">
          <div className="footer-content pos-abs">
            <div className="footer-links pos-abs">
              <div className="footer-logo-container pos-abs">
                <img
                  src={image4}
                  className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                  alt="I29325066_29319849-ALT"
                />{" "}
              </div>

              <div className="footer-quick-links pos-abs">
                <div className="quick-links-title pos-abs">
                  <span className="quick-links-title-span">{`Quick Links`}</span>
                </div>

                <div className="quick-links-list pos-abs">
                  <div className="quick-link-item pos-abs">
                    <div className="quick-link-text pos-abs">
                      <span className="quick-link-text-span">{`Concerns`}</span>
                    </div>
                  </div>

                  <div className="quick-link-item-1 pos-abs">
                    <div className="quick-link-text-1 pos-abs">
                      <span className="quick-link-text-1-span">{`Services`}</span>
                    </div>
                  </div>

                  <div className="quick-link-item-2 pos-abs">
                    <div className="quick-link-text-2 pos-abs">
                      <span className="quick-link-text-2-span">{`Specials`}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-company-links pos-abs">
                <div className="company-links-title pos-abs">
                  <span className="company-links-title-span">{`Company`}</span>
                </div>

                <div className="company-links-list pos-abs">
                  <div className="company-link-item pos-abs">
                    <div className="company-link-text pos-abs">
                      <span className="company-link-text-span">{`About`}</span>
                    </div>
                  </div>

                  <div className="company-link-item-1 pos-abs">
                    <div className="company-link-text-1 pos-abs">
                      <span className="company-link-text-1-span">{`Blogs`}</span>
                    </div>
                  </div>

                  <div className="company-link-item-2 pos-abs">
                    <div className="company-link-text-2 pos-abs">
                      <span className="company-link-text-2-span">{`Contact Us`}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-support-links pos-abs">
                <div className="support-links-title pos-abs">
                  <span className="support-links-title-span">{`Support`}</span>
                </div>

                <div className="support-links-list pos-abs">
                  <div className="support-link-item pos-abs">
                    <div className="support-link-text pos-abs">
                      <span className="support-link-text-span">{`+971 54 2790 987`}</span>
                    </div>
                  </div>

                  <div className="support-link-item-1 pos-abs">
                    <div className="support-link-text-1 pos-abs">
                      <span className="support-link-text-1-span">{`support@gmail.com`}</span>
                    </div>
                  </div>

                  <div className="support-link-item-2 pos-abs">
                    <div className="support-link-text-2 pos-abs">
                      <span className="support-link-text-2-span">{`Location`}</span>
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
                <div className="newsletter-input-container pos-abs">
                  <div className="newsletter-input pos-abs">
                    <div className="newsletter-input-placeholder pos-abs">
                      <span className="newsletter-input-placeholder-span">{`Enter your email`}</span>
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

                <div className="footer-social-icons pos-abs">
                  <div className="social-icon-2 pos-abs">
                    <div className="social-icon-layer-1 pos-abs">
                      <div className="social-icon-vector-1 pos-abs">
                        <div className="nodeBg-I29325066_29319905 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>

                  <div className="facebook-icon-1 pos-abs">
                    <div className="facebook-icon-path-1 pos-abs">
                      <div className="nodeBg-I29325066_29319911 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="linkedin-icon-1 pos-abs">
                    <div className="linkedin-icon-path-1 pos-abs">
                      <div className="nodeBg-I29325066_29319913 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="twitter-icon-1 pos-abs">
                    <div className="twitter-icon-vector-1 pos-abs">
                      <div className="nodeBg-I29325066_29319915 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="instagram-icon-1 pos-abs">
                    <div className="instagram-icon-vector-1 pos-abs">
                      <div className="nodeBg-I29325066_29319917 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="social-icon-3 pos-abs">
                    <div className="social-icon-group-1 pos-abs">
                      <div className="social-icon-group-inner-1 pos-abs">
                        <div className="social-icon-path-1 pos-abs">
                          <div className="nodeBg-I29325066_29319909 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
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

export default ServiceDualite;

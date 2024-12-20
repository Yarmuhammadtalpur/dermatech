import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import React, { useEffect } from "react";
import "./style.css";

const ConcernsDetailsDualite = () => {
  return (
    <div className="parent-div ">
      <div className="concern-details-page pos-abs">
        {/* Lvl 11 */}
        {/* <section className="top-bar pos-abs">
          <div className="top-bar-content pos-abs">
            <div className="contact-info pos-abs">
              <div className="business-hours pos-abs">
                <div className="clock-icon pos-abs">
                  <div className="clock-icon-vector pos-abs">
                    <div className="nodeBg-29326750 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="fri--wed -1200--29326751 pos-abs">
                  <span className="fri--wed -1200--29326751-0">{`Fri - Wed  12:00 pm to 09:00 pm | Thu – Closed`}</span>
                </div>
              </div>

              <div className="phone-info pos-abs">
                <div className="phone-icon pos-abs">
                  <div className="phone-icon-vector pos-abs">
                    <div className="nodeBg-29326754 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="phone-number pos-abs">
                  <span className="phone-number-span">{`+971 54 2790 987`}</span>
                </div>
              </div>

              <div className="email-info pos-abs">
                <div className="email-icon pos-abs">
                  <div className="email-icon-vector pos-abs">
                    <div className="nodeBg-29326758 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="email-address pos-abs">
                  <span className="email-address-span">{`support@gmail.com`}</span>
                </div>
              </div>
            </div>

            <div className="social-icons pos-abs">
              <div className="social-icon-facebook pos-abs">
                <div className="social-icon-facebook-inner pos-abs">
                  <div className="social-icon-facebook-vector pos-abs">
                    <div className="nodeBg-29326763 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="social-icon-facebook-alt pos-abs">
                <div className="social-icon-facebook-alt-path pos-abs">
                  <div className="nodeBg-29326769 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="social-icon-linkedin pos-abs">
                <div className="social-icon-linkedin-path pos-abs">
                  <div className="nodeBg-29326771 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="social-icon-instagram pos-abs">
                <div className="social-icon-instagram-vector pos-abs">
                  <div className="nodeBg-29326775 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="social-icon-x pos-abs">
                <div className="social-icon-x-vector pos-abs">
                  <div className="nodeBg-29326773 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="social-icon-twitter pos-abs">
                <div className="social-icon-twitter-inner pos-abs">
                  <div className="social-icon-twitter-group pos-abs">
                    <div className="social-icon-twitter-path pos-abs">
                      <div className="nodeBg-29326767 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Nav1 */}
        {/* <section className="navigation pos-abs">
          <div className="nav-content pos-abs">
            <div className="logo pos-abs">
              <img
                src={image1}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-I29326776_29322292 "
                alt="I29326776_29322292-ALT"
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
                    <div className="nodeBg-I29326776_29322313 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="search-icon-inner pos-abs">
                    <div className="nodeBg-I29326776_29322314 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="language-selector pos-abs">
                <div className="language-selector-text pos-abs">
                  <span className="language-selector-text-span">{`EN`}</span>
                </div>

                <div className="language-selector-icon pos-abs">
                  <div className="language-selector-icon-vector pos-abs">
                    <div className="nodeBg-I29326776_29322319 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-separator pos-abs"></div>
            </div>

            <div className="nav-menu pos-abs">
              <div className="nav-item-concerns pos-abs">
                <div className="nav-item-concerns-text pos-abs">
                  <span className="nav-item-concerns-text-span">{`Concerns`}</span>
                </div>

                <div className="nav-item-concerns-icon pos-abs">
                  <div className="nav-item-concerns-icon-vector pos-abs">
                    <div className="nodeBg-I29326776_29322297 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-item-services pos-abs">
                <div className="nav-item-services-text pos-abs">
                  <span className="nav-item-services-text-span">{`Services`}</span>
                </div>

                <div className="nav-item-services-icon pos-abs">
                  <div className="nav-item-services-icon-vector pos-abs">
                    <div className="nodeBg-I29326776_29322301 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-item-specials pos-abs">
                <div className="nav-item-specials-text pos-abs">
                  <span className="nav-item-specials-text-span">{`Specials`}</span>
                </div>

                <div className="nav-item-specials-icon pos-abs">
                  <div className="nav-item-specials-icon-vector pos-abs">
                    <div className="nodeBg-I29326776_29322305 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-item-company pos-abs">
                <div className="nav-item-company-text pos-abs">
                  <span className="nav-item-company-text-span">{`Company`}</span>
                </div>

                <div className="nav-item-company-icon pos-abs">
                  <div className="nav-item-company-icon-vector pos-abs">
                    <div className="nodeBg-I29326776_29322309 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Banner1 */}
        <section className="banner pos-abs">
          <img
            src={image2}
            className="pos-abs image-div bg-no-repeat bg-crop nodeBg-29326777 "
            alt="29326777-ALT"
          />

          <div className="banner-content pos-abs">
            <div className="banner-text pos-abs">
              <div className="breadcrumb pos-abs">
                <span className="breadcrumb-span">{`HOME - FACIAL CONCERNS`}</span>
              </div>

              <div className="page-title pos-abs">
                <span className="page-title-span">{`Hollow Checks`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Services1 */}
        <section className="concern-details pos-abs">
          <div className="concern-heading pos-abs">
            <div className="concern-subheading pos-abs">
              <span className="concern-subheading-span">{`FACIAL CONCERNS`}</span>
            </div>

            <div className="concern-title pos-abs">
              <span className="concern-title-span">{`Hollow Checks`}</span>
            </div>
          </div>

          <div className="concern-image pos-abs">
            <div className="concern-image-placeholder pos-abs">
              <img
                src={image3}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29326787 "
                alt="29326787-ALT"
              />{" "}
            </div>
          </div>

          <div className="concern-description pos-abs">
            <div className="concern-description-paragraph-1 pos-abs">
              <span className="concern-description-paragraph-1-span">{`Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.`}</span>
            </div>

            <div className="concern-description-paragraph-2 pos-abs">
              <span className="concern-description-paragraph-2-span">{`Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.`}</span>
            </div>
          </div>

          <div className="concern-feature pos-abs">
            <div className="concern-feature-image pos-abs">
              <img
                src={image4}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29326792 "
                alt="29326792-ALT"
              />{" "}
            </div>

            <div className="concern-feature-content pos-abs">
              <div className="concern-feature-title pos-abs">
                <span className="concern-feature-title-span">{`Lorem Lipsum`}</span>
              </div>

              <div className="concern-feature-description pos-abs">
                <span className="concern-feature-description-span">{`Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.`}</span>
              </div>
            </div>
          </div>

          <div className="concern-feature-alt pos-abs">
            <div className="concern-feature-alt-image pos-abs">
              <img
                src={image4}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29326800 "
                alt="29326800-ALT"
              />{" "}
            </div>

            <div className="concern-feature-alt-content pos-abs">
              <div className="concern-feature-alt-title pos-abs">
                <span className="concern-feature-alt-title-span">{`Lorem Lipsum`}</span>
              </div>

              <div className="concern-feature-alt-description pos-abs">
                <span className="concern-feature-alt-description-span">{`Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.`}</span>
              </div>
            </div>
          </div>

          <div className="concern-feature-2 pos-abs">
            <div className="concern-feature-2-image pos-abs">
              <img
                src={image4}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29326802 "
                alt="29326802-ALT"
              />{" "}
            </div>

            <div className="concern-feature-2-content pos-abs">
              <div className="concern-feature-2-title pos-abs">
                <span className="concern-feature-2-title-span">{`Lorem Lipsum`}</span>
              </div>

              <div className="concern-feature-2-description pos-abs">
                <span className="concern-feature-2-description-span">{`Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Contact1 */}
        <section className="contact-section pos-abs">
          <div className="contact-content pos-abs">
            <div className="contact-image pos-abs">
              <img
                src={image5}
                className="pos-abs image-div bg-no-repeat bg-crop nodeBg-29326831 "
                alt="29326831-ALT"
              />{" "}
            </div>

            <div className="contact-form pos-abs">
              <div className="contact-form-heading pos-abs">
                <div className="contact-form-subheading pos-abs">
                  <span className="contact-form-subheading-span">{`CONTACT`}</span>
                </div>

                <div className="contact-form-title pos-abs">
                  <span className="contact-form-title-span">{`Request A Consultation`}</span>
                </div>
              </div>

              <div className="contact-form-name-row pos-abs">
                <div className="contact-form-first-name pos-abs">
                  <div className="contact-form-first-name-placeholder pos-abs">
                    <span className="contact-form-first-name-placeholder-span">{`First Name`}</span>
                  </div>
                </div>

                <div className="contact-form-last-name pos-abs">
                  <div className="contact-form-last-name-placeholder pos-abs">
                    <span className="contact-form-last-name-placeholder-span">{`Last Name`}</span>
                  </div>
                </div>
              </div>

              <div className="contact-form-contact-row pos-abs">
                <div className="contact-form-email pos-abs">
                  <div className="contact-form-email-placeholder pos-abs">
                    <span className="contact-form-email-placeholder-span">{`Email`}</span>
                  </div>
                </div>

                <div className="contact-form-phone pos-abs">
                  <div className="contact-form-phone-placeholder pos-abs">
                    <span className="contact-form-phone-placeholder-span">{`Phone`}</span>
                  </div>
                </div>
              </div>

              <div className="contact-form-service-mode pos-abs">
                <div className="contact-form-service-mode-placeholder pos-abs">
                  <span className="contact-form-service-mode-placeholder-span">{`Service Mode`}</span>
                </div>

                <div className="contact-form-service-mode-icon pos-abs">
                  <div className="contact-form-service-mode-icon-vector pos-abs">
                    <div className="nodeBg-29326825 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="contact-form-message pos-abs">
                <div className="contact-form-message-placeholder pos-abs">
                  <span className="contact-form-message-placeholder-span">{`Message`}</span>
                </div>
              </div>

              <div className="contact-form-submit pos-abs">
                <div className="contact-form-submit-button pos-abs">
                  <div className="contact-form-submit-text pos-abs">
                    <span className="contact-form-submit-text-span">{`Submit Now`}</span>
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

            <div className="faq-content pos-abs">
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
              <div className="faq-item-content pos-abs">
                <div className="faq-item-question pos-abs">
                  <div className="faq-item-toggle pos-abs">
                    <div className="faq-item-toggle-icon pos-abs">
                      <div className="nodeBg-29326844 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-item-question-text pos-abs">
                    <span className="faq-item-question-text-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-item-answer pos-abs">
                  <div className="faq-item-answer-text pos-abs">
                    <span className="faq-item-answer-text-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>

              <div className="faq-item-alt pos-abs">
                <div className="faq-item-alt-question pos-abs">
                  <div className="faq-item-alt-toggle pos-abs">
                    <div className="faq-item-alt-toggle-icon pos-abs">
                      <div className="nodeBg-29326851 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-item-alt-question-text pos-abs">
                    <span className="faq-item-alt-question-text-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-item-alt-answer pos-abs">
                  <div className="faq-item-alt-answer-text pos-abs">
                    <span className="faq-item-alt-answer-text-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-item-2 pos-abs">
              <div className="faq-item-2-content pos-abs">
                <div className="faq-item-2-question pos-abs">
                  <div className="faq-item-2-toggle pos-abs">
                    <div className="faq-item-2-toggle-icon pos-abs">
                      <div className="nodeBg-29326859 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-item-2-question-text pos-abs">
                    <span className="faq-item-2-question-text-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-item-2-answer pos-abs">
                  <div className="faq-item-2-answer-text pos-abs">
                    <span className="faq-item-2-answer-text-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>

              <div className="faq-item-2-alt pos-abs">
                <div className="faq-item-2-alt-question pos-abs">
                  <div className="faq-item-2-alt-toggle pos-abs">
                    <div className="faq-item-2-alt-toggle-icon pos-abs">
                      <div className="nodeBg-29326866 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-item-2-alt-question-text pos-abs">
                    <span className="faq-item-2-alt-question-text-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-item-2-alt-answer pos-abs">
                  <div className="faq-item-2-alt-answer-text pos-abs">
                    <span className="faq-item-2-alt-answer-text-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-item-3 pos-abs">
              <div className="faq-item-3-content pos-abs">
                <div className="faq-item-3-question pos-abs">
                  <div className="faq-item-3-toggle pos-abs">
                    <div className="faq-item-3-toggle-icon pos-abs">
                      <div className="nodeBg-29326874 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-item-3-question-text pos-abs">
                    <span className="faq-item-3-question-text-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-item-3-answer pos-abs">
                  <div className="faq-item-3-answer-text pos-abs">
                    <span className="faq-item-3-answer-text-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>

              <div className="faq-item-3-alt pos-abs">
                <div className="faq-item-3-alt-question pos-abs">
                  <div className="faq-item-3-alt-toggle pos-abs">
                    <div className="faq-item-3-alt-toggle-icon pos-abs">
                      <div className="nodeBg-29326881 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="faq-item-3-alt-question-text pos-abs">
                    <span className="faq-item-3-alt-question-text-span">{`Lorem ipsum dolor sit amet ?`}</span>
                  </div>
                </div>

                <div className="faq-item-3-alt-answer pos-abs">
                  <div className="faq-item-3-alt-answer-text pos-abs">
                    <span className="faq-item-3-alt-answer-text-span">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer1 */}
        {/* <section className="footer pos-abs">
          <div className="footer-content pos-abs">
            <div className="footer-links pos-abs">
              <div className="footer-logo pos-abs">
                <img
                  src={image6}
                  className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                  alt="I29326884_29319849-ALT"
                />{" "}
              </div>

              <div className="footer-quick-links pos-abs">
                <div className="footer-quick-links-title pos-abs">
                  <span className="footer-quick-links-title-span">{`Quick Links`}</span>
                </div>

                <div className="footer-quick-links-list pos-abs">
                  <div className="footer-quick-link-concerns pos-abs">
                    <div className="footer-quick-link-concerns-text pos-abs">
                      <span className="footer-quick-link-concerns-text-span">{`Concerns`}</span>
                    </div>
                  </div>

                  <div className="footer-quick-link-services pos-abs">
                    <div className="footer-quick-link-services-text pos-abs">
                      <span className="footer-quick-link-services-text-span">{`Services`}</span>
                    </div>
                  </div>

                  <div className="footer-quick-link-specials pos-abs">
                    <div className="footer-quick-link-specials-text pos-abs">
                      <span className="footer-quick-link-specials-text-span">{`Specials`}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-company-links pos-abs">
                <div className="footer-company-links-title pos-abs">
                  <span className="footer-company-links-title-span">{`Company`}</span>
                </div>

                <div className="footer-company-links-list pos-abs">
                  <div className="footer-company-link-about pos-abs">
                    <div className="footer-company-link-about-text pos-abs">
                      <span className="footer-company-link-about-text-span">{`About`}</span>
                    </div>
                  </div>

                  <div className="footer-company-link-blogs pos-abs">
                    <div className="footer-company-link-blogs-text pos-abs">
                      <span className="footer-company-link-blogs-text-span">{`Blogs`}</span>
                    </div>
                  </div>

                  <div className="footer-company-link-contact pos-abs">
                    <div className="footer-company-link-contact-text pos-abs">
                      <span className="footer-company-link-contact-text-span">{`Contact Us`}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-support pos-abs">
                <div className="footer-support-title pos-abs">
                  <span className="footer-support-title-span">{`Support`}</span>
                </div>

                <div className="footer-support-list pos-abs">
                  <div className="footer-support-phone pos-abs">
                    <div className="footer-support-phone-text pos-abs">
                      <span className="footer-support-phone-text-span">{`+971 54 2790 987`}</span>
                    </div>
                  </div>

                  <div className="footer-support-email pos-abs">
                    <div className="footer-support-email-text pos-abs">
                      <span className="footer-support-email-text-span">{`support@gmail.com`}</span>
                    </div>
                  </div>

                  <div className="footer-support-location pos-abs">
                    <div className="footer-support-location-text pos-abs">
                      <span className="footer-support-location-text-span">{`Location`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-newsletter pos-abs">
              <div className="footer-newsletter-header pos-abs">
                <div className="footer-newsletter-title pos-abs">
                  <span className="footer-newsletter-title-span">{`Subscribe`}</span>
                </div>

                <div className="footer-newsletter-description pos-abs">
                  <span className="footer-newsletter-description-span">{`Join our newsletter to stay up to date on features and releases.`}</span>
                </div>
              </div>

              <div className="footer-newsletter-form pos-abs">
                <div className="footer-newsletter-input-group pos-abs">
                  <div className="footer-newsletter-input pos-abs">
                    <div className="footer-newsletter-input-placeholder pos-abs">
                      <span className="footer-newsletter-input-placeholder-span">{`Enter your email`}</span>
                    </div>
                  </div>

                  <div className="footer-newsletter-submit pos-abs">
                    <div className="footer-newsletter-submit-text pos-abs">
                      <span className="footer-newsletter-submit-text-span">{`Subscribe`}</span>
                    </div>
                  </div>
                </div>

                <div className="footer-newsletter-disclaimer pos-abs">
                  <span className="footer-newsletter-disclaimer-span">{`By subscribing you agree to with our`}</span>
                  <span className="footer-newsletter-disclaimer-span-1">{` `}</span>
                  <span className="footer-newsletter-disclaimer-span-2">{`Privacy Policy`}</span>
                  <span className="footer-newsletter-disclaimer-span-3">{` `}</span>
                  <span className="footer-newsletter-disclaimer-span-4">{`and provide consent to receive updates from our company.`}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom pos-abs">
            <div className="footer-credits pos-abs">
              <div className="footer-divider pos-abs"></div>

              <div className="footer-bottom-content pos-abs">
                <div className="footer-copyright pos-abs">
                  <div className="footer-copyright-text pos-abs">
                    <span className="footer-copyright-text-span">{`© 2024 Designed & Managed by Prism.`}</span>
                  </div>

                  <div className="footer-legal-links pos-abs">
                    <div className="footer-privacy-policy pos-abs">
                      <span className="footer-privacy-policy-span">{`Privacy Policy`}</span>
                    </div>

                    <div className="footer-terms-of-service pos-abs">
                      <span className="footer-terms-of-service-span">{`Terms of Service`}</span>
                    </div>

                    <div className="footer-cookies-settings pos-abs">
                      <span className="footer-cookies-settings-span">{`Cookies Settings`}</span>
                    </div>
                  </div>
                </div>

                <div className="footer-social-icons pos-abs">
                  <div className="footer-social-icon-facebook pos-abs">
                    <div className="footer-social-icon-facebook-inner pos-abs">
                      <div className="footer-social-icon-facebook-vector pos-abs">
                        <div className="nodeBg-I29326884_29319905 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>

                  <div className="footer-social-icon-facebook-alt pos-abs">
                    <div className="footer-social-icon-facebook-alt-path pos-abs">
                      <div className="nodeBg-I29326884_29319911 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="footer-social-icon-linkedin pos-abs">
                    <div className="footer-social-icon-linkedin-path pos-abs">
                      <div className="nodeBg-I29326884_29319913 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="footer-social-icon-x pos-abs">
                    <div className="footer-social-icon-x-vector pos-abs">
                      <div className="nodeBg-I29326884_29319915 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="footer-social-icon-instagram pos-abs">
                    <div className="footer-social-icon-instagram-vector pos-abs">
                      <div className="nodeBg-I29326884_29319917 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="footer-social-icon-twitter pos-abs">
                    <div className="footer-social-icon-twitter-inner pos-abs">
                      <div className="footer-social-icon-twitter-group pos-abs">
                        <div className="footer-social-icon-twitter-path pos-abs">
                          <div className="nodeBg-I29326884_29319909 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default ConcernsDetailsDualite;

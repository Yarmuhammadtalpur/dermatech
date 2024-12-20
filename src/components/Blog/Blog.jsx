import React from "react";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import "./style.css";

const Blog = () => {
  return (
    <div className="parent-div ">
      <div className="blog-page pos-abs">
        {/* Lvl 11 */}
        {/* <section className="top-bar pos-abs">
          <div className="top-bar-content pos-abs">
            <div className="top-bar-info pos-abs">
              <div className="business-hours pos-abs">
                <div className="clock-icon pos-abs">
                  <div className="clock-icon-vector pos-abs">
                    <div className="nodeBg-29325853 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="fri--wed -1200--29325854 pos-abs">
                  <span className="fri--wed -1200--29325854-0">{`Fri - Wed  12:00 pm to 09:00 pm | Thu – Closed`}</span>
                </div>
              </div>

              <div className="contact-phone pos-abs">
                <div className="phone-icon pos-abs">
                  <div className="phone-icon-vector pos-abs">
                    <div className="nodeBg-29325857 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="phone-number pos-abs">
                  <span className="phone-number-span">{`+971 54 2790 987`}</span>
                </div>
              </div>

              <div className="contact-email pos-abs">
                <div className="email-icon pos-abs">
                  <div className="email-icon-vector pos-abs">
                    <div className="nodeBg-29325861 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="email-address pos-abs">
                  <span className="email-address-span">{`support@gmail.com`}</span>
                </div>
              </div>
            </div>

            <div className="social-icons pos-abs">
              <div className="social-icon-tiktok pos-abs">
                <div className="tiktok-icon-layer pos-abs">
                  <div className="tiktok-icon-vector pos-abs">
                    <div className="nodeBg-29325866 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="social-icon-facebook pos-abs">
                <div className="facebook-icon-path pos-abs">
                  <div className="nodeBg-29325872 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="social-icon-linkedin pos-abs">
                <div className="linkedin-icon-path pos-abs">
                  <div className="nodeBg-29325874 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="social-icon-instagram pos-abs">
                <div className="instagram-icon-vector pos-abs">
                  <div className="nodeBg-29325878 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="social-icon-twitter pos-abs">
                <div className="twitter-icon-vector pos-abs">
                  <div className="nodeBg-29325876 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="social-icon-youtube pos-abs">
                <div className="youtube-icon-group pos-abs">
                  <div className="youtube-icon-inner-group pos-abs">
                    <div className="youtube-icon-path pos-abs">
                      <div className="nodeBg-29325870 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Nav1 */}
        {/* <section className="navigation-bar pos-abs">
          <div className="nav-content pos-abs">
            <div className="logo pos-abs">
              <img
                src={image1}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-I29325879_29322292 "
                alt="I29325879_29322292-ALT"
              />{" "}
            </div>

            <div className="cta-button pos-abs">
              <div className="cta-button-text pos-abs">
                <span className="cta-button-text-span">{`Book An Appointment`}</span>
              </div>
            </div>

            <div className="nav-icons pos-abs">
              <div className="search-icon-container pos-abs">
                <div className="search-icon pos-abs">
                  <div className="search-icon-circle pos-abs">
                    <div className="nodeBg-I29325879_29322313 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="search-icon-handle pos-abs">
                    <div className="nodeBg-I29325879_29322314 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="language-selector pos-abs">
                <div className="language-text pos-abs">
                  <span className="language-text-span">{`EN`}</span>
                </div>

                <div className="language-dropdown-icon pos-abs">
                  <div className="language-dropdown-icon-vector pos-abs">
                    <div className="nodeBg-I29325879_29322319 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-divider pos-abs"></div>
            </div>

            <div className="nav-menu pos-abs">
              <div className="nav-item-concerns pos-abs">
                <div className="nav-text-concerns pos-abs">
                  <span className="nav-text-concerns-span">{`Concerns`}</span>
                </div>

                <div className="nav-dropdown-icon-concerns pos-abs">
                  <div className="nav-dropdown-icon-vector-concerns pos-abs">
                    <div className="nodeBg-I29325879_29322297 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-item-services pos-abs">
                <div className="nav-text-services pos-abs">
                  <span className="nav-text-services-span">{`Services`}</span>
                </div>

                <div className="nav-dropdown-icon-services pos-abs">
                  <div className="nav-dropdown-icon-vector-services pos-abs">
                    <div className="nodeBg-I29325879_29322301 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-item-specials pos-abs">
                <div className="nav-text-specials pos-abs">
                  <span className="nav-text-specials-span">{`Specials`}</span>
                </div>

                <div className="nav-dropdown-icon-specials pos-abs">
                  <div className="nav-dropdown-icon-vector-specials pos-abs">
                    <div className="nodeBg-I29325879_29322305 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="nav-item-company pos-abs">
                <div className="nav-text-company pos-abs">
                  <span className="nav-text-company-span">{`Company`}</span>
                </div>

                <div className="nav-dropdown-icon-company pos-abs">
                  <div className="nav-dropdown-icon-vector-company pos-abs">
                    <div className="nodeBg-I29325879_29322309 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Banner1 */}
        <section className="hero-banner pos-abs">
          <img
            src={image2}
            className="pos-abs image-div bg-no-repeat bg-crop nodeBg-29325880 "
            alt="29325880-ALT"
          />

          <div className="hero-content pos-abs">
            <div className="hero-text pos-abs">
              <div className="hero-breadcrumb pos-abs">
                <span className="hero-breadcrumb-span">{`HOME - BLOG`}</span>
              </div>

              <div className="hero-heading pos-abs">
                <span className="hero-heading-span">{`Blog`}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Blogs1 */}
        <section className="blog-posts-section pos-abs">
          <div className="blog-section-heading pos-abs">
            <div className="blog-section-heading-content pos-abs">
              <div className="blog-section-subheading pos-abs">
                <span className="blog-section-subheading-span">{`BLOGS`}</span>
              </div>

              <div className="blog-section-title pos-abs">
                <span className="blog-section-title-span">{`Recent Articles`}</span>
              </div>
            </div>
          </div>

          <div className="blog-posts-grid pos-abs">
            <div className="blog-posts-row pos-abs">
              <div className="blog-post-card pos-abs">
                <div className="blog-post-image pos-abs">
                  <img
                    src={image3}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29325893 "
                    alt="29325893-ALT"
                  />{" "}
                </div>

                <div className="blog-post-content pos-abs">
                  <div className="blog-post-header pos-abs">
                    <div className="blog-post-date pos-abs">
                      <span className="blog-post-date-span">{`30 Oct 2024`}</span>
                    </div>

                    <div className="blog-post-title pos-abs">
                      <span className="blog-post-title-span">{`Rejuvenate & Glow`}</span>
                    </div>
                  </div>

                  <div className="blog-post-excerpt pos-abs">
                    <span className="blog-post-excerpt-span">{`Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion.`}</span>
                  </div>
                </div>
              </div>

              <div className="blog-post-card-1 pos-abs">
                <div className="blog-post-image-1 pos-abs">
                  <img
                    src={image4}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29325900 "
                    alt="29325900-ALT"
                  />{" "}
                </div>

                <div className="blog-post-content-1 pos-abs">
                  <div className="blog-post-header-1 pos-abs">
                    <div className="blog-post-date-1 pos-abs">
                      <span className="blog-post-date-1-span">{`30 Oct 2024`}</span>
                    </div>

                    <div className="blog-post-title-1 pos-abs">
                      <span className="blog-post-title-1-span">{`Revitalize & Restore`}</span>
                    </div>
                  </div>

                  <div className="blog-post-excerpt-1 pos-abs">
                    <span className="blog-post-excerpt-1-span">{`Experience luxurious rejuvenation with PRP Hair, Meso Hair, Hair Filler, and Laser Hair Removal, bringing life back to your strands and restoring natural beauty.`}</span>
                  </div>
                </div>
              </div>

              <div className="blog-post-card-2 pos-abs">
                <div className="blog-post-image-2 pos-abs">
                  <img
                    src={image5}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29325907 "
                    alt="29325907-ALT"
                  />{" "}
                </div>

                <div className="blog-post-content-2 pos-abs">
                  <div className="blog-post-header-2 pos-abs">
                    <div className="blog-post-date-2 pos-abs">
                      <span className="blog-post-date-2-span">{`30 Oct 2024`}</span>
                    </div>

                    <div className="blog-post-title-2 pos-abs">
                      <span className="blog-post-title-2-span">{`Wellness & Vitality`}</span>
                    </div>
                  </div>

                  <div className="blog-post-excerpt-2 pos-abs">
                    <span className="blog-post-excerpt-2-span">{`Experience luxurious rejuvenation with PRP Hair, Meso Hair, Hair Filler, and Laser Hair Removal, bringing life back to your strands and restoring natural beauty.`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-posts-grid-1 pos-abs">
            <div className="blog-posts-row-1 pos-abs">
              <div className="blog-post-card-3 pos-abs">
                <div className="blog-post-image-3 pos-abs">
                  <img
                    src={image3}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29325916 "
                    alt="29325916-ALT"
                  />{" "}
                </div>

                <div className="blog-post-content-3 pos-abs">
                  <div className="blog-post-header-3 pos-abs">
                    <div className="blog-post-date-3 pos-abs">
                      <span className="blog-post-date-3-span">{`30 Oct 2024`}</span>
                    </div>

                    <div className="blog-post-title-3 pos-abs">
                      <span className="blog-post-title-3-span">{`Rejuvenate & Glow`}</span>
                    </div>
                  </div>

                  <div className="blog-post-excerpt-3 pos-abs">
                    <span className="blog-post-excerpt-3-span">{`Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion.`}</span>
                  </div>
                </div>
              </div>

              <div className="blog-post-card-4 pos-abs">
                <div className="blog-post-image-4 pos-abs">
                  <img
                    src={image4}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29325923 "
                    alt="29325923-ALT"
                  />{" "}
                </div>

                <div className="blog-post-content-4 pos-abs">
                  <div className="blog-post-header-4 pos-abs">
                    <div className="blog-post-date-4 pos-abs">
                      <span className="blog-post-date-4-span">{`30 Oct 2024`}</span>
                    </div>

                    <div className="blog-post-title-4 pos-abs">
                      <span className="blog-post-title-4-span">{`Revitalize & Restore`}</span>
                    </div>
                  </div>

                  <div className="blog-post-excerpt-4 pos-abs">
                    <span className="blog-post-excerpt-4-span">{`Experience luxurious rejuvenation with PRP Hair, Meso Hair, Hair Filler, and Laser Hair Removal, bringing life back to your strands and restoring natural beauty.`}</span>
                  </div>
                </div>
              </div>

              <div className="blog-post-card-5 pos-abs">
                <div className="blog-post-image-5 pos-abs">
                  <img
                    src={image5}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29325930 "
                    alt="29325930-ALT"
                  />{" "}
                </div>

                <div className="blog-post-content-5 pos-abs">
                  <div className="blog-post-header-5 pos-abs">
                    <div className="blog-post-date-5 pos-abs">
                      <span className="blog-post-date-5-span">{`30 Oct 2024`}</span>
                    </div>

                    <div className="blog-post-title-5 pos-abs">
                      <span className="blog-post-title-5-span">{`Wellness & Vitality`}</span>
                    </div>
                  </div>

                  <div className="blog-post-excerpt-5 pos-abs">
                    <span className="blog-post-excerpt-5-span">{`Experience luxurious rejuvenation with PRP Hair, Meso Hair, Hair Filler, and Laser Hair Removal, bringing life back to your strands and restoring natural beauty.`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-posts-grid-2 pos-abs">
            <div className="blog-posts-row-2 pos-abs">
              <div className="blog-post-card-6 pos-abs">
                <div className="blog-post-image-6 pos-abs">
                  <img
                    src={image3}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29325939 "
                    alt="29325939-ALT"
                  />{" "}
                </div>

                <div className="blog-post-content-6 pos-abs">
                  <div className="blog-post-header-6 pos-abs">
                    <div className="blog-post-date-6 pos-abs">
                      <span className="blog-post-date-6-span">{`30 Oct 2024`}</span>
                    </div>

                    <div className="blog-post-title-6 pos-abs">
                      <span className="blog-post-title-6-span">{`Rejuvenate & Glow`}</span>
                    </div>
                  </div>

                  <div className="blog-post-excerpt-6 pos-abs">
                    <span className="blog-post-excerpt-6-span">{`Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion.`}</span>
                  </div>
                </div>
              </div>

              <div className="blog-post-card-7 pos-abs">
                <div className="blog-post-image-7 pos-abs">
                  <img
                    src={image4}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29325946 "
                    alt="29325946-ALT"
                  />{" "}
                </div>

                <div className="blog-post-content-7 pos-abs">
                  <div className="blog-post-header-7 pos-abs">
                    <div className="blog-post-date-7 pos-abs">
                      <span className="blog-post-date-7-span">{`30 Oct 2024`}</span>
                    </div>

                    <div className="blog-post-title-7 pos-abs">
                      <span className="blog-post-title-7-span">{`Revitalize & Restore`}</span>
                    </div>
                  </div>

                  <div className="blog-post-excerpt-7 pos-abs">
                    <span className="blog-post-excerpt-7-span">{`Experience luxurious rejuvenation with PRP Hair, Meso Hair, Hair Filler, and Laser Hair Removal, bringing life back to your strands and restoring natural beauty.`}</span>
                  </div>
                </div>
              </div>

              <div className="blog-post-card-8 pos-abs">
                <div className="blog-post-image-8 pos-abs">
                  <img
                    src={image5}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29325953 "
                    alt="29325953-ALT"
                  />{" "}
                </div>

                <div className="blog-post-content-8 pos-abs">
                  <div className="blog-post-header-8 pos-abs">
                    <div className="blog-post-date-8 pos-abs">
                      <span className="blog-post-date-8-span">{`30 Oct 2024`}</span>
                    </div>

                    <div className="blog-post-title-8 pos-abs">
                      <span className="blog-post-title-8-span">{`Wellness & Vitality`}</span>
                    </div>
                  </div>

                  <div className="blog-post-excerpt-8 pos-abs">
                    <span className="blog-post-excerpt-8-span">{`Experience luxurious rejuvenation with PRP Hair, Meso Hair, Hair Filler, and Laser Hair Removal, bringing life back to your strands and restoring natural beauty.`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-posts-grid-3 pos-abs">
            <div className="blog-posts-row-3 pos-abs">
              <div className="blog-post-card-9 pos-abs">
                <div className="blog-post-image-9 pos-abs">
                  <img
                    src={image3}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29325962 "
                    alt="29325962-ALT"
                  />{" "}
                </div>

                <div className="blog-post-content-9 pos-abs">
                  <div className="blog-post-header-9 pos-abs">
                    <div className="blog-post-date-9 pos-abs">
                      <span className="blog-post-date-9-span">{`30 Oct 2024`}</span>
                    </div>

                    <div className="blog-post-title-9 pos-abs">
                      <span className="blog-post-title-9-span">{`Rejuvenate & Glow`}</span>
                    </div>
                  </div>

                  <div className="blog-post-excerpt-9 pos-abs">
                    <span className="blog-post-excerpt-9-span">{`Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion.`}</span>
                  </div>
                </div>
              </div>

              <div className="blog-post-card-10 pos-abs">
                <div className="blog-post-image-10 pos-abs">
                  <img
                    src={image4}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29325969 "
                    alt="29325969-ALT"
                  />{" "}
                </div>

                <div className="blog-post-content-10 pos-abs">
                  <div className="blog-post-header-10 pos-abs">
                    <div className="blog-post-date-10 pos-abs">
                      <span className="blog-post-date-10-span">{`30 Oct 2024`}</span>
                    </div>

                    <div className="blog-post-title-10 pos-abs">
                      <span className="blog-post-title-10-span">{`Revitalize & Restore`}</span>
                    </div>
                  </div>

                  <div className="blog-post-excerpt-10 pos-abs">
                    <span className="blog-post-excerpt-10-span">{`Experience luxurious rejuvenation with PRP Hair, Meso Hair, Hair Filler, and Laser Hair Removal, bringing life back to your strands and restoring natural beauty.`}</span>
                  </div>
                </div>
              </div>

              <div className="blog-post-card-11 pos-abs">
                <div className="blog-post-image-11 pos-abs">
                  <img
                    src={image5}
                    className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-29325976 "
                    alt="29325976-ALT"
                  />{" "}
                </div>

                <div className="blog-post-content-11 pos-abs">
                  <div className="blog-post-header-11 pos-abs">
                    <div className="blog-post-date-11 pos-abs">
                      <span className="blog-post-date-11-span">{`30 Oct 2024`}</span>
                    </div>

                    <div className="blog-post-title-11 pos-abs">
                      <span className="blog-post-title-11-span">{`Wellness & Vitality`}</span>
                    </div>
                  </div>

                  <div className="blog-post-excerpt-11 pos-abs">
                    <span className="blog-post-excerpt-11-span">{`Experience luxurious rejuvenation with PRP Hair, Meso Hair, Hair Filler, and Laser Hair Removal, bringing life back to your strands and restoring natural beauty.`}</span>
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
                  alt="I29325982_29319849-ALT"
                />{" "}
              </div>

              <div className="footer-quick-links pos-abs">
                <div className="footer-quick-links-heading pos-abs">
                  <span className="footer-quick-links-heading-span">{`Quick Links`}</span>
                </div>

                <div className="footer-quick-links-list pos-abs">
                  <div className="footer-link-concerns pos-abs">
                    <div className="footer-link-text-concerns pos-abs">
                      <span className="footer-link-text-concerns-span">{`Concerns`}</span>
                    </div>
                  </div>

                  <div className="footer-link-services pos-abs">
                    <div className="footer-link-text-services pos-abs">
                      <span className="footer-link-text-services-span">{`Services`}</span>
                    </div>
                  </div>

                  <div className="footer-link-specials pos-abs">
                    <div className="footer-link-text-specials pos-abs">
                      <span className="footer-link-text-specials-span">{`Specials`}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-company-links pos-abs">
                <div className="footer-company-links-heading pos-abs">
                  <span className="footer-company-links-heading-span">{`Company`}</span>
                </div>

                <div className="footer-company-links-list pos-abs">
                  <div className="footer-link-about pos-abs">
                    <div className="footer-link-text-about pos-abs">
                      <span className="footer-link-text-about-span">{`About`}</span>
                    </div>
                  </div>

                  <div className="footer-link-blogs pos-abs">
                    <div className="footer-link-text-blogs pos-abs">
                      <span className="footer-link-text-blogs-span">{`Blogs`}</span>
                    </div>
                  </div>

                  <div className="footer-link-contact pos-abs">
                    <div className="footer-link-text-contact pos-abs">
                      <span className="footer-link-text-contact-span">{`Contact Us`}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-support pos-abs">
                <div className="footer-support-heading pos-abs">
                  <span className="footer-support-heading-span">{`Support`}</span>
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
                <div className="newsletter-input-group pos-abs">
                  <div className="newsletter-email-input pos-abs">
                    <div className="newsletter-email-placeholder pos-abs">
                      <span className="newsletter-email-placeholder-span">{`Enter your email`}</span>
                    </div>
                  </div>

                  <div className="newsletter-submit-button pos-abs">
                    <div className="newsletter-submit-button-text pos-abs">
                      <span className="newsletter-submit-button-text-span">{`Subscribe`}</span>
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
                  <div className="footer-social-icon-tiktok pos-abs">
                    <div className="footer-tiktok-icon-layer pos-abs">
                      <div className="footer-tiktok-icon-vector pos-abs">
                        <div className="nodeBg-I29325982_29319905 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>

                  <div className="footer-social-icon-facebook pos-abs">
                    <div className="footer-facebook-icon-path pos-abs">
                      <div className="nodeBg-I29325982_29319911 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="footer-social-icon-linkedin pos-abs">
                    <div className="footer-linkedin-icon-path pos-abs">
                      <div className="nodeBg-I29325982_29319913 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="footer-social-icon-twitter pos-abs">
                    <div className="footer-twitter-icon-vector pos-abs">
                      <div className="nodeBg-I29325982_29319915 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="footer-social-icon-instagram pos-abs">
                    <div className="footer-instagram-icon-vector pos-abs">
                      <div className="nodeBg-I29325982_29319917 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="footer-social-icon-youtube pos-abs">
                    <div className="footer-youtube-icon-group pos-abs">
                      <div className="footer-youtube-icon-inner-group pos-abs">
                        <div className="footer-youtube-icon-path pos-abs">
                          <div className="nodeBg-I29325982_29319909 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
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

export default Blog;

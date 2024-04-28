import React, { Component } from "react";
import logo from "../ODS/logos/ontario-logo--desktop.svg";

export class OPSHeader extends Component {
  render() {
    return (
      <div>
        <div className="ontario-header__container">
          <header
            className="ontario-application-header ontario-header"
            id="ontario-header"
          >
            <div className="ontario-row">
              <div className="ontario-columns ontario-small-6 ontario-application-header__logo">
                <a href="https://www.ontario.ca/page/government-ontario">
                  <img src={logo} alt="Ontario.ca homepage" role="img" />{" "}
                </a>
              </div>
              <div className="ontario-columns ontario-small-6 ontario-application-header__lang-toggle">
                <a
                  href="#"
                  className="ontario-header__language-toggler ontario-header-button ontario-header-button--without-outline"
                >
                  Fran&ccedil;ais
                </a>
              </div>
            </div>
          </header>
          <div className="ontario-application-subheader-menu__container">
            <section className="ontario-application-subheader">
              <div className="ontario-row">
                <div className="ontario-columns ontario-small-12 ontario-application-subheader__container">
                  <p className="ontario-application-subheader__heading">
                    Movie Appp
                  </p>

                  <div className="ontario-application-subheader__menu-container">
                    <ul className="ontario-application-subheader__menu ontario-show-for-large">
                      <li>Movie Search</li>
                      <li>Favourites</li>
                      <li></li>
                    </ul>
                    <ul className="ontario-application-subheader__menu ontario-hide-for-small ontario-show-for-medium ontario-hide-for-large">
                      <li>MovieSearch</li>
                      <li>Faves</li>
                    </ul>
                    <button
                      className="ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline"
                      id="ontario-header-menu-toggler"
                      aria-controls="ontario-navigation"
                      aria-label="Show navigation menu"
                      type="button"
                    >
                      {menuSVG()}
                      <span>Menu</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <nav className="ontario-navigation" id="ontario-navigation">
              <button
                className="ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline"
                id="ontario-header-nav-toggler"
                aria-controls="ontario-navigation"
                aria-label="Hide navigation menu"
              >
                {menuSVG()}
                <span>Menu</span>
              </button>
              <div className="ontario-navigation__container">
                <ul>
                  <li className="ontario-show-for-small-only">link1</li>
                  <li className="ontario-show-for-small-only">link2</li>
                  <li className="ontario-hide-for-large">link3
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="ontario-overlay"></div>
      </div>
    );
  }
}
const menuSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);
export default menuSVG;

export class OPSFooter extends Component {
  render() {
    return (
      <footer className="ontario-footer ontario-footer--default">
        <div className="ontario-row">
          <div className="ontario-columns ontario-small-12">
            <ul className="ontario-footer__links-container ontario-footer__links-container--inline">
              <li>
                <a
                  className="ontario-footer__link"
                  href="https://www.ontario.ca/page/accessibility"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  className="ontario-footer__link"
                  href="https://www.ontario.ca/page/privacy-statement"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a className="ontario-footer__link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
            <div className="ontario-footer__copyright">
              <a
                className="ontario-footer__link"
                href="https://www.ontario.ca/page/copyright-information"
              >
                &copy; King's Printer for Ontario,
                <span className="ontario-nbsp">2012&ndash;24</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

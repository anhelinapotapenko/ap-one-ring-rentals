// Header.js - displays the logo, links, search bar, navigation

import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <header id="header">
      <div id="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul id="top-buttons">
                <li>
                  <a href="#">
                    <i className="fa fa-sign-in"></i> Login
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-pencil-square-o"></i> Register
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <div className="language-switcher">
                    <span>
                      <i className="fa fa-globe"></i> English
                    </span>
                    <ul>
                      <li>
                        <a href="#">Deutsch</a>
                      </li>
                      <li>
                        <a href="#">Español</a>
                      </li>
                      <li>
                        <a href="#">Français</a>
                      </li>
                      <li>
                        <a href="#">Português</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <form id="site-search">
                    <span>
                      <i class="fa fa-search"></i>
                    </span>
                    <input type="text" name="q" placeholder="Search" />
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="nav-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <a href="#" className="nav-logo">
                <img src={logo} alt="One Ring Rentals" />
              </a>

              <div id="sb-search" className="sb-search">
                <form>
                  <input
                    className="sb-search-input"
                    placeholder="Search..."
                    type="text"
                    name="search"
                    id="search"
                  />
                  <input className="sb-search-submit" type="submit" value="" />
                  <i className="fa fa-search sb-icon-search"></i>
                </form>
              </div>

              <nav className="navbar">
                <button id="nav-mobile-btn" type="button">
                  <i className="fa fa-bars"></i>
                </button>

                <ul
                  className="navbar-nav d-flex flex-row gap-3"
                  style={{
                    listStyle: "none",
                  }}
                >
                  <li>
                    <a href="/">Home</a>
                  </li>

                  <li>
                    <a href="#">Find a Rental</a>
                  </li>
                  <li>
                    <a href="#">List your rental</a>
                  </li>
                  <li>
                    <a href="#">Travel Guides</a>
                  </li>
                  <li>
                    <a href="/regions">Regions</a>
                  </li>
                  <li>
                    <a href="/news">News</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;

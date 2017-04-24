/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';

function Footer() {
  return (
    <footer className="mdl-mini-footer">
      <div className="mdl-mini-footer__left-section">
        <ul className="mdl-mini-footer__link-list">
          <li><Link to="/">© IT&Teges</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="mailto:kontakt@itenteges.pl">Contact</a></li>
        </ul>
      </div>
      <div className="mdl-mini-footer__right-section">
        <ul className="mdl-mini-footer__link-list">
          <li className="mdl-mini-footer--social-btn" style={{ backgroundColor: 'transparent' }}>
            <a href="https://github.com/ITenTeges" role="button" title="GitHub">
              <svg width="36" height="36" viewBox="0 0 24 24">
                <path
                  fill="#fff" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58
                  9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,
                  17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,
                  16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,
                  16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,
                  7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,
                  6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54
                  17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,
                  16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27
                  14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                />
              </svg>
            </a>
          </li>
          <li className="mdl-mini-footer--social-btn" style={{ backgroundColor: 'transparent' }}>
            <a href="http://codepen.io/leshek_pawlak/" role="button" title="LinkedIn">
              <svg width="34" height="34" viewBox="0 0 500 500">
                <g>
                  <path fill="#fff" d="M250.001,0C111.927,0,0,111.927,0,250.001C0,388.077,111.927,500,250.001,500C388.073,500,500,388.077,500,250.001   C500,111.927,388.073,0,250.001,0z M250.001,458.943c-115.212,0-208.941-93.733-208.941-208.942   c0-115.208,93.729-208.941,208.941-208.941c115.208,0,208.938,93.733,208.938,208.941   C458.939,365.21,365.21,458.943,250.001,458.943z" />
                  <path fill="#fff" d="M404.462,201.172c-0.028-0.195-0.076-0.382-0.109-0.577c-0.065-0.374-0.135-0.748-0.232-1.114   c-0.057-0.22-0.138-0.431-0.206-0.642c-0.106-0.326-0.212-0.651-0.342-0.968c-0.091-0.22-0.196-0.439-0.297-0.651   c-0.14-0.3-0.285-0.593-0.452-0.877c-0.122-0.212-0.251-0.416-0.377-0.618c-0.18-0.277-0.362-0.546-0.562-0.806   c-0.146-0.194-0.3-0.39-0.454-0.577c-0.212-0.243-0.432-0.487-0.664-0.716c-0.174-0.178-0.346-0.357-0.528-0.521   c-0.244-0.219-0.496-0.431-0.752-0.633c-0.198-0.155-0.395-0.31-0.602-0.456c-0.078-0.049-0.146-0.114-0.22-0.163L257.369,97.656   c-4.464-2.976-10.274-2.976-14.738,0l-141.295,94.196c-0.073,0.049-0.142,0.114-0.219,0.163c-0.208,0.146-0.403,0.301-0.598,0.456   c-0.26,0.203-0.512,0.415-0.752,0.633c-0.187,0.164-0.357,0.342-0.533,0.521c-0.231,0.229-0.451,0.473-0.658,0.716   c-0.159,0.188-0.313,0.383-0.459,0.577c-0.195,0.26-0.383,0.529-0.557,0.806c-0.134,0.203-0.26,0.406-0.382,0.618   c-0.163,0.284-0.309,0.577-0.451,0.877c-0.102,0.211-0.208,0.431-0.297,0.651c-0.13,0.317-0.236,0.642-0.341,0.968   c-0.07,0.211-0.146,0.422-0.208,0.642c-0.097,0.366-0.162,0.74-0.231,1.114c-0.032,0.195-0.081,0.382-0.106,0.577   c-0.077,0.569-0.122,1.146-0.122,1.732v94.197c0,0.585,0.044,1.162,0.122,1.74c0.025,0.188,0.074,0.382,0.106,0.568   c0.069,0.374,0.134,0.748,0.231,1.114c0.062,0.22,0.138,0.432,0.208,0.643c0.105,0.324,0.211,0.65,0.341,0.975   c0.089,0.222,0.195,0.433,0.297,0.645c0.143,0.3,0.289,0.592,0.451,0.885c0.122,0.204,0.248,0.406,0.382,0.61   c0.174,0.276,0.362,0.545,0.557,0.806c0.146,0.203,0.301,0.391,0.459,0.577c0.208,0.243,0.427,0.488,0.658,0.716   c0.175,0.178,0.346,0.357,0.533,0.52c0.24,0.221,0.492,0.432,0.752,0.635c0.195,0.155,0.391,0.31,0.598,0.454   c0.077,0.05,0.146,0.115,0.219,0.163l141.295,94.197c2.231,1.487,4.802,2.236,7.371,2.236c2.566,0,5.135-0.749,7.368-2.236   l141.295-94.197c0.074-0.048,0.142-0.113,0.22-0.163c0.207-0.145,0.403-0.299,0.602-0.454c0.256-0.203,0.508-0.414,0.752-0.635   c0.183-0.162,0.354-0.342,0.528-0.52c0.232-0.228,0.452-0.473,0.664-0.716c0.154-0.187,0.308-0.374,0.454-0.577   c0.2-0.261,0.383-0.529,0.562-0.806c0.126-0.204,0.255-0.406,0.377-0.61c0.167-0.293,0.312-0.585,0.452-0.885   c0.101-0.212,0.206-0.423,0.297-0.645c0.13-0.324,0.235-0.65,0.342-0.975c0.068-0.211,0.149-0.423,0.206-0.643   c0.098-0.366,0.167-0.74,0.232-1.114c0.033-0.187,0.081-0.381,0.109-0.568c0.073-0.578,0.119-1.155,0.119-1.74v-94.197   C404.581,202.318,404.535,201.741,404.462,201.172z M263.286,133.533l104.088,69.387l-46.493,31.103l-57.595-38.527V133.533z    M236.715,133.533v61.963l-57.592,38.527l-46.497-31.103L236.715,133.533z M121.99,227.771l33.238,22.231l-33.238,22.233V227.771z    M236.715,366.471l-104.088-69.388l46.497-31.094l57.592,38.52V366.471z M250.001,281.431l-46.988-31.429l46.988-31.428   l46.985,31.428L250.001,281.431z M263.286,366.471v-61.962l57.595-38.52l46.493,31.094L263.286,366.471z M378.01,272.234   l-33.233-22.233l33.233-22.231V272.234z" />
                </g>
              </svg>
            </a>
          </li>
          <li className="mdl-mini-footer--social-btn" style={{ backgroundColor: 'transparent' }}>
            <a href="https://www.linkedin.com/company-beta/17935291/" role="button" title="LinkedIn">
              <svg width="32" height="32" viewBox="0 0 1000 1000">
                <g><path fill="#fff" d="M500,10c136.1,0,251.8,47.6,347.1,142.9C942.4,248.2,990,363.9,990,500c0,134.7-47.6,250.1-142.9,346.1C751.8,942,636.1,990,500,990c-134.8,0-250.1-48-346.1-143.9C58,750.1,10,634.8,10,500c0-136.1,48-251.8,143.9-347.1C249.9,57.6,365.3,10,500,10L500,10 M379.5,702.1V383.6h-98v318.5H379.5L379.5,702.1 M330.5,342.8c35.4,0,53.1-16.3,53.1-49c0-32.7-17.7-49-53.1-49c-15,0-27.6,4.8-37.8,14.3c-10.2,9.5-15.3,21.1-15.3,34.7C277.5,326.5,295.2,342.8,330.5,342.8L330.5,342.8 M743,702.1V514.3c0-44.9-10.5-79.3-31.6-103.1c-21.1-23.8-48.7-35.7-82.7-35.7c-44.9,0-77.6,17-98,51h-2l-6.1-42.9h-85.8c1.4,19.1,2,53.1,2,102.1v216.4h100V518.4c0-12.3,1.4-20.4,4.1-24.5c8.2-25.9,25.2-38.8,51-38.8c32.7,0,49,23.1,49,69.4v177.6H743L743,702.1" />
                </g>
              </svg>
            </a>
          </li>
          <li className="mdl-mini-footer--social-btn" style={{ backgroundColor: 'transparent', paddingTop: '2px' }}>
            <a href="https://www.facebook.com/itenteges" role="button" title="Facebook">
              <svg width="36" height="36" viewBox="0 0 57 57">
                <path
                  fill="#fff" d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826C49.652,11.137,38.516,0,24.826,0zM31,25.7h-4.039c0,6.453,0,14.396,0,14.396h-5.985c0,0,0-7.866,0-14.396h-2.845v-5.088h2.845v-3.291c0-2.357,1.12-6.04,6.04-6.04l4.435,0.017v4.939c0,0-2.695,0-3.219,0c-0.524,0-1.269,0.262-1.269,1.386v2.99h4.56L31,25.7z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

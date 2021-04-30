import React from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { renderWithTheme } from "../../testHelpers";
import { Menu, menuConfig } from "../../widgets/Menu";

/**
 * @see https://jestjs.io/docs/en/manual-mocks
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        ovenPriceUsd={7.13}
        links={menuConfig}
      >
        body
      </Menu>
    </BrowserRouter>
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c27 {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #452a7a;
      -webkit-transition: opacity 0.4s;
      transition: opacity 0.4s;
      opacity: 0;
      z-index: 10;
      pointer-events: none;
    }

    .c2 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    .c5 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #8f80ba;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c7 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #452A7A;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c13 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #452A7A;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      margin-right: 8px;
    }

    .c3 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: 0;
      border-radius: 16px;
      box-shadow: 0px -1px 0px 0px rgba(14,14,44,0.4) inset;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-letter-spacing: 0.03em;
      -moz-letter-spacing: 0.03em;
      -ms-letter-spacing: 0.03em;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0;
      -webkit-transition: background-color 0.2s,opacity 0.2s;
      transition: background-color 0.2s,opacity 0.2s;
      height: 48px;
      padding: 0 24px;
      background-color: transparent;
      color: #1FC7D4;
      box-shadow: none;
      width: sm;
      height: sm;
      margin-right: 24px;
    }

    .c3:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c3:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c3:disabled,
    .c3.pancake-button--disabled {
      background-color: #E9EAEB;
      border-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c8 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: 0;
      border-radius: 16px;
      box-shadow: 0px -1px 0px 0px rgba(14,14,44,0.4) inset;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-letter-spacing: 0.03em;
      -moz-letter-spacing: 0.03em;
      -ms-letter-spacing: 0.03em;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0;
      -webkit-transition: background-color 0.2s,opacity 0.2s;
      transition: background-color 0.2s,opacity 0.2s;
      height: 32px;
      padding: 0 16px;
      background-color: #EFF4F5;
      box-shadow: none;
      color: #1FC7D4;
    }

    .c8:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c8:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c8:disabled,
    .c8.pancake-button--disabled {
      background-color: #E9EAEB;
      border-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c24 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: 0;
      border-radius: 16px;
      box-shadow: 0px -1px 0px 0px rgba(14,14,44,0.4) inset;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-letter-spacing: 0.03em;
      -moz-letter-spacing: 0.03em;
      -ms-letter-spacing: 0.03em;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0;
      -webkit-transition: background-color 0.2s,opacity 0.2s;
      transition: background-color 0.2s,opacity 0.2s;
      height: 48px;
      padding: 0 24px;
      background-color: transparent;
      color: #1FC7D4;
      box-shadow: none;
    }

    .c24:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c24:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c24:disabled,
    .c24.pancake-button--disabled {
      background-color: #E9EAEB;
      border-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c4 {
      color: #452A7A;
      padding: 0 8px;
      border-radius: 8px;
    }

    .c6 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c6 .mobile-icon {
      width: 32px;
    }

    .c6 .desktop-icon {
      width: 156px;
      display: none;
    }

    .c6 .right-eye {
      -webkit-animation-delay: 20ms;
      animation-delay: 20ms;
    }

    .c6:hover .left-eye,
    .c6:hover .right-eye {
      -webkit-transform-origin: center 60%;
      -ms-transform-origin: center 60%;
      transform-origin: center 60%;
      -webkit-animation-name: beoKdG;
      animation-name: beoKdG;
      -webkit-animation-duration: 350ms;
      animation-duration: 350ms;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
    }

    .c16 {
      color: #ED4B9E;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      font-size: 14px;
    }

    .c18 {
      color: #FFB237;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      font-size: 14px;
    }

    .c14 {
      color: transparent;
      -webkit-transition: color 0.4s;
      transition: color 0.4s;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
    }

    .c12 {
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 48px;
      padding: 0 16px;
      font-size: 16px;
      background-color: transparent;
      color: #8f80ba;
      box-shadow: inset 4px 0px 0px #1FC7D4;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c12 a {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .c12 svg {
      fill: #8f80ba;
    }

    .c12:hover {
      background-color: #EFF4F5;
    }

    .c12.rainbow {
      background-clip: text;
      -webkit-animation: fKQuCC 3s ease-in-out infinite;
      animation: fKQuCC 3s ease-in-out infinite;
      background: linear-gradient(139.73deg,#E6FDFF 0%,#F3EFFF 100%);
      background-size: 400% 100%;
    }

    .c15 {
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 48px;
      padding: 0 16px;
      font-size: 16px;
      background-color: transparent;
      color: #8f80ba;
      box-shadow: none;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c15 a {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .c15 svg {
      fill: #8f80ba;
    }

    .c15:hover {
      background-color: #EFF4F5;
    }

    .c15.rainbow {
      background-clip: text;
      -webkit-animation: fKQuCC 3s ease-in-out infinite;
      animation: fKQuCC 3s ease-in-out infinite;
      background: linear-gradient(139.73deg,#E6FDFF 0%,#F3EFFF 100%);
      background-size: 400% 100%;
    }

    .c17 {
      border-radius: 16px;
      padding: 0 8px;
      border: 2px solid;
      border-color: #ED4B9E;
      box-shadow: none;
      color: #ED4B9E;
      margin-left: 8px;
    }

    .c19 {
      border-radius: 16px;
      padding: 0 8px;
      border: 2px solid;
      border-color: #FFB237;
      box-shadow: none;
      color: #FFB237;
      margin-left: 8px;
    }

    .c20 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c21 {
      max-height: 48px;
      -webkit-transition: max-height 0.3s ease-out;
      transition: max-height 0.3s ease-out;
      overflow: hidden;
      border-color: transparent;
      border-style: solid;
      border-width: 1px 0;
    }

    .c22 {
      max-height: 0;
      -webkit-transition: max-height 0.3s ease-out;
      transition: max-height 0.3s ease-out;
      overflow: hidden;
      border-color: transparent;
      border-style: solid;
      border-width: 1px 0;
    }

    .c11 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      height: 100%;
    }

    .c25 {
      padding: 0;
      width: 48px;
    }

    .c23 {
      -webkit-flex: none;
      -ms-flex: none;
      flex: none;
      padding: 8px 4px;
      background-color: #FFFFFF;
      border-top: solid 2px rgba(133,133,133,0.1);
    }

    .c10 {
      position: fixed;
      padding-top: 80px;
      top: 0;
      left: 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      background-color: #FFFFFF;
      width: 0;
      height: 100vh;
      -webkit-transition: padding-top 0.2s,width 0.2s cubic-bezier(0.4,0,0.2,1);
      transition: padding-top 0.2s,width 0.2s cubic-bezier(0.4,0,0.2,1);
      border-right: 0;
      z-index: 11;
      overflow: hidden;
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      white-space: nowrap;
    }

    .c0 {
      position: relative;
      width: 100%;
    }

    .c1 {
      position: fixed;
      top: 0;
      left: 0;
      -webkit-transition: top 0.2s;
      transition: top 0.2s;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding-left: 8px;
      padding-right: 16px;
      width: 100%;
      height: 64px;
      background-color: #FFFFFF;
      border-bottom: solid 2px rgba(133,133,133,0.1);
      z-index: 20;
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }

    .c9 {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    .c26 {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      margin-top: 64px;
      -webkit-transition: margin-top 0.2s,margin-left 0.2s cubic-bezier(0.4,0,0.2,1);
      transition: margin-top 0.2s,margin-left 0.2s cubic-bezier(0.4,0,0.2,1);
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      max-width: 100%;
    }

    .c28 {
      position: fixed;
      height: 100%;
    }

    @media screen and (min-width:968px) {
      .c6 .mobile-icon {
        display: none;
      }
    }

    @media screen and (min-width:968px) {
      .c6 .desktop-icon {
        display: block;
      }
    }

    @media screen and (min-width:968px) {
      .c10 {
        border-right: 2px solid rgba(133,133,133,0.1);
        width: 56px;
      }
    }

    @media screen and (min-width:968px) {
      .c26 {
        margin-left: 56px;
        max-width: calc(100% - 56px);
      }
    }

    @media screen and (min-width:968px) {
      .c28 {
        display: none;
      }
    }

    <div
        class="c0"
      >
        <nav
          class="c1"
        >
          <div
            class="c2"
          >
            <button
              aria-label="Toggle menu"
              class="c3 c4"
              scale="md"
            >
              <svg
                class="c5"
                color="textSubtle"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                />
              </svg>
            </button>
            <a
              aria-label="Pancake home page"
              class="c6"
              href="/"
            >
              <svg
                class="c7"
                color="text"
                id="ea8wrxrf1xjv1"
                viewBox="0 0 513.700000 513.700000"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="ea8wrxrf1xjv2"
                >
                  <g
                    id="ea8wrxrf1xjv3"
                  >
                    <g
                      id="ea8wrxrf1xjv4"
                    >
                      <g
                        id="ea8wrxrf1xjv5"
                      >
                        <path
                          d="M330.088000,501.932000L183.678000,501.932000C150.230000,501.932000,122.688000,479.288000,121.134000,450.509000L112.013000,338.105000L402.515000,338.105000L392.622000,450.717000C390.942000,479.410000,363.443000,501.932000,330.088000,501.932000Z"
                          fill="rgb(255,255,255)"
                          id="ea8wrxrf1xjv6"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M343.707000,338.105000L335.817000,427.921000C334.478000,450.805000,312.546000,468.768000,285.943000,468.768000L169.170000,468.768000C142.500000,468.768000,120.539000,450.717000,119.288000,427.774000C118.221000,467.886000,135.775000,500.677000,183.679000,501.932000C183.677000,501.932000,330.088000,501.932000,330.088000,501.932000C363.443000,501.932000,390.942000,479.410000,392.621000,450.718000C392.621000,450.718000,402.514000,338.106000,402.514000,338.106000L343.707000,338.106000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv7"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M389.607000,196.483000C367.995000,252.921000,295.289000,223.075000,319.568000,167.729000C330.599000,140.858000,368.866000,123.508000,377.233000,126.943000C385.601000,130.378000,400.639000,169.611000,389.607000,196.483000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv8"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M127.457000,194.817000C148.844000,250.666000,220.792000,221.131000,196.765000,166.363000C185.849000,139.773000,147.982000,122.603000,139.701000,126.002000C131.421000,129.401000,116.540000,168.225000,127.457000,194.817000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv9"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M402.846000,347.599000L111.682000,347.599000C33.752000,339.387000,142.490000,162.115000,257.264000,173.788000C372.063000,162.129000,480.764000,339.388000,402.846000,347.599000Z"
                          fill="rgb(83,204,251)"
                          id="ea8wrxrf1xjv10"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M429.164000,321.757000C416.487000,232.751000,333.594000,165.744000,241.721000,174.473000C307.449000,180.881000,360.217000,231.521000,369.864000,296.250000C371.553000,307.585000,361.350000,317.637000,348.082000,317.637000L107.106000,317.637000C98.825000,317.637000,91.738000,313.721000,87.991000,308.021000C81.234000,326.674000,87.196000,347.104000,111.682000,347.598000C111.680000,347.598000,402.845000,347.598000,402.845000,347.598000C418.877000,347.599000,431.205000,335.453000,429.164000,321.757000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv11"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M292.137000,184.490000C295.196000,166.575000,293.740000,149.709000,283.748000,135.079000C287.647000,115.535000,285.747000,99.259000,275.350000,87.603000C275.337000,86.043000,265.827000,-7.392000,254.979000,13.087000C248.840000,34.358000,244.419000,54.394000,244.823000,70.968000C236.845000,82.663000,233.974000,95.567000,237.954000,110.123000C230.943000,122.179000,227.853000,135.609000,230.774000,151.050000C221.526000,163.314000,223.558000,176.778000,223.990000,183.041000C226.724000,204.338000,289.323000,204.596000,292.137000,184.490000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv12"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M292.137000,184.490000C294.219000,171.685000,294.343000,159.242000,290.219000,147.966000C297.046000,180.278000,227.989000,178.237000,228.829000,153.920000C221.839000,165.358000,223.592000,177.264000,223.991000,183.042000C226.724000,204.338000,289.323000,204.596000,292.137000,184.490000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv13"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M203.017000,313.806000C197.918000,318.905000,189.650000,318.905000,184.551000,313.806000L160.630000,289.885000C155.531000,284.786000,155.531000,276.518000,160.630000,271.419000C165.729000,266.320000,173.997000,266.320000,179.096000,271.419000L203.017000,295.340000C208.116000,300.439000,208.116000,308.706000,203.017000,313.806000Z"
                          fill="rgb(255,255,255)"
                          id="ea8wrxrf1xjv14"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M236.402000,286.138000C232.482000,280.085000,234.211000,272,240.263000,268.080000L268.657000,249.690000C274.710000,245.770000,282.795000,247.499000,286.715000,253.551000C290.635000,259.604000,288.906000,267.689000,282.854000,271.609000L254.459000,289.999000C248.407000,293.920000,240.322000,292.191000,236.402000,286.138000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv15"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M336.115000,308.762000C329.312000,306.069000,326.480000,297.481000,329.264000,291.606000C329.673000,290.678000,342.549000,260.594000,342.708000,260.257000C345.639000,253.813000,353.199000,250.864000,359.737000,253.667000C366.540000,256.360000,369.372000,264.948000,366.588000,270.823000C366.179000,271.751000,353.303000,301.835000,353.144000,302.172000C350.213000,308.616000,342.654000,311.565000,336.115000,308.762000Z"
                          fill="rgb(255,255,255)"
                          id="ea8wrxrf1xjv16"
                          stroke="none"
                          stroke-width="1"
                        />
                      </g>
                      <g
                        id="ea8wrxrf1xjv17"
                      >
                        <g
                          id="ea8wrxrf1xjv18"
                        >
                          <path
                            d="M439.122000,320.273000C433.390000,281.811000,415.462000,246.171000,388.196000,218.509000C392.415000,213.387000,396.054000,207.291000,398.921000,200.307000C408.793000,174.422000,402.514000,131.584000,381.058000,117.628000C353.724000,112.428000,316.096000,142.087000,307.780000,170.819000C306.403000,170.426000,305.023000,170.037000,303.637000,169.676000C303.808000,156.178000,300.700000,143.916000,294.341000,133.053000C297.691000,112.601000,294.604000,96.023000,285.146000,83.674000C283.415000,62.214000,279.103000,38.341000,271.983000,10.823000C270.626000,4.516000,265.061000,-0.005000,258.564000,0C252.129000,0.004000,246.618000,4.446000,245.201000,10.657000C238.116000,35.272000,234.840000,53.178000,234.735000,68.028000C226.880000,80.795000,224.392000,94.442000,227.285000,108.685000C220.786000,121.363000,218.418000,134.785000,220.222000,148.691000C215.930000,155.720000,214.248000,162.822000,213.686000,168.960000C212.043000,169.360000,210.408000,169.789000,208.778000,170.234000C200.988000,141.435000,163.204000,111.456000,135.877000,116.686000C109.910000,133.799000,105.842000,191.826000,128.485000,216.353000C100.155000,243.090000,39.977000,340.390000,103.429000,356.834000C103.429000,356.834000,111.086000,451.193000,111.086000,451.193000C116.124000,542.152000,272.687000,504.798000,330.088000,512.003000C419.524000,511.211000,402.558000,415.701000,410.972000,356.856000C427.961000,353.841000,442.048000,337.601000,439.122000,320.273000ZM328.882000,171.553000C337.272000,152.547000,359.329000,139.886000,373.235000,136.682000C380.886000,148.773000,387.671000,173.202000,380.293000,192.659000C378.340000,197.416000,375.974000,201.526000,373.297000,204.953000C359.165000,193.450000,343.488000,184.211000,326.828000,177.409000C327.389000,175.487000,328.069000,173.534000,328.882000,171.553000ZM254.870000,71.454000C254.665000,61.885000,256.102000,51.188000,258.338000,40.678000C261.095000,53.772000,263.076000,65.908000,264.317000,77.274000L254.866000,71.628000C254.870000,71.571000,254.868000,71.512000,254.870000,71.454000ZM249.684000,82.606000C268.875000,93,277.585000,99.044000,275.114000,125.136000L247.953000,109.028000C245.501000,99.730000,245.478000,90.995000,249.684000,82.606000ZM243.869000,120.654000L274.377000,138.747000C280.803000,148.842000,284.461000,159.474000,283.382000,172.840000L240.735000,149.599000C238.770000,139.468000,239.753000,129.895000,243.869000,120.654000ZM236.417000,161.004000L280.231000,184.881000C275.321000,190.231000,238.486000,191.347000,234.001000,181.883000C233.556000,175.879000,232.629000,168.818000,236.417000,161.004000ZM135.570000,156.596000C137.869000,146.204000,141.587000,138.654000,143.705000,135.754000C159.746000,138.401000,187.149000,159.217000,189.663000,176.613000C173.201000,183.116000,157.677000,191.996000,143.609000,203.064000C133.617000,189.937000,131.529000,175.417000,135.570000,156.596000ZM183.678000,491.864000C155.402000,491.856000,132.300000,473.344000,131.169000,449.695000C131.169000,449.695000,123.701000,357.667000,123.701000,357.667000L202.205000,357.667000L208.083000,491.863000L183.678000,491.863000ZM297.080000,491.864000L220.177000,491.864000L214.299000,357.668000L302.958000,357.668000ZM382.592000,449.837000C380.230000,484.611000,342.231000,495.101000,309.173000,491.864000L315.051000,357.668000L390.689000,357.668000ZM416.516000,331.789000C413.417000,335.385000,408.306000,337.531000,402.845000,337.531000L111.681000,337.531000C106.220000,337.531000,101.109000,335.385000,98.010000,331.789000C92.375000,265.666000,155.307000,205.601000,215.324000,189.404000C222.330000,215.008000,294.100000,216.150000,301.098000,189.924000C360.169000,206.652000,422.235000,266.388000,416.516000,331.789000Z"
                            fill="rgb(0,0,0)"
                            id="ea8wrxrf1xjv19"
                            stroke="none"
                            stroke-width="1"
                          />
                          <path
                            d="M193.783000,323.662000C181.998000,325.420000,164.310000,300.339000,156.356000,294.156000C152.750000,290.548000,150.763000,285.752000,150.763000,280.651000C150.175000,264.167000,172.124000,255.066000,183.367000,267.147000C194.162000,280.042000,225.866000,298.792000,207.288000,318.077000C203.565000,321.800000,198.674000,323.662000,193.783000,323.662000ZM203.017000,313.806000L203.027000,313.806000ZM169.863000,273.638000C163.870000,273.392000,160.432000,281.487000,164.902000,285.613000C164.902000,285.613000,188.823000,309.534000,188.823000,309.534000C195.162000,316.049000,205.277000,305.963000,198.746000,299.610000C195.559000,297.503000,174.160000,272.176000,169.863000,273.638000Z"
                            fill="rgb(0,0,0)"
                            id="ea8wrxrf1xjv20"
                            stroke="none"
                            stroke-width="1"
                          />
                          <path
                            d="M247.392000,298.133000C241.126000,298.134000,234.984000,295.061000,231.331000,289.422000L231.332000,289.422000C217.070000,266.925000,252.267000,254.792000,265.374000,244.619000C286.350000,231.135000,307.058000,262.986000,286.137000,276.680000C278.997000,280.180000,255.798000,299.369000,247.392000,298.133000ZM275.742000,253.630000C274.117000,252.097000,245.466000,272.369000,243.547000,273.150000C240.339000,275.134000,239.356000,279.731000,241.471000,282.854000L241.472000,282.854000C243.576000,286.102000,247.928000,287.032000,251.175000,284.929000L279.570000,266.539000C285.407000,263.008000,282.533000,253.412000,275.742000,253.630000Z"
                            fill="rgb(0,0,0)"
                            id="ea8wrxrf1xjv21"
                            stroke="none"
                            stroke-width="1"
                          />
                          <path
                            d="M341.234000,315.859000C338.727000,315.859000,336.181000,315.362000,333.734000,314.314000C324.216000,310.463000,319.465000,298.587000,323.707000,289.234000C328.971000,280.354000,335.701000,250.952000,347.500000,247.935000C362.588000,241.272000,379.189000,258.269000,372.144000,273.195000C365.487000,284.934000,359.734000,317.542000,341.234000,315.859000ZM338.496000,303.210000C341.933000,304.767000,346.294000,303.024000,347.709000,299.526000C347.709000,299.526000,361.040000,268.434000,361.040000,268.434000C362.598000,264.999000,360.854000,260.634000,357.356000,259.220000C353.920000,257.663000,349.557000,259.406000,348.142000,262.904000C348.142000,262.904000,334.811000,293.996000,334.811000,293.996000C333.287000,297.552000,334.940000,301.685000,338.496000,303.210000Z"
                            fill="rgb(0,0,0)"
                            id="ea8wrxrf1xjv22"
                            stroke="none"
                            stroke-width="1"
                          />
                        </g>
                        <path
                          d="M145.003000,259.609000C117.254000,252.783000,154.660000,224.300000,164.389000,218.470000C175.658000,211.878000,185.777000,229.720000,174.308000,235.994000C168.156000,239.476000,158.062000,248.771000,153.131000,255.495000C151.158000,258.184000,148.102000,259.609000,145.003000,259.609000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv23"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M191.707000,224.046000C176.623000,222.604000,179.682000,203.449000,193.951000,202.933000C211.777000,201.971000,209.442000,224.216000,191.707000,224.046000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv24"
                          stroke="none"
                          stroke-width="1"
                        />
                      </g>
                    </g>
                    <path
                      d="M61.132000,43.616000C62.216000,45.200000,69.438000,70.528000,71.816000,70.237000C104.053000,84.342000,104.165000,83.204000,71.816000,97.339000C69.496000,97.004000,62.132000,122.468000,61.131000,123.959000C59.909000,127.398000,55.585000,127.398000,54.362000,123.959000L45.707000,99.623000C44.306000,93.801000,10.473000,89.041000,22.055000,79.978000C23.674000,78.694000,46.065000,70.545000,45.707000,67.952000C45.707000,67.952000,54.362000,43.615000,54.362000,43.615000C55.585000,40.178000,59.909000,40.178000,61.132000,43.616000Z"
                      fill="rgb(255,255,255)"
                      id="ea8wrxrf1xjv25"
                      stroke="none"
                      stroke-width="1"
                    />
                    <path
                      d="M468.201000,106.809000C469.006000,107.984000,474.362000,126.772000,476.127000,126.556000C499.991000,136.950000,500.075000,136.244000,476.127000,146.660000C474.405000,146.412000,468.944000,165.300000,468.201000,166.407000C467.294000,168.958000,464.087000,168.958000,463.180000,166.407000C463.180000,166.407000,456.760000,148.355000,456.760000,148.355000C455.684000,143.983000,430.683000,140.591000,439.215000,133.782000C440.417000,132.829000,457.025000,126.785000,456.760000,124.861000C456.760000,124.861000,463.180000,106.809000,463.180000,106.809000C464.086000,104.259000,467.294000,104.259000,468.201000,106.809000Z"
                      fill="rgb(255,255,255)"
                      id="ea8wrxrf1xjv26"
                      stroke="none"
                      stroke-width="1"
                    />
                    <g
                      id="ea8wrxrf1xjv27"
                    >
                      <path
                        d="M175.242000,67.050000C175.396000,77.627000,158.782000,77.627000,158.938000,67.049000C158.783000,56.472000,175.398000,56.472000,175.242000,67.050000Z"
                        fill="rgb(255,101,132)"
                        id="ea8wrxrf1xjv28"
                        stroke="none"
                        stroke-width="1"
                      />
                      <path
                        d="M390.760000,52.927000C390.676000,71.619000,362.255000,71.617000,362.174000,52.926000C362.258000,34.235000,390.679000,34.237000,390.760000,52.927000Z"
                        fill="rgb(255,101,132)"
                        id="ea8wrxrf1xjv29"
                        stroke="none"
                        stroke-width="1"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                class="c7"
                color="text"
                id="ea8wrxrf1xjv1"
                viewBox="0 0 1 1"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="ea8wrxrf1xjv2"
                >
                  <g
                    id="ea8wrxrf1xjv3"
                  >
                    <g
                      id="ea8wrxrf1xjv4"
                    >
                      <g
                        id="ea8wrxrf1xjv5"
                      >
                        <path
                          d="M330.088000,501.932000L183.678000,501.932000C150.230000,501.932000,122.688000,479.288000,121.134000,450.509000L112.013000,338.105000L402.515000,338.105000L392.622000,450.717000C390.942000,479.410000,363.443000,501.932000,330.088000,501.932000Z"
                          fill="rgb(255,255,255)"
                          id="ea8wrxrf1xjv6"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M343.707000,338.105000L335.817000,427.921000C334.478000,450.805000,312.546000,468.768000,285.943000,468.768000L169.170000,468.768000C142.500000,468.768000,120.539000,450.717000,119.288000,427.774000C118.221000,467.886000,135.775000,500.677000,183.679000,501.932000C183.677000,501.932000,330.088000,501.932000,330.088000,501.932000C363.443000,501.932000,390.942000,479.410000,392.621000,450.718000C392.621000,450.718000,402.514000,338.106000,402.514000,338.106000L343.707000,338.106000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv7"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M389.607000,196.483000C367.995000,252.921000,295.289000,223.075000,319.568000,167.729000C330.599000,140.858000,368.866000,123.508000,377.233000,126.943000C385.601000,130.378000,400.639000,169.611000,389.607000,196.483000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv8"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M127.457000,194.817000C148.844000,250.666000,220.792000,221.131000,196.765000,166.363000C185.849000,139.773000,147.982000,122.603000,139.701000,126.002000C131.421000,129.401000,116.540000,168.225000,127.457000,194.817000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv9"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M402.846000,347.599000L111.682000,347.599000C33.752000,339.387000,142.490000,162.115000,257.264000,173.788000C372.063000,162.129000,480.764000,339.388000,402.846000,347.599000Z"
                          fill="rgb(83,204,251)"
                          id="ea8wrxrf1xjv10"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M429.164000,321.757000C416.487000,232.751000,333.594000,165.744000,241.721000,174.473000C307.449000,180.881000,360.217000,231.521000,369.864000,296.250000C371.553000,307.585000,361.350000,317.637000,348.082000,317.637000L107.106000,317.637000C98.825000,317.637000,91.738000,313.721000,87.991000,308.021000C81.234000,326.674000,87.196000,347.104000,111.682000,347.598000C111.680000,347.598000,402.845000,347.598000,402.845000,347.598000C418.877000,347.599000,431.205000,335.453000,429.164000,321.757000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv11"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M292.137000,184.490000C295.196000,166.575000,293.740000,149.709000,283.748000,135.079000C287.647000,115.535000,285.747000,99.259000,275.350000,87.603000C275.337000,86.043000,265.827000,-7.392000,254.979000,13.087000C248.840000,34.358000,244.419000,54.394000,244.823000,70.968000C236.845000,82.663000,233.974000,95.567000,237.954000,110.123000C230.943000,122.179000,227.853000,135.609000,230.774000,151.050000C221.526000,163.314000,223.558000,176.778000,223.990000,183.041000C226.724000,204.338000,289.323000,204.596000,292.137000,184.490000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv12"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M292.137000,184.490000C294.219000,171.685000,294.343000,159.242000,290.219000,147.966000C297.046000,180.278000,227.989000,178.237000,228.829000,153.920000C221.839000,165.358000,223.592000,177.264000,223.991000,183.042000C226.724000,204.338000,289.323000,204.596000,292.137000,184.490000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv13"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M203.017000,313.806000C197.918000,318.905000,189.650000,318.905000,184.551000,313.806000L160.630000,289.885000C155.531000,284.786000,155.531000,276.518000,160.630000,271.419000C165.729000,266.320000,173.997000,266.320000,179.096000,271.419000L203.017000,295.340000C208.116000,300.439000,208.116000,308.706000,203.017000,313.806000Z"
                          fill="rgb(255,255,255)"
                          id="ea8wrxrf1xjv14"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M236.402000,286.138000C232.482000,280.085000,234.211000,272,240.263000,268.080000L268.657000,249.690000C274.710000,245.770000,282.795000,247.499000,286.715000,253.551000C290.635000,259.604000,288.906000,267.689000,282.854000,271.609000L254.459000,289.999000C248.407000,293.920000,240.322000,292.191000,236.402000,286.138000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv15"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M336.115000,308.762000C329.312000,306.069000,326.480000,297.481000,329.264000,291.606000C329.673000,290.678000,342.549000,260.594000,342.708000,260.257000C345.639000,253.813000,353.199000,250.864000,359.737000,253.667000C366.540000,256.360000,369.372000,264.948000,366.588000,270.823000C366.179000,271.751000,353.303000,301.835000,353.144000,302.172000C350.213000,308.616000,342.654000,311.565000,336.115000,308.762000Z"
                          fill="rgb(255,255,255)"
                          id="ea8wrxrf1xjv16"
                          stroke="none"
                          stroke-width="1"
                        />
                      </g>
                      <g
                        id="ea8wrxrf1xjv17"
                      >
                        <g
                          id="ea8wrxrf1xjv18"
                        >
                          <path
                            d="M439.122000,320.273000C433.390000,281.811000,415.462000,246.171000,388.196000,218.509000C392.415000,213.387000,396.054000,207.291000,398.921000,200.307000C408.793000,174.422000,402.514000,131.584000,381.058000,117.628000C353.724000,112.428000,316.096000,142.087000,307.780000,170.819000C306.403000,170.426000,305.023000,170.037000,303.637000,169.676000C303.808000,156.178000,300.700000,143.916000,294.341000,133.053000C297.691000,112.601000,294.604000,96.023000,285.146000,83.674000C283.415000,62.214000,279.103000,38.341000,271.983000,10.823000C270.626000,4.516000,265.061000,-0.005000,258.564000,0C252.129000,0.004000,246.618000,4.446000,245.201000,10.657000C238.116000,35.272000,234.840000,53.178000,234.735000,68.028000C226.880000,80.795000,224.392000,94.442000,227.285000,108.685000C220.786000,121.363000,218.418000,134.785000,220.222000,148.691000C215.930000,155.720000,214.248000,162.822000,213.686000,168.960000C212.043000,169.360000,210.408000,169.789000,208.778000,170.234000C200.988000,141.435000,163.204000,111.456000,135.877000,116.686000C109.910000,133.799000,105.842000,191.826000,128.485000,216.353000C100.155000,243.090000,39.977000,340.390000,103.429000,356.834000C103.429000,356.834000,111.086000,451.193000,111.086000,451.193000C116.124000,542.152000,272.687000,504.798000,330.088000,512.003000C419.524000,511.211000,402.558000,415.701000,410.972000,356.856000C427.961000,353.841000,442.048000,337.601000,439.122000,320.273000ZM328.882000,171.553000C337.272000,152.547000,359.329000,139.886000,373.235000,136.682000C380.886000,148.773000,387.671000,173.202000,380.293000,192.659000C378.340000,197.416000,375.974000,201.526000,373.297000,204.953000C359.165000,193.450000,343.488000,184.211000,326.828000,177.409000C327.389000,175.487000,328.069000,173.534000,328.882000,171.553000ZM254.870000,71.454000C254.665000,61.885000,256.102000,51.188000,258.338000,40.678000C261.095000,53.772000,263.076000,65.908000,264.317000,77.274000L254.866000,71.628000C254.870000,71.571000,254.868000,71.512000,254.870000,71.454000ZM249.684000,82.606000C268.875000,93,277.585000,99.044000,275.114000,125.136000L247.953000,109.028000C245.501000,99.730000,245.478000,90.995000,249.684000,82.606000ZM243.869000,120.654000L274.377000,138.747000C280.803000,148.842000,284.461000,159.474000,283.382000,172.840000L240.735000,149.599000C238.770000,139.468000,239.753000,129.895000,243.869000,120.654000ZM236.417000,161.004000L280.231000,184.881000C275.321000,190.231000,238.486000,191.347000,234.001000,181.883000C233.556000,175.879000,232.629000,168.818000,236.417000,161.004000ZM135.570000,156.596000C137.869000,146.204000,141.587000,138.654000,143.705000,135.754000C159.746000,138.401000,187.149000,159.217000,189.663000,176.613000C173.201000,183.116000,157.677000,191.996000,143.609000,203.064000C133.617000,189.937000,131.529000,175.417000,135.570000,156.596000ZM183.678000,491.864000C155.402000,491.856000,132.300000,473.344000,131.169000,449.695000C131.169000,449.695000,123.701000,357.667000,123.701000,357.667000L202.205000,357.667000L208.083000,491.863000L183.678000,491.863000ZM297.080000,491.864000L220.177000,491.864000L214.299000,357.668000L302.958000,357.668000ZM382.592000,449.837000C380.230000,484.611000,342.231000,495.101000,309.173000,491.864000L315.051000,357.668000L390.689000,357.668000ZM416.516000,331.789000C413.417000,335.385000,408.306000,337.531000,402.845000,337.531000L111.681000,337.531000C106.220000,337.531000,101.109000,335.385000,98.010000,331.789000C92.375000,265.666000,155.307000,205.601000,215.324000,189.404000C222.330000,215.008000,294.100000,216.150000,301.098000,189.924000C360.169000,206.652000,422.235000,266.388000,416.516000,331.789000Z"
                            fill="rgb(0,0,0)"
                            id="ea8wrxrf1xjv19"
                            stroke="none"
                            stroke-width="1"
                          />
                          <path
                            d="M193.783000,323.662000C181.998000,325.420000,164.310000,300.339000,156.356000,294.156000C152.750000,290.548000,150.763000,285.752000,150.763000,280.651000C150.175000,264.167000,172.124000,255.066000,183.367000,267.147000C194.162000,280.042000,225.866000,298.792000,207.288000,318.077000C203.565000,321.800000,198.674000,323.662000,193.783000,323.662000ZM203.017000,313.806000L203.027000,313.806000ZM169.863000,273.638000C163.870000,273.392000,160.432000,281.487000,164.902000,285.613000C164.902000,285.613000,188.823000,309.534000,188.823000,309.534000C195.162000,316.049000,205.277000,305.963000,198.746000,299.610000C195.559000,297.503000,174.160000,272.176000,169.863000,273.638000Z"
                            fill="rgb(0,0,0)"
                            id="ea8wrxrf1xjv20"
                            stroke="none"
                            stroke-width="1"
                          />
                          <path
                            d="M247.392000,298.133000C241.126000,298.134000,234.984000,295.061000,231.331000,289.422000L231.332000,289.422000C217.070000,266.925000,252.267000,254.792000,265.374000,244.619000C286.350000,231.135000,307.058000,262.986000,286.137000,276.680000C278.997000,280.180000,255.798000,299.369000,247.392000,298.133000ZM275.742000,253.630000C274.117000,252.097000,245.466000,272.369000,243.547000,273.150000C240.339000,275.134000,239.356000,279.731000,241.471000,282.854000L241.472000,282.854000C243.576000,286.102000,247.928000,287.032000,251.175000,284.929000L279.570000,266.539000C285.407000,263.008000,282.533000,253.412000,275.742000,253.630000Z"
                            fill="rgb(0,0,0)"
                            id="ea8wrxrf1xjv21"
                            stroke="none"
                            stroke-width="1"
                          />
                          <path
                            d="M341.234000,315.859000C338.727000,315.859000,336.181000,315.362000,333.734000,314.314000C324.216000,310.463000,319.465000,298.587000,323.707000,289.234000C328.971000,280.354000,335.701000,250.952000,347.500000,247.935000C362.588000,241.272000,379.189000,258.269000,372.144000,273.195000C365.487000,284.934000,359.734000,317.542000,341.234000,315.859000ZM338.496000,303.210000C341.933000,304.767000,346.294000,303.024000,347.709000,299.526000C347.709000,299.526000,361.040000,268.434000,361.040000,268.434000C362.598000,264.999000,360.854000,260.634000,357.356000,259.220000C353.920000,257.663000,349.557000,259.406000,348.142000,262.904000C348.142000,262.904000,334.811000,293.996000,334.811000,293.996000C333.287000,297.552000,334.940000,301.685000,338.496000,303.210000Z"
                            fill="rgb(0,0,0)"
                            id="ea8wrxrf1xjv22"
                            stroke="none"
                            stroke-width="1"
                          />
                        </g>
                        <path
                          d="M145.003000,259.609000C117.254000,252.783000,154.660000,224.300000,164.389000,218.470000C175.658000,211.878000,185.777000,229.720000,174.308000,235.994000C168.156000,239.476000,158.062000,248.771000,153.131000,255.495000C151.158000,258.184000,148.102000,259.609000,145.003000,259.609000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv23"
                          stroke="none"
                          stroke-width="1"
                        />
                        <path
                          d="M191.707000,224.046000C176.623000,222.604000,179.682000,203.449000,193.951000,202.933000C211.777000,201.971000,209.442000,224.216000,191.707000,224.046000Z"
                          fill="rgb(255,101,132)"
                          id="ea8wrxrf1xjv24"
                          stroke="none"
                          stroke-width="1"
                        />
                      </g>
                    </g>
                    <path
                      d="M61.132000,43.616000C62.216000,45.200000,69.438000,70.528000,71.816000,70.237000C104.053000,84.342000,104.165000,83.204000,71.816000,97.339000C69.496000,97.004000,62.132000,122.468000,61.131000,123.959000C59.909000,127.398000,55.585000,127.398000,54.362000,123.959000L45.707000,99.623000C44.306000,93.801000,10.473000,89.041000,22.055000,79.978000C23.674000,78.694000,46.065000,70.545000,45.707000,67.952000C45.707000,67.952000,54.362000,43.615000,54.362000,43.615000C55.585000,40.178000,59.909000,40.178000,61.132000,43.616000Z"
                      fill="rgb(255,255,255)"
                      id="ea8wrxrf1xjv25"
                      stroke="none"
                      stroke-width="1"
                    />
                    <path
                      d="M468.201000,106.809000C469.006000,107.984000,474.362000,126.772000,476.127000,126.556000C499.991000,136.950000,500.075000,136.244000,476.127000,146.660000C474.405000,146.412000,468.944000,165.300000,468.201000,166.407000C467.294000,168.958000,464.087000,168.958000,463.180000,166.407000C463.180000,166.407000,456.760000,148.355000,456.760000,148.355000C455.684000,143.983000,430.683000,140.591000,439.215000,133.782000C440.417000,132.829000,457.025000,126.785000,456.760000,124.861000C456.760000,124.861000,463.180000,106.809000,463.180000,106.809000C464.086000,104.259000,467.294000,104.259000,468.201000,106.809000Z"
                      fill="rgb(255,255,255)"
                      id="ea8wrxrf1xjv26"
                      stroke="none"
                      stroke-width="1"
                    />
                    <g
                      id="ea8wrxrf1xjv27"
                    >
                      <path
                        d="M175.242000,67.050000C175.396000,77.627000,158.782000,77.627000,158.938000,67.049000C158.783000,56.472000,175.398000,56.472000,175.242000,67.050000Z"
                        fill="rgb(255,101,132)"
                        id="ea8wrxrf1xjv28"
                        stroke="none"
                        stroke-width="1"
                      />
                      <path
                        d="M390.760000,52.927000C390.676000,71.619000,362.255000,71.617000,362.174000,52.926000C362.258000,34.235000,390.679000,34.237000,390.760000,52.927000Z"
                        fill="rgb(255,101,132)"
                        id="ea8wrxrf1xjv29"
                        stroke="none"
                        stroke-width="1"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div
            class="c2"
          >
            <div>
              <button
                class="c8"
                scale="sm"
              >
                0xbd...c980
              </button>
            </div>
          </div>
        </nav>
        <div
          class="c9"
        >
          <div
            class="c10"
          >
            <div
              class="c11"
            >
              <div
                class="c12"
                role="button"
              >
                <a
                  aria-current="page"
                  class="active"
                  href="/"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Home
                  </div>
                </a>
              </div>
              <div
                class="c15"
                role="button"
              >
                <a
                  href="https://swap.easybake.finance/#/swap"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Swap
                  </div>
                </a>
              </div>
              <div
                class="c15"
                role="button"
              >
                <a
                  href="/bakery"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="3 25 500 510"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m470.797 256.005c0-39.63-26.606-74.153-63.692-85.05-3.867-42.69-39.857-76.256-83.538-76.256-3.805 0-7.587.271-11.33.78-7.301-16.886-21.99-29.848-39.97-34.809 4.088-22.114 16.163-29.072 23.762-31.243 7.966-2.275 12.578-10.578 10.302-18.544-2.275-7.964-10.576-12.58-18.543-10.302-17.673 5.049-31.173 17.226-39.04 35.213-3.621 8.279-5.621 16.77-6.701 24.29-18.87 4.417-34.404 17.575-42.083 34.963-2.52-.228-5.052-.348-7.588-.348-43.311 0-79.061 32.996-83.433 75.17-16.866 4.076-32.227 13.048-44.199 25.994-15.178 16.414-23.537 37.772-23.537 60.142 0 35.595 21.093 66.352 51.434 80.442l29.589 125.121c7.023 29.697 33.241 50.437 63.756 50.437h140.03c30.516 0 56.733-20.74 63.756-50.437l29.59-125.121c30.342-14.091 51.435-44.847 51.435-80.442zm-214.795-167.544c17.225 0 31.238 14.014 31.238 31.238s-14.014 31.238-31.238 31.238c-17.225 0-31.238-14.014-31.238-31.238s14.014-31.238 31.238-31.238zm-104.577 366.202-26.044-110.131c1.48.074 2.969.112 4.466.112 8.236 0 16.274-1.144 23.956-3.285l33.261 140.645h-1.077c-16.542.001-30.755-11.243-34.562-27.341zm119.447 27.342v-138.871c18.108-3.393 34.765-12.383 47.549-25.582 3.728 3.849 7.788 7.337 12.116 10.437l-36.423 154.015h-23.242zm-30 0h-22.981l-36.401-153.926c3.808-2.737 7.419-5.769 10.776-9.112 13.178 13.124 30.117 21.722 48.606 24.6zm119.707-27.342c-3.807 16.099-18.02 27.342-34.562 27.342h-1.077l33.271-140.689c7.706 2.178 15.754 3.329 23.946 3.329 1.498 0 2.987-.038 4.467-.112zm21.579-140.019c-20.835 0-40.284-11.225-50.76-29.296-2.683-4.629-7.627-7.478-12.977-7.478s-10.294 2.849-12.977 7.478c-10.476 18.07-29.925 29.296-50.76 29.296-20.309 0-38.893-10.299-49.71-27.55-2.744-4.375-7.544-7.031-12.708-7.031s-9.964 2.656-12.708 7.031c-5.435 8.668-12.832 15.578-21.422 20.311-.519.238-1.017.508-1.498.799-8.137 4.178-17.275 6.439-26.791 6.439-32.334 0-58.64-26.306-58.64-58.64 0-14.795 5.527-28.921 15.563-39.773 9.983-10.797 23.516-17.415 38.104-18.638 8.108-.679 14.197-7.698 13.723-15.821-.07-1.198-.104-2.241-.104-3.191 0-29.711 24.171-53.882 53.882-53.882.873 0 1.745.041 2.616.083 2.594 31.395 28.957 56.155 61.011 56.155 31.945 0 58.24-24.591 60.986-55.835 2.174-.266 4.369-.403 6.578-.403 29.711 0 53.882 24.171 53.882 53.882 0 1.024-.042 2.146-.131 3.532-.505 7.846 5.135 14.751 12.923 15.823 28.822 3.967 50.556 28.932 50.556 58.068.001 32.336-26.304 58.641-58.638 58.641z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Bakery
                  </div>
                  <div
                    class="c16 c17"
                    color="failure"
                    font-size="14px"
                  >
                    LIVE
                  </div>
                </a>
              </div>
              <div
                class="c15"
                role="button"
              >
                <a
                  href="/syrup"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Pools
                  </div>
                </a>
              </div>
              <div
                class="c15"
                role="button"
              >
                <a
                  href="/lottery"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Lottery
                  </div>
                </a>
              </div>
              <div
                class="c15"
                role="button"
              >
                <a
                  href="/nft"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    NFT
                  </div>
                </a>
              </div>
              <div
                class="c15"
                role="button"
              >
                <a
                  href="/competition"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5H17C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Team Battle
                  </div>
                  <div
                    class="c18 c19"
                    color="warning"
                    font-size="14px"
                  >
                    SOON
                  </div>
                </a>
              </div>
              <div
                class="c20"
              >
                <div
                  class="c12 rainbow"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Profile & Teams
                  </div>
                  <div
                    class="c16 c17"
                    color="failure"
                    font-size="14px"
                  >
                    LIVE
                  </div>
                  <svg
                    class="c7"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z"
                    />
                  </svg>
                </div>
                <div
                  class="c21"
                />
              </div>
              <div
                class="c20"
              >
                <div
                  class="c15"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Info
                  </div>
                  <svg
                    class="c7"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="c22"
                />
              </div>
              <div
                class="c20"
              >
                <div
                  class="c15"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    IFO
                  </div>
                  <svg
                    class="c7"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="c22"
                />
              </div>
              <div
                class="c20"
              >
                <div
                  class="c15"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    More
                  </div>
                  <svg
                    class="c7"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="c22"
                />
              </div>
            </div>
            <div
              class="c23"
            >
              <button
                class="c24 c25"
                scale="md"
              >
                <svg
                  class="c7"
                  color="text"
                  viewBox="0 0 24 24"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="c26"
          >
            body
          </div>
          <div
            class="c27 c28"
            role="presentation"
          />
        </div>
      </div>
    </DocumentFragment>
  `);
});

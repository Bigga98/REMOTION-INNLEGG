import React from "react";
import { StandardFrame } from "./StandardFrame";
import { HeroFrame } from "./HeroFrame";
import { SideBySideFrame } from "./SideBySideFrame";
import { StackedFrame } from "./StackedFrame";
import { ShowcaseFrame } from "./ShowcaseFrame";
export { ChatIllustrasjon } from "./ChatIllustrasjon";
export { GAStackedChart } from "./GAStackedChart";

// === Showcase (gradient-bakgrunn + bilde fra bunn) ===
export const FrameLaerdomShowcase = () => <ShowcaseFrame imageSrc="laerdom-fullpage.png" />;

// === Standard (blurret bakgrunn + bilde fra bunn) ===
export const Frame0Apps = () => <StandardFrame imageSrc="04-apps.png" />;
export const Frame3Support = () => <StandardFrame imageSrc="15-support-app.png" />;
export const Frame4Codev = () => <StandardFrame imageSrc="codev-design.png" />;
export const Frame5Crypto = () => <StandardFrame imageSrc="crypto-currency.png" />;
export const Frame6Investment = () => <StandardFrame imageSrc="investment-bank.png" />;
export const Frame7Landing = () => <StandardFrame imageSrc="landing-page.png" />;
export const Frame9Erasebg = () => <StandardFrame imageSrc="erasebg-transformed.png" />;
export const Frame10Kvarnstrands = () => <StandardFrame imageSrc="screencapture-kvarnstrands.png" />;
export const Frame11Startup = () => <StandardFrame imageSrc="startup.png" />;

// === Hero (blurret bakgrunn + sentrert bilde) ===
export const Frame1Creative = () => <HeroFrame imageSrc="03-creative-company.png" />;
export const Frame2Spa = () => <HeroFrame imageSrc="06-spa-beauty.png" />;
export const Frame8Skjermbilde = () => <HeroFrame imageSrc="skjermbilde.png" />;
export const FrameElvemark = () => <HeroFrame imageSrc="elvemark-snapshot.png" />;
export const FrameInspirasjonsbilde = () => <HeroFrame imageSrc="inspirasjonsbilde.png" />;

// === Side-by-side (lys bakgrunn + to bilder med perspektiv) ===
export const Frame12SbsAppsLanding = () => (
  <SideBySideFrame leftSrc="04-apps.png" rightSrc="landing-page.png" />
);
export const Frame13SbsAppsSupport = () => (
  <SideBySideFrame leftSrc="04-apps.png" rightSrc="15-support-app.png" />
);
export const Frame14SbsCryptoInvest = () => (
  <SideBySideFrame leftSrc="crypto-currency.png" rightSrc="investment-bank.png" shadowBottom />
);
export const Frame15SbsCodevStartup = () => (
  <SideBySideFrame leftSrc="codev-design.png" rightSrc="startup.png" shadowBottom />
);

// === Stacked (blurret bakgrunn + 3 overlappende kort) ===
export const Frame16Stacked = () => (
  <StackedFrame
    bgSrc="04-apps.png"
    leftSrc="landing-page.png"
    centerSrc="04-apps.png"
    rightSrc="crypto-currency.png"
  />
);

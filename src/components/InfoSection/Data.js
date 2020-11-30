import AboutSvg from "../../images/about.svg";
import ManSvg from "../../images/man.svg";
import CallSvg from "../../images/call.svg";

export const hero = {
  id: "home",
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: "Hello World.",
  headLine: "I AM KEVIN",
  description: "Full Stack Web Developer / Python Automation Specialist.",
  buttonLabel: "Contact",
  button: true,
  buttonDirect: "contact",
  button2: true,
  buttonLabel2: "Download CV",
  buttonLabel2dark: false,
  imgStart: false,
  img: ManSvg,
  alt: "Man",
  dark: true,
  dark2: true,
  primary: true,
  primary2: false,
  darkText: false,
};

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "About Me",
  headLine: "LET ME INTRODUCE MYSELF",
  description:
    "I'm a self taught coder whom started off as an SAP consultant whom turned into Python Engineer and Full Stack Web Developer",
  buttonLabel: "Get Started",
  button: false,
  button2: true,
  buttonLabel2: "Download CV",
  dark2: true,
  primary2: true,
  buttonLabel2dark: false,
  imgStart: true,
  img: AboutSvg,
  alt: "About",
  dark: true,
  primary: true,
  darkText: true,
};

export const contact = {
  id: "contact",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Contact Me",
  headLine: "+65 96588462",
  description: "lauxianlun@gmail.com",
  // buttonLabel: "Get Started",
  button: false,
  button2: false,
  // buttonLabel2: "Download CV",
  // dark2: true,
  // primary2: true,
  // buttonLabel2dark: false,
  imgStart: true,
  img: CallSvg,
  alt: "Call",
  dark: true,
  primary: true,
  darkText: false,
};
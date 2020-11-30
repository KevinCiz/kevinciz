import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMediaContainer,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterScroll,
} from "./FooterElements";
import { FaGithub , FaYoutube, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Know Me</FooterLinkTitle>
              <FooterScroll to="about" smooth={true} duration={500} spy={true} exact="true">
                About
              </FooterScroll>
              <FooterScroll to="experience" smooth={true} duration={500} spy={true} exact="true">
                Experience
              </FooterScroll>
              <FooterScroll to="skills" smooth={true} duration={500} spy={true} exact="true">
                Skills
              </FooterScroll>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink href="https://linkedin.com/in/klxl96" target="_blank">
                Linkedin
              </FooterLink>
              <FooterLink href="https://github.com/KevinCiz" target="_blank">
                Github
              </FooterLink>
              <FooterLink
                href="https://www.youtube.com/channel/UCKn6ygkfQKWaQ3xQxqAvviw?view_as=subscriber"
                target="_blank">
                Youtube
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMediaContainer>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Kevin Lau Xian Lun
            </SocialLogo>
            <WebsiteRights>Kevin © {new Date().getFullYear()} All rights reserverd.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://linkedin.com/in/klxl96"
                target="_blank"
                aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/KevinCiz"
                target="_blank"
                aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UCKn6ygkfQKWaQ3xQxqAvviw?view_as=subscriber"
                target="_blank"
                aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMediaContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

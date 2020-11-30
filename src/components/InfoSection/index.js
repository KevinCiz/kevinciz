import React from "react";
import { Button, ButtonCV } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  id,
  lightBg,
  lightText,
  lightTextDesc,
  topLine,
  headLine,
  description,
  buttonLabel,
  button2,
  buttonLabel2,
  buttonLabel2dark,
  imgStart,
  img,
  alt,
  dark,
  primary,
  darkText,
  dark2,
  primary2,
  button,
  buttonDirect,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {button ? (
                    <Button
                      to={buttonDirect}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      dark={dark ? 1 : 0}
                      primary={primary ? 1 : 0}>
                      {buttonLabel}
                    </Button>
                  ) : null}

                  {button2 ? (
                    <ButtonCV
                      dark={dark2 ? 1 : 0}
                      primary={primary2 ? 1 : 0}
                      href="https://drive.google.com/file/d/1e1HJiYVgLKdW5nE6AL8GTuyacW_zSuT_/view?usp=sharing"
                      target="_blank">
                      {buttonLabel2}
                    </ButtonCV>
                  ) : null}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

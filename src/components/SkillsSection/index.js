import React from "react";

import CodeReview from "../../images/code_review.svg";

import {
  SkillsContainer,
  SkillsWrapper,
  SkillsRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
  SkillsData,
  SkillsNames,
  SkillsName,
  SkillsIcon,
  SkillsPercentage,
  SkillsBar,
  SkillsH1,
  SkillsInfo,
  TopLine,
} from "./SkillsElements";

const Skills = () => {
  return (
    <SkillsContainer id="skills" lightBg={true}>
      <SkillsWrapper>
        <SkillsH1>Skills</SkillsH1>
        <SkillsRow>
          <Column1>
            <TopLine>Ratings</TopLine>
            <SkillsData>
              <SkillsNames>
                <SkillsInfo>
                  <SkillsIcon>
                    <img
                      src="https://img.icons8.com/color/48/000000/python.png"
                      width="24"
                      height="24"
                      alt="python"
                    />
                  </SkillsIcon>
                  <SkillsName>Python</SkillsName>
                </SkillsInfo>
                <SkillsPercentage>85%</SkillsPercentage>
                <SkillsBar skillValue={85}></SkillsBar>
              </SkillsNames>
            </SkillsData>
            <SkillsData>
              <SkillsNames>
                <SkillsInfo>
                  <SkillsIcon>
                    <img
                      src="https://img.icons8.com/color/48/000000/react-native.png"
                      width="24"
                      height="24"
                      alt="reactjs"
                    />
                  </SkillsIcon>
                  <SkillsName>React</SkillsName>
                </SkillsInfo>
                <SkillsPercentage>80%</SkillsPercentage>
                <SkillsBar skillValue={80}></SkillsBar>
              </SkillsNames>
            </SkillsData>
            <SkillsData>
              <SkillsNames>
                <SkillsInfo>
                  <SkillsIcon>
                    <img
                      src="https://img.icons8.com/color/48/000000/nodejs.png"
                      width="24"
                      height="24"
                      alt="nodejs"
                    />
                  </SkillsIcon>
                  <SkillsName>Nodejs</SkillsName>
                </SkillsInfo>
                <SkillsPercentage>70%</SkillsPercentage>
                <SkillsBar skillValue={70}></SkillsBar>
              </SkillsNames>
            </SkillsData>
            <SkillsData>
              <SkillsNames>
                <SkillsInfo>
                  <SkillsIcon>
                    <img
                      src="https://img.icons8.com/color/48/000000/golang.png"
                      width="24"
                      height="24"
                      alt="golang"
                    />
                  </SkillsIcon>
                  <SkillsName>Golang</SkillsName>
                </SkillsInfo>
                <SkillsPercentage>60%</SkillsPercentage>
                <SkillsBar skillValue={60}></SkillsBar>
              </SkillsNames>
            </SkillsData>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={CodeReview} alt="Code Review" />
            </ImgWrap>
          </Column2>
        </SkillsRow>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;

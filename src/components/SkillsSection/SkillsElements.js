import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  height: 800px;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 700px;
    width: 100%;
  }
`;

export const SkillsH1 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: black;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 10%;
  }
`;

export const SkillsWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

export const SkillsRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const SkillsData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-weight: 600;
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 25px rgba(14, 36, 49, 0.15);

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: context-menu;
  }
`;

export const SkillsNames = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SkillsInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const SkillsIcon = styled.div`
  font-size: 2rem;
  margin-right: 0.5rem;
`;

export const SkillsName = styled.div``;

export const SkillsPercentage = styled.div`
  color: #6c63ff;
  text-align: right;
`;

export const SkillsBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #7b7fda;
  height: 0.25rem;
  border-radius: 0.5rem;
  z-index: 10;
  width: ${({ skillValue }) => (skillValue ? `${skillValue}%` : 0)};
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const TopLine = styled.p`
  color: #7b7fda;
  font-size: 20px;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

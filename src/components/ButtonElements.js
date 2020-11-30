import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Button = styled(LinkScroll)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: 700;
  margin-right: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ primary }) => (primary ? "white" : "#7b7fda")};
    /* background: ${({ primary }) => (primary ? "#fff" : null)}; */
  }
`;

export const ButtonCV = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "white")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: 700;
  margin-right: 20px;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ primary }) => (primary ? "white" : "#7b7fda")};
  }
`;

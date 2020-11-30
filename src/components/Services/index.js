import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import Icon1 from "../../images/react.svg";
import Icon2 from "../../images/code.svg";
import Icon3 from "../../images/project.svg";

const Services = () => {
  return (
    <ServicesContainer id="experience">
      <ServicesH1>Experience</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reactjs, Nodejs</ServicesH2>
          <ServicesP>Full understanding of React Hook Cycle</ServicesP>
          <ServicesP>Experience in both FrontEnd and Backend Architecture</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Coding Lanugages</ServicesH2>
          <ServicesP>Python</ServicesP>
          <ServicesP>Javascript Frameworks (Reactjs, Nodejs)</ServicesP>
          <ServicesP>Golang</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Project Completed</ServicesH2>
          <ServicesP>Dynamic Dashboard for different verticals.</ServicesP>
          <ServicesP>Merchant Statement Platform for Invoices & Orders Breakdown</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

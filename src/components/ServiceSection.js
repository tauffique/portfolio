import React from 'react';
import styled from 'styled-components';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import SectionTitle from './SectionTitle';

import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;
export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="services" subheading="what i will do for you" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc=" I am a freelancer hfytfuyhiuhui fdyr6r7 r7rt76t Looking for something
          fun to watch now or later t"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="digital Marketing"
            desc=" I am a freelancer hfytfuyhiuhui fdyr6r7 r7rt76t Looking for something
        fun to watch now or later t"
          />

          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="web development"
            desc=" I am a freelancer hfytfuyhiuhui fdyr6r7 r7rt76t Looking for something
        fun to watch now or later t"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}

import React from 'react';
import { MdCode, MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  .para {
    margin-top: 2rem;
  }
`;
export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'web design',
  desc = 'I am a freelancer hfytfuyhiuhui fdyr6r7 r7rt76t Looking for fun to watch now or later t',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>
        I am a freelancer hfytfuyhiuhui fdyr6r7 r7rt76t Looking for something
        fun to watch now or later t
      </PText>
    </ItemStyles>
  );
}

import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 500px;
  }
  .map__card {
    position: absolute;
    right: 33%;
    bottom: 0.2%;
    padding: 2rem;
    background-color: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px;) {
    background-position: 50% center;
  }
  @media only screen and (max-width: 400x;) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Max Planck Ring 7,98693 Ilmenau,Germany</PText>
          <a
            href="https://www.google.de/maps/place/Max-Planck-Ring+7,+98693+Ilmenau/@50.681364,10.9309784,17z/data=!3m1!4b1!4m5!3m4!1s0x47a38d4eb3c8d1af:0x8fbeb2e9e2c790a4!8m2!3d50.681364!4d10.9331671"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
          >
            Open in Google Map
          </a>
        </div>
      </div>{' '}
    </MapStyles>
  );
}

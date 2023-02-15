import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">Hi, I am Umar</p>
            <h2 className="about__heading">A freelancer Digital Marketer</h2>
            <div className="about__info">
              <PText>
                As a creative and passionate Marketer, I can bring knowledge,
                experience. I look forward to delivering successful marketing
                campaigns for clients.
              </PText>
            </div>
            <Button
              btnText="Download Resume"
              btnLink="https://drive.google.com/drive/u/0/my-drive"
            />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Umar img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Little Flower School,Maharajganj,India']}
            />
            <AboutInfoItem
              title="Bachelor"
              items={['Dr. A.P.J. Abdul Kalam Technical University,India']}
            />
            <AboutInfoItem
              title="Master"
              items={['Technische Universitat Ilmenau,Germany']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skill</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'BOOTSTRAP', 'REACT']}
            />
            <AboutInfoItem
              title="Digital Marketing"
              items={['Google Ads', 'Google Analytics 4']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}

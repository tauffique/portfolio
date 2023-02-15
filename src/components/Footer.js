import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const Footerstyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--deep-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        .div {
          margin-top: 0;
          text-align: center;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <Footerstyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Mohammad Tauffique Umar</h1>
          <PText>
            A freelancer in the field of digital marketing and web development
            and also have certification in Google Ads and Google Analytics from
            Google Skill.Currently doing my masters in Technische Universitat
            Ilmenau.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+491746344155',
                path: 'tel: +491746344155',
              },
              {
                title: 'tauffique@icloud.com',
                path: 'mailto:tauffique@icloud.com',
              },
              {
                title: 'Max Palnck Ring 7, Ilmenau,98693',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/profile.php?id=100087215477233',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/tauffique/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/utauffiq/?next=%2F',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>@ 2023 | UmarPfolio | All right reserved |</PText>
        </div>
      </div>
    </Footerstyles>
  );
}

// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

// Animation d'entrée
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledFooter = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 6rem 0 4rem;
  margin-top: 8rem;
  position: relative;
  box-shadow: 0 -4px 20px rgba(255, 255, 255, 0.1);
  border-top: 2px solid #ff6b0033;
  animation: ${slideUp} 0.8s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #ff6b00, transparent);
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2.5rem;
    }
  }

  .footer-logo {
    position: relative;
    
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #ff6b00;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    p {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }

  .footer-links {
    display: grid;
    gap: 1.2rem;
    padding: 0 1rem;

    a {
      color: white;
      text-decoration: none;
      font-size: 1.1rem;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background: #ff6b00;
        transition: width 0.3s ease;
      }

      &:hover {
        color: #ff6b00;
        transform: translateX(8px);
        background: rgba(255, 107, 0, 0.05);

        &::before {
          width: 100%;
        }
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  a {
    color: white;
    font-size: 1.4rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    &:hover {
      color: #ff6b00;
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.1);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Blogs City</h2>
          <p>© 2025 Tous droits réservés</p>
          <p style={{ marginTop: '1rem', fontSize: '0.9em' }}>
            <a href="/privacy" style={{ color: 'rgba(255,255,255,0.7)' }}>Politique de confidentialité</a>
          </p>
        </div>

        <div className="footer-links">
          <a href="/">Accueil</a>
          <a href="/about">À propos</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Conditions d&apos;utilisation</a>
        </div>

        <div className="footer-socials">
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>
            Suivez-nous
          </h3>
          <SocialIconsContainer>
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
          </SocialIconsContainer>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const StyledContainer = styled.div`
  background-color: #f7f7f7;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #ff6b00;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ $isMenuOpen }) => ($isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    gap: 15px;
  }
`;

const Button = styled(Link)`
  background: linear-gradient(135deg, #ff6b00, #ff9000);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  margin: 0 10px;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: linear-gradient(135deg, #ff9000, #ff6b00);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 5px 0;
  }
`;

const HomeLink = styled(Link)`
  color: #ff6b00;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: gray;
  }

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  right: 20px;
  top: 20px;
  color: #ff6b00;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledContainer>
      <LogoContainer>
        <LogoImage 
          src="https://cdn.pixabay.com/photo/2022/01/16/16/44/blogger-logo-6942640_1280.png" 
          alt="Blogs City Logo" 
        />
        <Title>Blogs</Title>
      </LogoContainer>
      
      <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
        <FontAwesomeIcon 
          icon={isMenuOpen ? faTimes : faBars} 
          style={{ fontSize: '1.5rem' }}
        />
      </HamburgerButton>

      <NavContainer $isMenuOpen={isMenuOpen}>
        <HomeLink to="/" onClick={() => setIsMenuOpen(false)}>Home</HomeLink>
        <HomeLink to="/create" onClick={() => setIsMenuOpen(false)}>Create</HomeLink>
        <Button to="/login" onClick={() => setIsMenuOpen(false)}>Login</Button>
        <Button to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Button>
      </NavContainer>
    </StyledContainer>
  );
}

export default Header;
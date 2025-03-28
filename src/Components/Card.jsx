import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Card = ({id, title, description, author, image, date }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="container-desc">
          <div className="main-content">
            <h2 className="heading">{title}</h2>
            <p className="description">{description}</p>
          </div>
          <div className="footer">
            <span>par {author}</span>
            <Link to={`/blog/${id}`} className="read-more">
              Lire Plus
            </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    border: 2px solidrgb(211, 24, 24);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4px 10px rgba(136, 54, 6, 0.2);
  }

  .card:hover {
  padding: 10px;
    background-color:rgb(255, 255, 255);
    transform: scale(0.98);
    box-shadow: 0px 4px 25px rgba(255, 128, 0, 0.5);
  }

  .card-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
  }

  .container-desc {
    padding: 20px;
  }

  .heading {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .description {
    font-size: 20px;
    color: black;
    line-height: 1.5;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    font-size: 14px;
  }

  .read-more {
    background-color: transparent;
    color: #ff6b00;
    border: 1px solid #ff6b00;
    padding: 5px 12px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .read-more:hover {
    background-color:rgb(255, 255, 255);
    color: white;
  }
`;

export default Card;

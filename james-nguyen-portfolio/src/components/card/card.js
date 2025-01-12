import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({ title, header, description }) => {
  return (
    <div className="card">
      <h1>
        <a href={title.link} target="_blank" rel="noopener noreferrer">{title.text}</a>
      </h1>
      <h2>{header}</h2>
      <p>{description}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;

import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({ title, header, description, year }) => {
  return (
    <div className="card">
      <h1>
        <a href={title.link} target="_blank" rel="noopener noreferrer">{title.text}</a>
      </h1>
      <h2>
        {header}
        <span className="year">{year}</span> 
      </h2>
      <p>{description}</p>
      <hr />
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
  }),
  header: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.string,
};

export default Card;

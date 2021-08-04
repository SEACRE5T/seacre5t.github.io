import React from 'react';

const Technology = ({
  text, className
}) => (
  <p className={className}>{text}</p>
);

export default Technology;

Technology.defaultProps = {
  className: "tech-item"
}
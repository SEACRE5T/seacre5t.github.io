import React from 'react';
import './Header.scss';

const Header = ({
  className, text
}) => (
  <h2 className={className}>{text}</h2>
);

export default Header;

Header.defaultProps = {
  className: "header",
  text: "Заголовок"
}
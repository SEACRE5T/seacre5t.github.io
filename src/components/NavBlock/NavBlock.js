import React from 'react';
import { Link } from 'react-router-dom';
import './NavBlock.scss';

const NavBlock = ({
  className, prevPath, nextPath, startPage, lastPage, text
}) => (
  <div className={className}>
    {!startPage && <Link to={prevPath} className="link-button">&#9668;</Link>}
    {!lastPage && <Link to={nextPath} className="link-button">{text} &#9658;</Link>}
  </div>
);

export default NavBlock;

NavBlock.defaultProps = {
  className: "link-block",
  text: "NEXT",
  startPage: false,
  lastPage: false,
}
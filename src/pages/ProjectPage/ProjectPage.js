import React from 'react';
import NavBlock from '../../components/NavBlock/NavBlock';
import { Link } from 'react-router-dom';
import './ProjectPage.scss';
import Header from '../../components/Header/Header';

const ProjectPage = () => {

  const openSitePage = (e) => {
    e.preventDefault()
    window.open("http://176.104.6.131:3000/")
  }

  return (
    <div className="page__container">
      <Header text="WEBSITE PRESENTATION" />
      <div className="underline" />
      <div className="page__content">
        <div className="page__link">
          <img className="page__link-img" src="img/123.jpeg" alt="qr-code"/>
          <img className="page__link-img" src="img/clothes.jpeg" alt="qr-code"/>
          <img className="page__link-img" src="img/jacket.jpeg" alt="qr-code"/>
        </div>
        
      </div>
      <Link className="page__link-button" onClick={(e) => openSitePage(e)}>GO TO WEBSITE</Link>
      <NavBlock prevPath="/project-info" nextPath="/project-results" />
    </div>
  );
};

export default ProjectPage;
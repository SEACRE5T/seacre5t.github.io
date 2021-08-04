import React from 'react';
import './StartPage.scss';
import NavBlock from '../../components/NavBlock/NavBlock';
import Header from '../../components/Header/Header';

const StartPage = () => (
  <>
    <div className="start-page__container">
      <div className="start-page__developer">
        <Header className="start-page__title" text="Presentation Front-End Developer" />
        <div className="motion">
        <img src="/img/start-page/react.png" className="img-motion" alt="react" />
        </div>
      </div>

    </div>
    <NavBlock  className="start-page__link-block" startPage nextPath="/team" text="LET'S GO"/>
  </>
);

export default StartPage;
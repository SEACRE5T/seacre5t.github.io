import React, { useState, useEffect } from 'react';
import './ProjectInfoPage.scss';
import NavBlock from '../../components/NavBlock/NavBlock';
import StatisticsLine from '../../components/StatisticsLine/StatisticsLine';
import Header from '../../components/Header/Header';


const content = [
  {text: 'pull request done - 107', count: '200'},
  {text: 'commits - 393', count: '200'},
  {text: '2 approvals were needed to confirm the request'},
  {text: 'More than 96 cards created in JIRA, 88 of them were closed successfully', count: '200'},

]

const ProjectInfoPage = () => {
  const [count, setCount] = useState(0);
  const render = content.map((e, index) => <StatisticsLine text={e.text} count={count ? e.count : false} key={index}/>)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [count < 8]);

  return (
    <div className="page-info__container">
      <Header text="Project statistics" />
      <div className="underline" />
      <div className="page-info__content">
        {render.slice(0, count)}
      </div>

      {count > 11 ? <NavBlock prevPath="/tech-stack" nextPath="/project-page" /> : null}
    </div>
  );
};

export default ProjectInfoPage;
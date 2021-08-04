import React, { useState, useEffect } from 'react';
import User from '../../components/User/User';
import Header from '../../components/Header/Header';
import NavBlock from '../../components/NavBlock/NavBlock';
import './TeamPage.scss';

const guys = [
  {
    name: "Andrew Kucher",
    src: "/img/team/andrew.jpg",
  },
  {
    name: "Valery Shvets",
    src: "/img/team/valery.jpg",
  },
  {
    name: "Vitaly Verdiyev",
    src: "/img/team/vitalii.jpg",
  },
  {
    name: "Maksym Sachenko",
    src: "/img/team/maksym.jpg"
  },
  {
    name: "Ihor Dubrovskyi",
    src: "/img/team/ihor.jpg"
  },
]

const TeamPage = () => {
  const [count, setCount] = useState(0);
  const team = guys.map((e, index) => <User isScrumMaster={index === 4 } name={e.name} photo={e.src} key={index}/>)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [count < 8]);

  return (
    <div className="team__container">
      <Header text="OUR TEAM" />
      <div className="underline" />
      <div className="team__block">
        <div className="team__junior">
          <div className="team__collection">
            {team.slice(0, count)}
          </div>
        </div>
        <div className="team__senior">
          {count >= 7 ?
          <>
            <Header text="Mentor" />
            <User name="Roman Marchenko" photo="/img/team/roman.jpg" />
          </>
          : null
          }
        </div>
      </div>
      {count >= 8 ? <NavBlock  prevPath="/" nextPath="/tech-stack"/> : null}
    </div>
  );
};

export default TeamPage;
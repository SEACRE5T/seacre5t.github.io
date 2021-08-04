import React from 'react';
import "./User.scss"

const User = ({
  name, photo, isScrumMaster
}) => (
  <div className="user__container">
    <h2 className="user__name">{name}</h2>
    {isScrumMaster && <h2 style={{fontSize: "20px"}} className="user__name">Scrum Master</h2>}
    <img src={photo} className="user__photo"/>
  </div>
);

export default User;

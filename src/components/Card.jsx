import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

var card = function (props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar imgURL={props.imgURL} />
      </div>
      <div className="bottom">
        <Detail info={props.phone} />
        <Detail info={props.email} />
      </div>
    </div>
  );
};

export default card;

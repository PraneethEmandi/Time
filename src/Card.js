
import React, { useState, useEffect } from "react";
import profilePic from "./assets/image-jeremy.png";
import workpic from "./assets/icon-work.svg";
import playpic from "./assets/icon-play.svg";
import studypic from "./assets/icon-study.svg";
import exercise from "./assets/icon-exercise.svg";
import social from "./assets/icon-social.svg";
import selfcare from "./assets/icon-self-care.svg";
import "./Card.css"; 
import jsonData from './data.json'; 
function Card() {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("daily");
  const [activityData, setActivityData] = useState([]);

  const fetchData = () => {
    const dataForPeriod = jsonData.map(activity => ({
      title: activity.title,
      current: activity.timeframes[selectedTimePeriod].current,
      previous: activity.timeframes[selectedTimePeriod].previous
    }));
    setActivityData(dataForPeriod);
  };

  useEffect(() => {
    fetchData();
  }, [selectedTimePeriod]);

  return (
    <div className={`home ${selectedTimePeriod}`}>
      <div className="contain">
        <div className="profile">
          <div className="name">
            <img src={profilePic} alt="profile picture" />
            <div className="nameText">
              <p>Report for</p>
              <h3>Jeremy Robson</h3>
            </div>
          </div>
          <div className="time">
            <p onClick={() => setSelectedTimePeriod("daily")}>Daily</p>
            <p onClick={() => setSelectedTimePeriod("weekly")}>Weekly</p>
            <p onClick={() => setSelectedTimePeriod("monthly")}>Monthly</p>
          </div>
        </div>
        <div className="data">
          {activityData.map((activity, index) => (
            <div className={`card${index + 1}`} key={index}>
              <div className="image">
                {index === 0 && <img src={workpic} alt="work icon" />}
                {index === 1 && <img src={playpic} alt="play icon" />}
                {index === 2 && <img src={studypic} alt="study icon" />}
                {index === 3 && <img src={exercise} alt="exercise icon" />}
                {index === 4 && <img src={social} alt="social icon" />}
                {index === 5 && <img src={selfcare} alt="self care icon" />}
              </div>
              <div className={`cardData${index + 1}`}>
                <div className="cardHeader">
                  <p>{activity.title}</p>
                  <div className="dots">...</div>
                </div>
                <div className="cardBody">
                <h3 className="current">{activity.current}hrs</h3>
                <p className="previous">Last Week - {activity.previous}hrs</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;

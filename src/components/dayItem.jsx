import React, { useEffect, useState } from "react";
import helpers from "./helpers";
import "./styles/dailyItem.css";

const DayItem = ({ item, degreeType }) => {
  const [iconId, setIconId] = useState(null);

  useEffect(() => {
    // to able to get the icons I need to add 0 when the number is single (example 1 -> 01)
    let icon = item.Day.Icon;
    icon = helpers.setIconId(icon);
    setIconId(icon);
  }, [item.Day.Icon, iconId]);

  const renderDay = () => {
    const date = item.Date;
    const day = new Date(date).toString();
    return day.split(" ")[0];
  };

  return (
    iconId && (
      <div className="col-md-2 col-sm-4 mr-2">
        <div className="card card-daily">
          <span className="icon">
            <img
              className="img-fluid"
              src={`https://developer.accuweather.com/sites/default/files/${iconId}-s.png`}
              alt="weatherImage"
            />
          </span>
          <div className="title">
            <p>{renderDay()}</p>
          </div>
          <div className="temp">
            {degreeType ? item.celsius + " c" : item.fahrenheit + " F"}
          </div>
        </div>
      </div>
    )
  );
};

export default DayItem;

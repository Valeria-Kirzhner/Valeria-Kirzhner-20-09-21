import React from "react";

const DegreeToggle = ({}) => {
  return (
    <React.Fragment>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="degree-type"
          id="celsius"
          value="celsius"
          checked="true"
          //onChange={updateForecastDegree}
        />
        <label className="form-check-label" for="celsius">
          Celsius
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="degree-type"
          id="farenheit"
          value="fahrenheit"
          checked="false"
          //onChange={updateForecastDegree}
        />
        <label className="form-check-label" for="farenheit">
          Farenheit
        </label>
      </div>
    </React.Fragment>
  );
};

export default DegreeToggle;

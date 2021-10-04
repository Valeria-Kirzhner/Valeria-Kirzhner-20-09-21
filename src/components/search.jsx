import React, { useEffect, useState } from "react";
import { locationAutocomplete } from "../services/weatherService";
import { toast } from "react-toastify";

import { connect } from "react-redux";
import {
  setCityId,
  setCityName,
  getCurrentWeather,
  get5DaysForecast,
} from "../store/foreacast/forecastAction";

const Search = ({
  setCityId,
  setCityName,
  get5DaysForecast,
  getCurrentWeather,
}) => {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState([]);

  const handleOnChangeInput = (e) => {
    toast.configure();
    const regex = /[^A-Za-z ]/gi;
    let value = e.target.value;
    if (regex.test(value)) {
      toast("Endlish latters only.");
    }
    value = value.replace(/[^A-Za-z]/gi, "");

    setUserInput(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const payload = await locationAutocomplete(userInput);
      setData(payload.data);
    };
    if (userInput.length > 0) {
      fetchData();
    } else {
      setUserInput("");
    }
  }, [userInput]);

  const onClickSelectCity = (item) => {
    getCurrentWeather(item.Key);
    get5DaysForecast(item.Key);
    setCityName(item.LocalizedName);
    setCityId(item.Key);
    setUserInput("");
  };

  return (
    <div>
      <div className="d-flex">
        <input
          value={userInput}
          onChange={handleOnChangeInput}
          className="form-control "
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <ul className="list-group ul-list-group">
        {userInput.length > 0 &&
          data &&
          data.splice(0, 4).map((item) => (
            <li
              className="list-group-item"
              key={item.Key}
              onClick={() => onClickSelectCity(item)}
            >
              {item.LocalizedName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default connect(null, {
  setCityId,
  setCityName,
  get5DaysForecast,
  getCurrentWeather,
})(Search);

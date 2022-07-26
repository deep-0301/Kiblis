import React, { useState } from "react";
import axios from "axios";

function SearchBar() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    name: "",
    description: "",
    temp: "",
    humidity: "",
    country: "",
  });

  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9aa638bacfaf798b8f2f807f40a4d360`
      )
      .then((res) => {
        console.log(res.data);
        setFlag(true);
        setData({
          name: res.data.name,
          description: res.data.weather[0].description,
          humidity: res.data.main.humidity,
          temp: res.data.main.temp,
          country: res.data.sys.country,
        });
      });
  };
  let tempC;
  if (flag) {
    tempC = parseInt(data.temp - 273.15) + "C";
  }
  return (
    <>
      <div className="searchbar container text-center">
        <div className="search-title">
          <h1>Check Weather for your city</h1>
        </div>
        <div className="search-input">
          <input
            type="text"
            value={city}
            className="w-75"
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <button
            type="submit"
            onClick={handleClick}
            className="search-btn w-25"
          >
            Search
          </button>
        </div>

        <div>
          <h3>{data.name}</h3>
          <ul>
            <li>
              <h1>{tempC}</h1>
            </li>
            <li>
              <h2>{data.country}</h2>
            </li>
            <li>
              <h3>{data.description}</h3>
            </li>
            <li>{data.humidity}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SearchBar;

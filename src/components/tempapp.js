import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=635a877828161dd873ff4ccc7466fdb1`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className='box'>
        <div className='inputData'>
          <input
            type='search'
            className='inputField'
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {/*Ternary Operator*/}
        {!city ? (
          <p className='errorMsg'> Data not found....</p>
        ) : (
          <div>
            <div className='info'>
              <h2 className='location'>
                <i className='fas fa-street-view'></i>
                {search}
              </h2>
              <h1 className='temp'> {city.temp}°C </h1>
              <h3 className='tempmin_max'>
                {city.temp_min}°C | {city.temp_max}°C
              </h3>
            </div>

            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;

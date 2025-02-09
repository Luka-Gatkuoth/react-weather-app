import React from 'react'
import { FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import "./description.css"

const Description = ({weather, units}) => {
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  // card data
  const cards = [
    {
      id: 1,
      icon: <BiHappy />,
      title: "feels like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 3,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 4,
      icon: <FaWind />,
      title: "wind speed",
      data: weather.speed.toFixed(),
      unit: windUnit,
    }
  ];
  return (
    <div className='section section__description'>
      {cards.map((id, icon, title, data, unit) =>{
        <div className="card" key={id}>
          <div className="description__card-icon">
          <FaArrowDown />
          <small>Min</small>
          </div>
          <h2>32°C</h2>
      </div>

        })}
    </div>
  )
}

export default Description;

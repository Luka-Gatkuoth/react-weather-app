import React from 'react'
import { FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import "./description.css"

const Description = () => {
  return (
    <div className='section section__description'>
      <div className="card">
        <div className="description__card-icon">
        <FaArrowDown />
        <small>Min</small>
        </div>
        <h2>32°C</h2>
      </div>
      <div className="card">
        <div className="description__card-icon">
        <FaArrowDown />
        <small>Min</small>
        </div>
        <h2>32°C</h2>
      </div>
      <div className="card">
        <div className="description__card-icon">
        <FaArrowDown />
        <small>Min</small>
        </div>
        <h2>32°C</h2>
      </div>
      <div className="card">
        <div className="description__card-icon">
        <FaArrowDown />
        <small>min</small>
        </div>
        <h2>32°C</h2>
      </div>
    </div>
  )
}

export default Description;

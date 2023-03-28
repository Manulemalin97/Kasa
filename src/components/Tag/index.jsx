import React from 'react'
import './index.css'
import tagImg from '../../assets/tag.png'

function Tag({ text }) {
   return (
      <div className="tag">
         <img src={tagImg} alt="tag icon" />
         <span className="tag__text">{text}</span>
      </div>
   )
}

export default Tag

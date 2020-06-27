import React from 'react';
import './smart-card.css';

function SmartCard(props) {
  return (
    <div className="card list pad-responsive flex flex-column flex-justify-between">
      {props.imgSrc ?
      <div className="card-image-wrapper">
        <img className="card-image" src={`${props.imgSrc}`} alt={`${props.altText}`} />
      </div> : null }
      {props.title ?
      <p className="card-title" style={{color: `${props.titleColor}`}}>{props.title}</p> : null }
      {props.des ?
      <p className="card-des" style={{color: `${props.desColor}`}}>{props.des}</p> : null }
      {props.linkText ?
      <a href={`${props.linkUrl}`} className={`card-link ${props.linkTheme}`} style={{color: `${props.linkColor}`}}>{props.linkText}</a> : null }
      {props.btnText ?
        <a href={`${props.btnUrl}`} className={`card-btn ${props.btnTheme}`} style={{backgroundColor: `${props.btnBg}`, color: `${props.btnColor}`}}>{props.btnText}</a>
         : null }
    </div>
  );
}

export default SmartCard;
